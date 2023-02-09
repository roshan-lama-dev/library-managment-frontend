import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { BookList } from "../component/bookCustomDisplay/BookList";
import { DashBoardLayout } from "../component/customLayout/DashBoardLayout";
import { getBooksFrom } from "../helpers/axiosHelper";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const fetchAllBooks = async () => {
    const response = await getBooksFrom();
    // console.log(response.result);
    setBooks(response.result);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <DashBoardLayout>
      <Container>
        <Row className="p-5">
          <BookList books={books} />
        </Row>
      </Container>
      s
    </DashBoardLayout>
  );
};
