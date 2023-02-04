import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MainLayout } from "../components/MainLayout";
import Container from "react-bootstrap/esm/Container";
import { CustomInput } from "../components/CustomInput";
import { Button, Form } from "react-bootstrap";
import { registerUser } from "../helpers/axiosHelper";

export const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({});
  const inputFields = [
    {
      label: "Email",
      placeholder: "abc@gmail.com",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "First Name",
      placeholder: "John",
      name: "fName",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      placeholder: "Doe",
      name: "lName",
      type: "text",
      required: true,
    },
    {
      label: "Password",
      placeholder: "******",
      name: "password",
      type: "password",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };
  console.log(registerDetails);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(registerDetails);
    console.log(result);
    // call the api
  };
  return (
    <MainLayout>
      <Container>
        <div className="middle d-flex justify-content-center align-item-center">
          <Row className="">
            <Col className="bg-warning ">
              <h1>Welcome to the Library managment system</h1>
              <p>Please use the register form to register </p>
            </Col>
            <Col>
              <Form onSubmit={handleOnSubmit}>
                {inputFields.map((item, index) => {
                  return (
                    <CustomInput
                      key={index}
                      {...item}
                      onChange={handleOnChange}
                    />
                  );
                })}
                <Form.Select onChange={handleOnChange} name="role" required>
                  <option value="">Select</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </Form.Select>
                <Button className="mt-5" type="submit">
                  Register
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </MainLayout>
  );
};
