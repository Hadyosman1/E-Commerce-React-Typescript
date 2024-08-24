import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./FormInput";
import useCheckIsEmailAvailable from "@hooks/useCheckIsEmailAvailable";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { registerScheme, RegisterType } from "@validations/registerScheme";

import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import registerThunk from "@store/auth/thunks/registerThunk";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resetLoadingAndError } from "@store/auth/authSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<RegisterType>({
    mode: "onBlur",
    resolver: zodResolver(registerScheme),
  });

  const {
    checkIsEmailAvailableHandler,
    checkIsEmailAvailableStatus,
    prevEmail,
    setCheckIsEmailAvailableStatus,
    setPrevEmail,
  } = useCheckIsEmailAvailable();

  const submitForm: SubmitHandler<RegisterType> = (data) => {
    const { email, firstName, lastName, password } = data;
    dispatch(registerThunk({ email, firstName, lastName, password }))
      .unwrap()
      .then(() => navigate("/login?message=account_created"));
  };

  const onBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && prevEmail?.trim() !== value.trim()) {
      checkIsEmailAvailableHandler(value);
    }
    if (isDirty && invalid && prevEmail) {
      setPrevEmail(undefined);
      setCheckIsEmailAvailableStatus("idle");
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetLoadingAndError());
    };
  }, [dispatch]);

  return (
    <>
      <Form
        onSubmit={handleSubmit(submitForm)}
        className="custom-primary-shadow-lg px-3 py-4 rounded-2 bg-custom-secondary-dark"
      >
        <FormInput
          register={register}
          error={errors.firstName?.message}
          name="firstName"
          label="First name"
          placeholder="John"
          isValid={
            !errors.firstName?.message && getFieldState("firstName").isDirty
          }
        />

        <FormInput
          register={register}
          error={errors.lastName?.message}
          name="lastName"
          label="Last name"
          placeholder="Doe"
          isValid={
            !errors.lastName?.message && getFieldState("lastName").isDirty
          }
        />

        <FormInput
          register={register}
          onBlur={onBlurHandler}
          label="Email address"
          name="email"
          placeholder="example@example.com"
          error={
            errors.email?.message
              ? errors.email?.message
              : checkIsEmailAvailableStatus === "notAvailable"
              ? "This email has been taken"
              : ""
          }
          isValid={checkIsEmailAvailableStatus === "available"}
          checkingMessage={
            checkIsEmailAvailableStatus === "checking" ? "Checking" : ""
          }
          disabled={checkIsEmailAvailableStatus === "checking"}
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

        <FormInput
          register={register}
          error={errors.confirmPassword?.message}
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          isValid={
            !errors.confirmPassword?.message &&
            !errors.password?.message &&
            getFieldState("confirmPassword").isDirty
          }
        />

        <Button
          disabled={
            checkIsEmailAvailableStatus === "checking" || loading === "pending"
          }
          className="btn btn-custom-primary w-100 mt-3"
          type="submit"
        >
          {(checkIsEmailAvailableStatus === "checking" ||
            loading === "pending") && (
            <Spinner size="sm" animation="border" />
          )}{" "}
          Submit
        </Button>
      </Form>
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
    </>
  );
};

export default RegisterForm;
