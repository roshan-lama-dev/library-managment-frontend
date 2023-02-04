import axios from "axios";

const baseEp = "http://localhost:3000/api/v1/";

const userApi = baseEp + "user";
export const registerUser = async (registerObj) => {
  try {
    const result = await axios.post(userApi, registerObj);
    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (loginObj) => {
  try {
    const result = await axios.post(userApi + "/login", loginObj);
    return result;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
