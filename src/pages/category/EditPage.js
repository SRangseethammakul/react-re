import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { BsUpload } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const schema = yup.object().shape({
  name: yup.string().required("insert Data"),
});

const EditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*
  const getData = async (id) => {
      const urlPath = "https://api.codingthailand.com/api/category/" + id;
      const resp = await axios.get(urlPath);
      setValue('name', resp.data.name)
  };
  React.useEffect(() => {
    getData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); //active when id change
  */

  // suggestion recommend
  const getData = React.useCallback(async () => {
    const urlPath = "https://api.codingthailand.com/api/category/" + id;
    const resp = await axios.get(urlPath);
    setValue("name", resp.data.name);
  }, [id, setValue]);

  React.useEffect(() => {
    getData();
  }, [getData]); //active when id change

  const onSubmit = async (data) => {
    const pathURL = "https://api.codingthailand.com/api/category";
    const resp = await axios.put(pathURL, {
      name: data.name,
      id:id
    });
    alert(resp.data.message);
    history.replace("/category");
  };
  return (
    <>
      <Container className="mt-4">
        <h1>Update Data</h1>
        <Row>
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
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

              <Button variant="primary" type="submit">
                <BsUpload className="mr-2" />
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPage;
