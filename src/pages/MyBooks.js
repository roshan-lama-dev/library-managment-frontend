import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { DashBoardLayout } from "../component/customLayout/DashBoardLayout";
import { getBorrowedBooks, returnBorrowedBooks } from "../helpers/axiosHelper";

export const MyBooks = () => {
  const [books, setborrowedBooks] = useState([]);
  const fetchBorrowedBooks = async () => {
    const response = await getBorrowedBooks();
    setborrowedBooks(response);
  };

  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  // console.log(books);
  const handleOnClick = async (bookId) => {
    if (window.confirm("Do you want to return this book")) {
      const { status, message } = await returnBorrowedBooks(bookId);

      toast[status](message);
      // fetchBorrowedBooks();
      // we can use the conditinal rendering using the books array
    } else {
      return;
    }
  };
  return (
    <DashBoardLayout>
      <Container>
        <Row className="p-5">
          <Table striped border hover>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Book</th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books?.map((item, index) => (
                <tr key={item?._id} className="text-center">
                  <td>{index + 1}</td>
                  <td style={{ width: "19%" }}>
                    <img
                      src={item?.thumbnail}
                      alt="bookImage"
                      width={"100%"}
                    ></img>
                  </td>
                  <td>{item?.title}</td>
                  <td>{item?.author}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleOnClick(item?._id)}
                    >
                      Return
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </DashBoardLayout>
  );
};
