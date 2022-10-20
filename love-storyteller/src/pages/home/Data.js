import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/config";
import { collection, getDocs, query,where } from "firebase/firestore";
import "./Home.css";
import { useAuth } from "../../context/AuthContext";


const Data = () => {
  const [files, setFiles] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    async function getFiles() {
      const q = query(collection(firestore, "myfiles"), where("user", "==", currentUser.uid.toString()));
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
  }, [currentUser.uid, files]);

  const changeBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  return (
    <div className="data-container">
      <div className="data-header">
        <div className="header-left">
          <p>My Drive</p>
          <ArrowDropDownIcon />
        </div>
      </div>

      <div>
        <div className="data-grid">
          {files.map((file) => (
            <div className="data-file" key={file.id}>
              <InsertDriveFileIcon />
              {/* <img src={file.data.fileURL} alt="" /> */}
              <p>{file.data.filename}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="data-list">
            <p>
              <b>
                Name <ArrowDownwardIcon />
              </b>
            </p>
            {/* <p>
              <b>Owner</b>
            </p> */}
            <p>
              <b>Last Modified</b>
            </p>
            <p>
              <b>File Size</b>
            </p>
          </div>
          {files.map((file) => (
            <div className="data-list" key={file.id}>
              <a href={file.data.fileURL} target="_blank" rel="noreferrer">
                <p>
                  <InsertDriveFileIcon /> {file.data.filename}
                </p>
              </a>
              {/* <p>Owner</p> */}
              <p>
                {new Date(file.data.timestamp?.seconds * 1000).toUTCString()}
              </p>
              <p>{changeBytes(file.data.size)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Data;
