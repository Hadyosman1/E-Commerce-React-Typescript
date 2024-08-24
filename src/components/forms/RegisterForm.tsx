import useRegister from "@hooks/useRegister";
import FormInput from "./FormInput";

import { Alert, Button, Form, Spinner } from "react-bootstrap";

const RegisterForm = () => {
  const {
    loading,
    error,
    register,
    handleSubmit,
    errors,
    onBlurHandler,
    submitForm,
    checkIsEmailAvailableStatus,
    getFieldState,
  } = useRegister();

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
