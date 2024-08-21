import FormInput from "./FormInput";
import useCheckIsEmailAvailable from "@hooks/useCheckIsEmailAvailable";

import { useForm, SubmitHandler } from "react-hook-form";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { loginScheme, LoginType } from "@validations/loginScheme";

import { Button, Form } from "react-bootstrap";

// icons
// import { TbMoodHappy } from "react-icons/tb";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<LoginType>({
    mode: "onBlur",
    resolver: zodResolver(loginScheme),
  });

  const {
    checkIsEmailAvailableHandler,
    checkIsEmailAvailableStatus,
    prevEmail,
    setPrevEmail,
    setCheckIsEmailAvailableStatus,
  } = useCheckIsEmailAvailable();

  const submitForm: SubmitHandler<LoginType> = (data) => {
    console.log(data);
  };

  const onEmailInputBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
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
        onBlur={onEmailInputBlur}
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

export default LoginForm;
