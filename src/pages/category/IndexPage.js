import React from "react";
import axios from "axios";
import { Spinner, Table, Button } from "react-bootstrap";
import { BsTools, BsTrash } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const IndexPage = () => {
  const [category, setCategory] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);
  const history = useHistory();

  const getData = async (page) => {
    try {
      setLoading(true);
      const urlPath = `https://api.codingthailand.com/api/category`;
      const resp = await axios.get(urlPath, {
        cancelToken: cancelToken.current.token,
      });
      setCategory(resp.data);
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
  }, []); //active when page change

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
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <h1>Category</h1>
            <Button
              className="mt-3 mb-3"
              variant="success"
              onClick={() => history.push("/category/create")}
            >
              Insert Data
            </Button>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Category Name</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                {category.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>
                        <Button className="ml-2" variant="warning" size="sm" onClick={() => history.push('/category/edit/'+item.id)}>
                          <BsTools></BsTools>
                        </Button>
                        <Button className="ml-2" variant="danger" size="sm" onClick={async () => {
                            const isConfirm = window.confirm("sure delete data" + item.name + '?')
                            if(isConfirm){
                                const resp = await axios.delete('https://api.codingthailand.com/api/category/'+item.id);
                                alert(resp.data.message);
                                history.go(0);
                            }
                        }}>
                          <BsTrash></BsTrash>
                        </Button>
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

export default IndexPage;
