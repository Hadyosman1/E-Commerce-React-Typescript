import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";

import { useForm, SubmitHandler } from "react-hook-form";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import { loginScheme, LoginType } from "@validations/loginScheme";

import loginThunk from "@store/auth/thunks/loginThunk";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { resetLoadingAndError } from "@store/auth/authSlice";

const useLogin = () => {
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
    mode: "all",
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

  return {
    loading,
    error,
    submitForm,
    register,
    handleSubmit,
    getFieldState,
    errors,
  };
};

export default useLogin;
