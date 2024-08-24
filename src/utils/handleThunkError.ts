import axios from "axios";
export default (error: object | unknown) => {
  console.log(error);
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data || error.response?.data.message || error.message
    );
  } else {
    return "Failed to fetch data..!";
  }
};
