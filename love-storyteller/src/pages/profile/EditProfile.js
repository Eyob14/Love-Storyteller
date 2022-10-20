import React, { useState, useEffect } from "react";
import "./Profile.css";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";

import { useAuth } from "../../context/AuthContext";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { firestore, storage } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import * as routes from "../../constants/routes";
import { profileSchema } from "../../schema/schema_index";
import { useFormik } from "formik";

function EditProfile() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState({});
  const [image, setImage] = useState({ preview: "", raw: "" });
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };

  const { values, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        about: "",
      },
      validationSchema: profileSchema,
      onSubmit: async (values, actions) => {
        try {
          const storageRef = ref(storage, `files/${image.raw.name}`);
          const uploadTask = uploadBytesResumable(storageRef, image.raw);
          console.log("image raw", image.preview);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (error) => {
              alert("failed to upload");
            },
            async () => {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              await updateDoc(doc(firestore, "users", user.id), {
                firstName:
                  values.firstName.length !== 0
                    ? values.firstName
                    : user.firstName,
                lastName:
                  values.lastName.length !== 0
                    ? values.lastName
                    : user.lastName,
                about: values.about.length !== 0 ? values.about : user.about,
                fileURL: image.raw !== null ? url : user.fileURL,
              });
              navigate(routes.PROFILE, { replace: true });
            }
          );
        } catch (error) {
          console.log(error.message);
        }
        actions.resetForm();
      },
    });

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

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="container mt-3">
          <div className="card p-3 text-center">
            <div className="d-flex flex-row justify-content-center mb-3">
              <div className="image">
                <div>
                  <label htmlFor="upload-button">
                    {image.preview ? (
                      <>
                        <img
                          src={image.preview}
                          alt="dummy"
                          width="100"
                          className="rounded-circle"
                        />
                        <span className="fa-stack fa-2x mt-3 mb-2">
                          <AddAPhotoOutlinedIcon />
                        </span>
                      </>
                    ) : (
                      <>
                        <img
                          src="./images/avatar.png"
                          alt="dummy"
                          width="100"
                          className="rounded-circle"
                        />
                        <span className="fa-stack fa-2x mt-3 mb-2">
                          <AddAPhotoOutlinedIcon />
                        </span>
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
            <h4>Edit Profile</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="inputs">
                  <label htmlFor="firstName">First Name</label>{" "}
                  <input
                    id="firstName"
                    className="form-control"
                    type="text"
                    placeholder={user.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="inputs">
                  <label htmlFor="lastName">Last Name</label>{" "}
                  <input
                    id="lastName"
                    className="form-control"
                    type="text"
                    placeholder={user.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                  />{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="about-inputs">
                  <label htmlFor="about">About</label>
                  <textarea
                    id="about"
                    className="form-control"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.about}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-3 gap-2 d-flex justify-content-end">
              <button
                className="px-3 btn btn-sm btn-outline-primary"
                onClick={() => navigate(routes.PROFILE)}
              >
                Cancel
              </button>
              <button
                className="px-3 btn btn-sm btn-primary"
                disabled={isSubmitting}
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
