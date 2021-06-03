import React from "react";
import { logo } from "../style/style";
import useHover from "../hook/UseHover";

const Logo = () => {
  const logoImage = {
    url: "./logo192.png",
  };
  const [hover, attrs] = useHover();
  return (
    <div>
      {/* <img src="./logo192.png" width="100" alt="logo" /> */}
      <img
        onMouseOver={attrs.onMouseOver}
        onMouseOut={attrs.onMouseOut}
        style={logo}
        src={logoImage.url}
        width="100"
        alt="logo"
      />
      {hover && <h3>Main Manu</h3>}
    </div>
  );
};

export default Logo;
