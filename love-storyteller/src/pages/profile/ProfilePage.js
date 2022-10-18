import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

function ProfilePage() {
  const { currentUser, logout } = useAuth();
  console.log(currentUser.email);
  return (
    <div style={{ maxWidth: "550px", margin: "auto auto" }}>
      <div>
        <img
          style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          src="/images/about.jpg"
          alt="About"
        />
      </div>
      <div
        style={{
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h4>{currentUser ? currentUser.email : "loading"}</h4>
            {/* <h5>{state ? state.email : "loading"}</h5> */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>posts</h6>
              <h6>followers</h6>
              <h6>following</h6>
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
