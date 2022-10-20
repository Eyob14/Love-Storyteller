import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import * as routes from "../../constants/routes";

import "./Profile.css";

function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  console.log(user);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(firestore, "users"));
      const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      for (const user of users) {
        if (user.uid === currentUser.uid) {
          setUser(user);
        }
      }
    };
    getUsers();
  }, [currentUser.uid]);
  console.log(user)
  return (
    <div className="auth-wrapper">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img
                  src={user.fileURL}
                  width="100"
                  className="rounded-circle"
                  alt="profile"
                />
              </div>
              <div className="text-center mt-3">
                <h5 className="mt-2 mb-1">
                  {user.firstName} {user.lastName}
                </h5>
                <div className="px-4 mt-1">
                  <p className="fonts">{user.email}</p>
                </div>
                <div className="px-4 mt-1">
                  <p className="fonts">
                  {user.about}
                  </p>
                </div>
                <div className="buttons">
                  <button
                    className="btn btn-outline-primary px-4"
                    onClick={logout}
                  >
                    Logout
                  </button>
                  <button
                    className="btn btn-primary px-4 ms-3"
                    onClick={() =>
                      navigate(routes.EDITPROFILE, { replace: true })
                    }
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
