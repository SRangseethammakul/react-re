import React from "react";
const Footer = (props) => {
  return (
    <>
      <footer className="container">
        <p>© Act 2017-{new Date().getFullYear()}</p>
      </footer>
    </>
  );
};
export default Footer;
