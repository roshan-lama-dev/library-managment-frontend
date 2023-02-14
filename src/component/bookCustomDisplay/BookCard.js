import React from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { borrowBooks, deltebooks } from "../../helpers/axiosHelper";

export const BookCard = ({ book, fetchAllBooks }) => {
  const handleBorrow = async (bookId) => {
    console.log(bookId);

    if (bookId) {
      const { status, message } = await borrowBooks(bookId);
      status === "success" ? toast.success(message) : toast.warning(message);
    }
  };

  // const getUserFromStorage = () => {
  //   const userObj = JSON.parse(sessionStorage.getItem("user"));
  //   return userObj;
  // };
  const handleDeleteBooks = async (bookId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this book from the system?"
      )
    ) {
      if (bookId) {
        const { status, message } = await deltebooks(bookId);
        toast[status](message) && fetchAllBooks();
      }
    }
  };
  console.log(book);
  return (
    <div>
      <Card style={{ width: "18rem", border: "none" }}>
        <Card.Img
          src={book?.thumbnail}
          style={{ width: "50%", margin: "1rem auto" }}
        ></Card.Img>
        <Card.Body className="text-center">
          <Card.Title>{book.title}</Card.Title>
          <div className="d-flex gap-2 justify-content-center">
            {/* {const userObj =getUserFromStorage()} */}
            <Button
              variant="info"
              onClick={() => {
                handleBorrow(book._id);
              }}
            >
              Borrow
            </Button>
            <Button
              onClick={() => {
                handleDeleteBooks(book._id);
              }}
              variant="danger"
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
