import React from "react";
import Logo from "./Logo";

const Header = () => {
  let companyName = "Suttipong";
  const companyAddress = <p>Bangkok, Thailand</p>;
  let num = 10;
  const isLogin = false;
  const showMessage = () => {
    return companyName + ".info";
  };
  return (
    <>
      <h1>Header {companyName}</h1>
      {companyAddress}
      {num + 10}
      <br />
      {showMessage()}
      {isLogin && (
        <>
          <h1>welcome</h1>
          <h1>Welcome 2</h1>
        </>
      )}
      {isLogin ? <Logo /> : "No Content"}
      <hr />
    </>
  );
};

export default Header;
