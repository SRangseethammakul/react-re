import React from "react";
import Title from "../style/title/Title";
import Logo from "./Logo";
import {Button} from "../style/button/Button"
const Header = () => {
  let companyName = "Suttipong";
  const companyAddress = <p>Bangkok, Thailand</p>;
  let num = 10;
  const isLogin = false;
  const showMe = () => {
    alert("From Show Me");
  };
  const showMessage = () => {
    return companyName + ".info";
  };
  const products = [
    { id: 1, name: "act" },
    { id: 2, name: "acts" },
  ];
  return (
    <>
      <Title>Hello Re React</Title>
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
      <br />
      {/* <button onClick={showMe}>Click ME</button> */}
      <Button primary onClick={showMe}>From Button</Button>
      <Button onClick={showMe}>From Button</Button>
      <br />
      <ul>
        {products.map((product, index) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
      <hr />
    </>
  );
};

export default Header;
