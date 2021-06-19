import React from "react";
import { UserStoreContext } from "../context/UserContext";
const MemberPage = () => {
  const userStore = React.useContext(UserStoreContext);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>Member</h2>
          <p>Member</p>
          {
            userStore.profile && (
              <p>Welcome {userStore.profile.name} Email : {userStore.profile.email}</p>
            ) 
          }
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
