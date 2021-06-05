import React from "react";
import axios from "axios";

const AboutPage = () => {
  const [version, setVersion] = React.useState("");
  const getData = async () => {
    const resp = await axios.get("https://api.codingthailand.com/api/version");
    setVersion(resp.data.data.version);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>About</h2>
          {
              version && (
                  <p>
                      Backend Check Version : {version}
                  </p>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
