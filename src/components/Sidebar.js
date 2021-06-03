import React from "react";

const Sidebar = () => {
  /*
    Normal
      let fullName = "Act";
      */

  /*
  use useState
  */
  const [fullName, setFullName] = React.useState("act");
  const [isShow, setIsShow] = React.useState(true);
  const changeName = () => {
    // fullName = "Suttipong";
    setFullName("Suttipong");
    setIsShow(!isShow);
  };
  React.useEffect(() => {
    console.log("Run From useEffect");
  });

  React.useEffect(() => {
    console.log("Run from useEffect First Time");
  },[]);

  React.useEffect(() => {
    console.log("Run from useEffect with Condition => " + fullName)
  }, [fullName]);

  return (
    <>
      <h1>Side Bar</h1>
      {isShow ? <p>Hello</p> : <p>World</p>}
      <p>Hello {fullName}</p>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default Sidebar;
