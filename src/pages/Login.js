import React from "react";
import { MainLayout } from "../component/customLayout/MainLayout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CustomInput } from "../component/inputFields/CustomInput";
const Login = () => {
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
  return (
    <MainLayout>
      <Container>
        <Row className="p-5">
          <Col>
            <div className="login-info">
              <h1>Welcome back to the system</h1>
              <p>Please login to the system using your credentials</p>
            </div>
          </Col>
          <Col>
            <Form>
              {input.map((item, i) => (
                <CustomInput key={i} {...item} />
              ))}
              <Button type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
