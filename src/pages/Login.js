import React, { useState } from "react";
import { MainLayout } from "../components/MainLayout";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { CustomInput } from "../components/CustomInput";
import { loginUser } from "../helpers/axiosHelper";
export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({});
  const inputFields = [
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your Password",
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // caLL THE AXIOS

    const result = await loginUser(loginDetails);
    console.log(result);
  };
  return (
    <MainLayout>
      <Container>
        <Row className="bg-warning  ">
          <Col className="text-center p-2">
            <h1>Welcome to the Library Management System</h1>
            <p>Please login with your details</p>
          </Col>

          <Col className="bg-white">
            <Form onSubmit={handleOnSubmit}>
              {" "}
              {inputFields.map((item, index) => {
                return <CustomInput {...item} onChange={handleOnChange} />;
              })}
              <Button type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
