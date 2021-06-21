import React from "react";
// import { UserStoreContext } from "../context/UserContext";
import { useSelector } from "react-redux";
const MemberPage = () => {
  // const userStore = React.useContext(UserStoreContext);
  const profileRedux = useSelector((state) => state.authReducer.profile);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Member</h2>
          <p>Member</p>
          {profileRedux && (
            <p>
              Welcome {profileRedux.name} Email : {profileRedux.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
