import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { DashBoardLayout } from "../component/customLayout/DashBoardLayout";
import { addBookFrontend } from "../helpers/axiosHelper";
import { toast } from "react-toastify";
const initalValue = {
  author: "",
  isbn: "",
  thumbnail: "",
  title: "",
  year: "",
};
export const AddBooks = () => {
  const [addBookDetails, setAddBookDetails] = useState(initalValue);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAddBookDetails({
      ...addBookDetails,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(addBookDetails);
    const { status, message } = await addBookFrontend(addBookDetails);

    if (status === "success") {
      setAddBookDetails(initalValue);
    }
    toast[status](message);
  };

  return (
    <DashBoardLayout>
      <div className="add">
        <div className="add-top">
          <h1>Add Books</h1>
        </div>
        <div className="add-bottom d-flex gap-2">
          <Col md={7} className="img d-none d-sm-block">
            {" "}
            <img
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="helo"
            />
          </Col>

          <Col md={5} sm={12}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  placeholder="Book Title"
                  required
                  type="text"
                  name="title"
                  value={addBookDetails.title}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  placeholder="Book Author"
                  required
                  type="text"
                  value={addBookDetails.author}
                  name="author"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  placeholder="ISBN"
                  onChange={handleOnChange}
                  required
                  type="text"
                  value={addBookDetails.isbn}
                  name="isbn"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                  placeholder="Year"
                  onChange={handleOnChange}
                  required
                  value={addBookDetails.year}
                  type="text"
                  name="year"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Thumbnail</Form.Label>
                <Form.Control
                  onChange={handleOnChange}
                  placeholder="Book Image URL"
                  type="text"
                  value={addBookDetails.thumbnail}
                  name="thumbnail"
                />
              </Form.Group>

              <Button type="submit">Add Books</Button>
            </Form>
          </Col>
        </div>
      </div>
    </DashBoardLayout>
  );
};
