import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { BsPersonPlus } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
const schema = yup.object().shape({
  name: yup.string().required("name not empty"),
  email: yup.string().required("email not empty").email("invalid format"),
  password: yup
    .string()
    .required("password not empty")
    .min(8, "pass word more 8 char"),
});

const RegisterPage = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      const pathURL = "https://api.codingthailand.com/api/register";
      const resp = await axios.post(pathURL, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      addToast(resp.data.message, {
        appearance: "success",
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
      history.replace("/login");
    } catch (error) {
      addToast(error.response.data.errors.email[0], {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 3000,
      });
    }
  };
  return (
    <>
      <Container className="mt-4">
        <h1>Register Data</h1>
        <Row>
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  ref={register}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && (
                  <Form.Control.Feedback type="invalid">
                    {errors.name.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  ref={register}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.email.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  ref={register}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                {errors.password && (
                  <Form.Control.Feedback type="invalid">
                    {errors.password.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Button variant="primary" type="submit">
                <BsPersonPlus className="mr-2" />
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
