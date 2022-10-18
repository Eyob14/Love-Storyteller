
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  //   sendEmailVerification,
  //   sendPasswordResetEmail,
  //   updatePassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import firebaseConfig from "./config";

// create a class that initialize the firebase to the app
class Firebase {
  constructor() {
    this.firebase = initializeApp(firebaseConfig);
    // authentication
    this.auth = getAuth();
    // fireStore
    this.firestore = getFirestore();
  }

  // Authentication related function calls
  signUp = async (email, password, data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      // console.log(res);
      const user = res.user;
      // console.log(user);
      await addDoc(collection(this.firestore, "users"), {
        uid: user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        authProvider: "local",
        email,
      });
      return res;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
  signIn = (email, password) => {
    signInWithEmailAndPassword(this.auth, email, password);
  };
  signOut = () => signOut(this.auth);

  addUser = (uid, data) => setDoc(doc(this.firestore, "users", uid), data);

  getUser = (uid) => getDoc(doc(this.firestore, "users", uid));
  getAuthentication = this.auth;
}

export default Firebase;
