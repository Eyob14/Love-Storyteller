import "./Home.css";
import styled from "styled-components";
import { useState } from "react";
import { Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { firestore, storage } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";



const ModalPopup = styled.div`
  top: 50%;
  background-color: #fff;
  width: 500px;
  margin: 0px auto;
  position: relative;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 10px;
`;

const ModalHeading = styled.div`
  text-align: center;
  border-bottom: 1px solid lightgray;
  height: 40px;
`;

const ModalBody = styled.div`
  input.modal__submit {
    width: 100%;
    background: darkmagenta;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  input.modal__file {
    background: whitesmoke;
    padding: 20px;
    color: #000;
    display: block;
    margin-top: 20px;
  }
`;

const UploadingPara = styled.p`
  background: green;
  color: #fff;
  margin: 20px;
  text-align: center;
  padding: 10px;
  letter-spacing: 1px;
`;
const Sidebar = () => {
  const { currentUser } = useAuth();

  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    const fileCollectionRef = collection(firestore, "myfiles");
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

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
        await addDoc(fileCollectionRef, {
          user: currentUser.uid,
          timestamp: serverTimestamp(),
          filename: file.name,
          fileURL: url,
          size: uploadTask.snapshot.bytesTransferred,
        });
      }
    );
    setUploading(false);
    setFile(null);
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalPopup>
          <form>
            <ModalHeading>
              <h3>Select file you want to upload</h3>
            </ModalHeading>
            <ModalBody>
              {uploading ? (
                <UploadingPara>Uploading...</UploadingPara>
              ) : (
                <>
                  <input
                    type="file"
                    className="modal__file"
                    onChange={handleFile}
                  />
                  <input
                    type="submit"
                    className="modal__submit"
                    onClick={handleUpload}
                  />
                </>
              )}
            </ModalBody>
          </form>
        </ModalPopup>
      </Modal>
      <div className="sidebar-container">
        <div className="sidebar-btn">
          <button onClick={() => setOpen(true)}>
            <AddIcon />
            <span>New</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
