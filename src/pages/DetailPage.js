import React from "react";
import { Spinner, Card, CardDeck, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
const DetailPage = () => {
  const { id, title } = useParams();
  const history = useHistory();
  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);
  const getData = async (id) => {
    try {
      setLoading(true);
      const urlPath = "https://api.codingthailand.com/api/course/" + id;
      const resp = await axios.get(urlPath, {
        cancelToken: cancelToken.current.token,
      });
      setDetail(resp.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData(id);
    return () => {
      cancelToken.current.cancel();
    };
  }, [id]); //active when id change

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
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <Button
            variant="secondary"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </Button>{" "}
          <h2>
            {title} - {id}
          </h2>
          {detail.length > 0 ? (
            <CardDeck>
              {detail.map((item, index) => {
                return (
                  <div className="col-md-4" key={item.ch_id}>
                    <Card className="mb-4 shadow-sm">
                      <Card.Body>
                        <Card.Title>{item.ch_title}</Card.Title>
                        <Card.Text>
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{item.ch_dateadd}</small>
                      </Card.Footer>
                    </Card>
                  </div>
                );
              })}
            </CardDeck>
          ) : (
            <div className="mx-auto">No Data</div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default DetailPage;
