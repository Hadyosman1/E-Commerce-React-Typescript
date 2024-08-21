import axios, { AxiosResponse } from "axios";
import { useState } from "react";

type TEmailAvailability =
  | "idle"
  | "checking"
  | "available"
  | "notAvailable"
  | "failed";

// type TResponse = {
//   firstName: string;
//   lastName: string;
//   password: string;
//   email: string;
// };

const useCheckIsEmailAvailable = () => {
  const [checkIsEmailAvailableStatus, setCheckIsEmailAvailableStatus] =
    useState<TEmailAvailability>("idle");

  const [prevEmail, setPrevEmail] = useState<undefined | string>(undefined);

  const checkIsEmailAvailableHandler = async (email: string) => {
    setPrevEmail(email);
    setCheckIsEmailAvailableStatus("checking");
    try {
      const res: AxiosResponse = await axios.get(`/users?email=${email}`);

      if (!res.data.length) {
        setCheckIsEmailAvailableStatus("available");
      } else {
        setCheckIsEmailAvailableStatus("notAvailable");
      }
    } catch (error) {
      setCheckIsEmailAvailableStatus("failed");
    }
  };

  return {
    checkIsEmailAvailableHandler,
    prevEmail,
    checkIsEmailAvailableStatus,
    setPrevEmail,
    setCheckIsEmailAvailableStatus
  };
};

export default useCheckIsEmailAvailable;
