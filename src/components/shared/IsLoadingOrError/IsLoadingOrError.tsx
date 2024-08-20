import { TLoading } from "@types";
import Loading from "../../feedback/Loading/Loading";
import { Alert } from "react-bootstrap";
import Lottie from "lottie-react";
import errorLottie from "@assets/lottie-files/error.json";

import { MdSmsFailed } from "react-icons/md";

type TProps = {
  children: React.ReactNode;
  loading: TLoading;
  error: null | string;
  loadingIndicator?: React.ReactNode;
};

const IsLoadingOrError = ({
  children,
  error,
  loading,
  loadingIndicator = <Loading />,
}: TProps) => {
  if (loading === "pending") {
    return loadingIndicator;
  }

  if (error) {
    return (
      <>
        <div
          style={{ background: "#3F545f" }}
          className="d-flex justify-content-center align-items-center mb-3 rounded-2"
        >
          <Lottie
            animationData={errorLottie}
            style={{ width: "clamp(280px,500px,100%)" }}
          />
        </div>
        <Alert variant="danger text-center fs-5 fw-semibold">
          <MdSmsFailed /> {error}
        </Alert>
      </>
    );
  }

  return children;
};

export default IsLoadingOrError;
