import React from "react";
/*
    - backup
    - without custom hook
*/
const Menu2 = () => {
  const [hover, setHover] = React.useState(false);
  const mouseOver = () => {
    setHover(true);
  };
  return (
    <div>
      <h1>From Menu</h1>
      {hover && <h3>Main Manu</h3>}
      <img
        onMouseOver={mouseOver}
        onMouseOut={() => setHover(false)}
        src="./logo192.png"
        alt="logo"
      />
    </div>
  );
};

export default Menu2;
