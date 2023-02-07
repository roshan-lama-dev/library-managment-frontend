import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1/";
const userUrl = "/user";

export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(baseUrl + userUrl, userObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (useObj) => {
  try {
    const { data } = await axios.post(baseUrl + userUrl + "/login", useObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
