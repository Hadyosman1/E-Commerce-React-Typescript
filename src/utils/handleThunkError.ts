import axios from "axios";
export default (error: object | unknown) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data.message || error.message;
  } else {
    return "Failed to fetch data..!";
  }
};
