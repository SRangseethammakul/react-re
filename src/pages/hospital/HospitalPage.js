import React from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { Spinner, Table } from "react-bootstrap";
const pageSize = 15;
const HospitalPage = () => {
  const [hospitals, setHospital] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);

  //pagination
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const getData = async (page) => {
    try {
      setLoading(true);
      const urlPath = `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`;
      const resp = await axios.get(urlPath, {
        cancelToken: cancelToken.current.token,
      });
      setHospital(resp.data.data);
      setTotal(resp.data.meta.pagination.total);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData(page);
    return () => {
      cancelToken.current.cancel();
    };
  }, [page]); //active when page change

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
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  }
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <h1>Hospital</h1>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Hospital Code</th>
                  <th>Hospital Name</th>
                </tr>
              </thead>
              <tbody>
                {hospitals.map((hospital, index) => {
                  return (
                    <tr key={hospital.id}>
                      <td>{hospital.id}</td>
                      <td>{hospital.code}</td>
                      <td>{hospital.h_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <br />
            <Pagination
              activePage={page}
              itemsCountPerPage={pageSize}
              totalItemsCount={total}
              pageRangeDisplayed={10}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              nextPageText="Next Page"
              prevPageText="Prev Page"
              firstPageText	= "First Page"
              lastPageText = "Last Page"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalPage;
