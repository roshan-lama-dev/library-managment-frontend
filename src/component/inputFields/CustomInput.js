import React from "react";
import { Form } from "react-bootstrap";

export const CustomInput = ({ label, ...bakhi }) => {
  return (
    <div>
      {" "}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...bakhi} />
      </Form.Group>
    </div>
  );
};
