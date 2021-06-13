import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useToasts } from 'react-toast-notifications';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";
const SUPPORT_IMAGE_FORMATS = ["image/jpg", "image/jpeg"];
const UplodePage = () => {
  const history = useHistory();
  const { handleSubmit, errors, register } = useForm();
  const { addToast } = useToasts();
  const onSubmit = async (data) => {
    try {
      let fileUpload = data.picture[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileUpload);
      reader.onload = async (e) => {
        let base64Image = e.target.result;
        const urlAPI = "https://api.codingthailand.com/api/upload";
        const resp = await axios.post(urlAPI, { picture: base64Image });
        addToast(resp.data.data.message, { appearance: 'success',autoDismiss : true, autoDismissTimeout : 3000});
        history.replace('/');
      };
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col>
            <h1>Upload</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Select Image</label>
                <input
                  type="file"
                  name="picture"
                  ref={register({
                    required: "select image",
                    validate: {
                      checkFileType: (value) => {
                        return (
                          value && SUPPORT_IMAGE_FORMATS.includes(value[0].type)
                        );
                      },
                    },
                  })}
                  className={`form-control-file ${
                    errors.picture ? "is-invalid" : ""
                  }`}
                  id="exampleFormControlFile1"
                />
                {errors.picture && errors.picture.type === "required" && (
                  <div className="invalid-feedback">
                    {errors.picture.message}
                  </div>
                )}
                {errors.picture && errors.picture.type === "checkFileType" && (
                  <div className="invalid-feedback">
                    image support only jpg jpeg
                  </div>
                )}
              </div>
              <button className="btn btn-primary mt-3">Upload</button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UplodePage;
