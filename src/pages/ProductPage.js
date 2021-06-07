import React from "react";
import { Table, Image, Badge, Spinner } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductPage = () => {
  const [products, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);
  const getData = async () => {
    try {
      setLoading(true);
      const urlPath = "https://api.codingthailand.com/api/course";
      const resp = await axios.get(urlPath, {
        cancelToken: cancelToken.current.token,
      });
      //   console.log(resp.data.data);
      setProduct(resp.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData();
    return () => {
      cancelToken.current.cancel();
    };
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-5">
        <p>Try Again</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <h2>Product</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Course Name</th>
                  <th>Course Description</th>
                  <th>Course Date</th>
                  <th>Course views</th>
                  <th>Course image</th>
                  <th>Tool</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.detail}</td>
                      <td>
                        {format(new Date(product.date), "dd/MMM/yyyy", {
                          locale: th,
                        })}
                      </td>
                      <td>
                        <Badge variant="info">{product.view}</Badge>
                      </td>
                      <td>
                        <Image
                          src={product.picture}
                          thumbnail
                          alt={product.title}
                          width={100}
                        />
                      </td>
                      <td>
                        <Link to={`/detail/${product.id}/title/${product.title}`}>
                          <BsFillInfoCircleFill />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
