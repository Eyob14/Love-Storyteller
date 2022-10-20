import React, { useState, useEffect } from "react";
import "./Home.css";

import { firestore } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

function Gallery() {
  const [images, setFiles] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    async function getFiles() {
      const q = query(
        collection(firestore, "myfiles"),
        where("user", "==", currentUser.uid.toString())
      );
      const files = await getDocs(q);
      setFiles(
        files.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      return files;
    }
    getFiles();
  }, [currentUser.uid, images.length]);

  return (
    <div className="container">
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
        Your Gallery
      </h1>
      <hr className="mt-2 mb-5" />
      <div className="row text-center text-lg-start">
        {images &&
          images.map((image) => (
            <div className="col-lg-3 col-md-4 col-6" key={image.id}>
              <img
                className="img-fluid img-thumbnail"
                src={image.data.fileURL}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Gallery;
