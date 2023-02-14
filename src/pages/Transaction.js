import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { DashBoardLayout } from "../component/customLayout/DashBoardLayout";
import { getTransaction } from "../helpers/axiosHelper";

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);

  const fetchAllTransaction = async () => {
    const res = await getTransaction();
    setTransaction(res);
  };
  console.log(transaction);
  useEffect(() => {
    fetchAllTransaction();
  }, []);
  return (
    <DashBoardLayout>
      <Container>
        <Row className="p-5">
          <Table>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Book</th>
                <th>Title</th>
                <th>Author</th>
                <th>Borrowed By</th>
                <th>Borrowed Date</th>
                <th>Returned Date</th>
              </tr>
            </thead>
            <tbody>
              {transaction?.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.borrowedBooks.thumbnail}
                        alt="BookImage"
                        style={{ width: "85%" }}
                      ></img>
                    </td>
                    <td>{item.borrowedBooks.title}</td>
                    <td>{item.borrowedBooks.author}</td>
                    <td>{item.borrowedBy.userName}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td
                      className={
                        item.returnDate ? "text-success" : "text-danger"
                      }
                    >
                      {item.returnDate
                        ? new Date(item.returnDate).toLocaleDateString()
                        : "Not returned yet"}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </DashBoardLayout>
  );
};

export default Transaction;
