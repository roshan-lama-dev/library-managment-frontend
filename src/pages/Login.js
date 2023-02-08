import React, { useState } from "react";
import { MainLayout } from "../component/customLayout/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../component/inputFields/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({});
  const navigate = useNavigate();
  const input = [
    {
      label: "Email",
      placeholder: "abc@gmail.com",
      type: "email",
      name: "email",
      required: "true",
    },
    {
      label: "Password",
      placeholder: "******",
      type: "password",
      name: "password",
      required: "true",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleOnLogin = async (e) => {
    e.preventDefault();

    const { status, message, result } = await loginUser(loginDetails);

    if (status === "success") {
      toast[status](message);

      sessionStorage.setItem("user", JSON.stringify(result));
      navigate("/books");
    }
  };
  return (
    <MainLayout>
      <Container>
        <Row className="p-5">
          <Col className=" d-flex align-item-center justify-content-center login-background p-5  d-none d-md-flex">
            <div className="d-flex  text-center opacity-75 flex-column align-item-center justify-content-center login-info bg-black  text-white rounded p-4">
              <h1 className="text-center">Welcome back to the system</h1>
              <hr />
              <p>Please login to the system using your credentials</p>
            </div>
          </Col>
          <Col className="p-5 bg-primary">
            <div className="login-field p-4 bg-light rounded ">
              <Form onSubmit={handleOnLogin}>
                <h2>Login</h2>
                <hr />
                {input.map((item, i) => (
                  <CustomInput key={i} {...item} onChange={handleOnChange} />
                ))}
                <div className="d-grid">
                  <Button type="submit">Login</Button>
                </div>
                <div className="mt-3">
                  <span>Don't have an account?</span>{" "}
                  <Link to="/register">Register here</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
