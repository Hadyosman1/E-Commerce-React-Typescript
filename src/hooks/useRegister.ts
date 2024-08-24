import { useForm, SubmitHandler } from "react-hook-form";
import useCheckIsEmailAvailable from "@hooks/useCheckIsEmailAvailable";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { registerScheme, RegisterType } from "@validations/registerScheme";

import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import registerThunk from "@store/auth/thunks/registerThunk";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resetLoadingAndError } from "@store/auth/authSlice";

const useRegister = () => {
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
    mode: "all",
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
  return {
    loading,
    error,
    register,
    handleSubmit,
    errors,
    onBlurHandler,
    submitForm,
    getFieldState,
    checkIsEmailAvailableStatus,
  };
};

export default useRegister;
