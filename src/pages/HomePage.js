import React from "react";
import { Spinner } from "react-bootstrap";
import { BsBarChartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
const HomePage = () => {
  /*
  const { isLoading, error, data, isFetching } = useQuery("getData", () =>
    fetch("https://api.codingthailand.com/api/news").then((res) => res.json())
  );

  */
  const query = useQuery("getData", () => {
    const controller = new AbortController();
    const signal = controller.signal;
    const promise = fetch("https://api.codingthailand.com/api/news", {
      method: "get",
      signal: signal,
    }).then((res) => res.json());

    //cancel request
    promise.cancel = () => controller.abort()
    return promise;
  });
  const { isLoading, error, data, isFetching } = query;
  if (isLoading === true) {
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
      <div>
        <main role="main">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Welcome</h1>
              <p>Develop with React</p>
              <p>
                <Link
                  to="/product"
                  className="btn btn-primary btn-lg"
                  role="button"
                >
                  All Product
                </Link>
              </p>
              <BsBarChartFill color="red" size="2em" />
            </div>
          </div>
          <div className="container">
            {/* Example row of columns */}
            <div className="row">
              <div className="mx-center">{isFetching ? "Updating" : ""}</div>
              {data.data.map((news, index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <h2>{news.topic}</h2>
                    <p>{news.detail}</p>
                    <p>Caterory : {news.name}</p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>{" "}
          {/* /container */}
        </main>
      </div>
    </>
  );
};

export default HomePage;
