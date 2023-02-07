import React, { useState } from "react";
import { MainLayout } from "../component/customLayout/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../component/inputFields/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

const intialForm = {};

export const Register = () => {
  const navigate = useNavigate();
  const [registerDetails, setRegisterDetails] = useState({});
  const registerfield = [
    {
      label: "First Name",
      placeholder: "John",
      type: "text",
      required: "true",
      name: "fName",
    },
    {
      label: "Last Name",
      placeholder: "Doe",
      type: "text",
      required: "true",
      name: "lName",
    },
    {
      label: "Email",
      placeholder: "John@gmail.com",
      type: "email",
      required: "true",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "*******",
      type: "password",
      required: "true",
      name: "password",
    },
    {
      label: "Role",
      placeholder: "Select your role",
      type: "text",
      required: "true",
      name: "role",
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };

  const handleOnRegister = async (e) => {
    e.preventDefault();

    const { status, message } = await registerUser(registerDetails);
    if (status === "success") {
      toast[status](message);
      navigate("/");
    } else {
      toast[status](message);
    }
  };
  return (
    <MainLayout>
      <Container>
        <Row className="p-5">
          <Col
            md
            className="login-background  p-5 d-flex  justify-content-center d-none d-md-flex"
          >
            <div className="register-details  d-flex flex-column align-item-center justify-content-center p-4 bg-dark rounded text-light opacity-75 text-center ">
              <h2>
                Welcome to Library Management. This system lets you manage the
                books in the online libray
              </h2>
              <hr />
              <p>Please register using the form</p>
            </div>
          </Col>
          <Col md className="p-5 bg-primary">
            <div className="p-4 register-field bg-light rounded">
              <Form onSubmit={handleOnRegister}>
                <h2>Register</h2>
                <hr />
                {registerfield.map((item, i) => (
                  <CustomInput {...item} key={i} onChange={handleOnChange} />
                ))}

                <div className="d-grid">
                  <Button type="submit">Register</Button>
                </div>
                <div className="mt-3">
                  <span>Have an account?</span>
                  <Link to="/">Login</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
