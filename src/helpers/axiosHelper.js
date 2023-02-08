import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
const baseUrl = "http://localhost:8000/api/v1/";
console.log(baseUrl);
const userUrl = "user";
const bookUrl = "books";
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

// ==========BOOKS AXIOS ==============

export const addBookFrontend = async (bookObj) => {
  try {
    const { data } = await axios.post(baseUrl + bookUrl + "addbook", bookObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getBooksFrom = async (bookIsbn) => {
  try {
    const { data } = await axios.post(baseUrl + bookUrl, bookIsbn);
    return data;
  } catch (error) {}
};
