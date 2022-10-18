import React, { useContext, useState, useEffect } from "react";
// import Firebase from "../firebase/index";
import { auth, firestore } from "../firebase/config";

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password, data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = res.user;
      await addDoc(collection(firestore, "users"), {
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

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = async () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
