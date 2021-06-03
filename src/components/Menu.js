import React from "react";
import useHover from "../hook/UseHover";
const Menu = () => {
  const [hover, attrs] = useHover();
  return (
    <div>
      <h1>From Menu</h1>
      {hover && <h3>Main Manu</h3>}
      <img
        {...attrs}
        src="./logo192.png"
        alt="logo"
      />
    </div>
  );
};

export default Menu;
