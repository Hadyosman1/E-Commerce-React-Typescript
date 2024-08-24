import FormInput from "./FormInput";

import { Alert, Button, Form, Spinner } from "react-bootstrap";
import useLogin from "@hooks/useLogin";

const LoginForm = () => {
  const {
    loading,
    error,
    submitForm,
    register,
    handleSubmit,
    getFieldState,
    errors,
  } = useLogin();

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
