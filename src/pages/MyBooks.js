import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import { DashBoardLayout } from "../component/customLayout/DashBoardLayout";

export const MyBooks = () => {
  const fetchMybooks = () => {};
  return (
    <DashBoardLayout>
      <Container>
        <Row className="p-5">
          <Table striped border hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Row>
      </Container>
    </DashBoardLayout>
  );
};
