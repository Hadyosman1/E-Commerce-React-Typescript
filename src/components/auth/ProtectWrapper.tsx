import { useAppSelector } from "@hooks/reduxHooks";
import { Navigate } from "react-router-dom";

const ProtectWrapper = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to={"/login?message=login_required"} />;
  }

  return children;
};

export default ProtectWrapper;
