import FormInput from "./FormInput";

import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";

import { useForm, SubmitHandler } from "react-hook-form";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { loginScheme, LoginType } from "@validations/loginScheme";

import { Alert, Button, Form, Spinner } from "react-bootstrap";
import loginThunk from "@store/auth/thunks/loginThunk";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { resetLoadingAndError } from "@store/auth/authSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.auth);
  const [searchParam, setSearchParam] = useSearchParams();

  const {
    register,
    handleSubmit,
    getFieldState,

    formState: { errors },
  } = useForm<LoginType>({
    mode: "onBlur",
    resolver: zodResolver(loginScheme),
  });

  const submitForm: SubmitHandler<LoginType> = (data) => {
    if (searchParam.has("message")) setSearchParam("");
    dispatch(loginThunk(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  useEffect(() => {
    return () => {
      dispatch(resetLoadingAndError());
    };
  }, [dispatch]);

  return (
    <>
      {error && (
        <Alert dismissible={true} variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
      <Form
        onSubmit={handleSubmit(submitForm)}
        className="custom-primary-shadow-lg px-3 py-4 rounded-2 bg-custom-secondary-dark"
      >
        <FormInput
          register={register}
          label="Email address"
          name="email"
          placeholder="example@example.com"
          error={errors.email?.message}
          isValid={!errors.email?.message && getFieldState("email").isDirty}
        />

        <FormInput
          register={register}
          error={errors.password?.message}
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          isValid={
            !errors.password?.message && getFieldState("password").isDirty
          }
        />

        <Button
          disabled={loading === "pending"}
          className="btn btn-custom-primary w-100 mt-3"
          type="submit"
        >
          {loading === "pending" && <Spinner size="sm" animation="border" />}{" "}
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
