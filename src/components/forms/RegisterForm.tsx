import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "./FormInput";
import useCheckIsEmailAvailable from "@hooks/useCheckIsEmailAvailable";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { registerScheme, RegisterType } from "@validations/registerScheme";

import { Button, Form } from "react-bootstrap";

const RegisterForm = () => {
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
    console.log(data);
  };

  const onBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && prevEmail?.trim() !== value.trim()) {
      checkIsEmailAvailableHandler(value);
    }

    if (isDirty && invalid && value.length > 1) {
      setPrevEmail(undefined);
      setCheckIsEmailAvailableStatus("idle");
    }
  };

  return (
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
        isValid={!errors.lastName?.message && getFieldState("lastName").isDirty}
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
        isValid={!errors.password?.message && getFieldState("password").isDirty}
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
        disabled={checkIsEmailAvailableStatus === "checking"}
        className="btn btn-custom-primary w-100 mt-3"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
