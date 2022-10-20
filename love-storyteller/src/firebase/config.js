import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// export default firebaseConfig;
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyAWF4UwxMClquGDO5tGnFjo5waMlj-I7UI",
//   authDomain: "love-storyteller-d94f7.firebaseapp.com",
//   projectId: "love-storyteller-d94f7",
//   storageBucket: "love-storyteller-d94f7.appspot.com",
//   messagingSenderId: "93843661971",
//   appId: "1:93843661971:web:0a3d3d797022340f509966",
//   measurementId: "G-MFNF8MD1HW",
// };
