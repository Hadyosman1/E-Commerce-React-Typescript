import {TLoading} from "@types";
import Loading from "../Loading/Loading";
import { Alert } from "react-bootstrap";

import { MdSmsFailed } from "react-icons/md";

type TProps = {
  children: React.ReactNode;
  loading: TLoading;
  error: null | string;
};

const IsLoadingOrError = ({ children, error, loading }: TProps) => {
  if (loading === "pending") {
    return <Loading />;
  }

  if (error) {
    return (
      <Alert variant="danger text-center fs-5 fw-semibold">
        <MdSmsFailed /> {error}
      </Alert>
    );
  }

  return children;
};

export default IsLoadingOrError;
