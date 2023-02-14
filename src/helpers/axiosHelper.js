import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
const baseUrl = "http://localhost:8000/api/v1/";
console.log(baseUrl);
const userUrl = "user";
const bookUrl = "books";
const bookEp = baseUrl + bookUrl;
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

export const getUserId = () => {
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  if (userObj) {
    return userObj?._id;
  } else {
    return;
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
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error",
        message: "Please log in first",
      };
    }
    console.log(userId);
    const { data } = await axios.post(baseUrl + bookUrl + "/addbook", bookObj, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getBooksFrom = async () => {
  try {
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error",
        message: "Please log in first",
      };
    }
    console.log(userId);
    const { data } = await axios.get(baseUrl + bookUrl, {
      headers: {
        Authorization: userId,
      },
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// borrow books
export const borrowBooks = async (bookId) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please log in first",
      };
    }

    const { data } = await axios.post(
      bookEp + "/borrow",
      { bookId },
      {
        headers: {
          Authorization: userId,
        },
      }
    );

    return data;
  } catch (error) {
    return {
      status: "error",
      mesage: error.message,
    };
  }
};

// delete book
export const deltebooks = async (bookId) => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }

    const { data } = await axios.delete(bookEp, {
      data: { bookId },
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// get borrowed books
export const getBorrowedBooks = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      return {
        status: "error",
        message: "Please login first",
      };
    }

    const { data } = await axios.get(bookEp + "/borrowedBooks", {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const returnBorrowedBooks = async (bookId) => {
  try {
    const userId = getUserId();

    if (!userId) {
      return {
        status: "error",
        message: "Please Login first",
      };
    }
    const { data } = await axios.patch(
      bookEp + "/returnBooks",
      { bookId },
      { headers: { Authorization: userId } }
    );
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error,
    };
  }
};
