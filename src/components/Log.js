import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { auth } from "./firebase-config";
import App from "../App";

const Log = () => {
  const state = {
    registerEmail: '',
    registerPassword: '',
    loginEmail: '',
    loginPassword: ''
  }
  

  const [user, setUser] = useState({});

  const setRegEmail = async(event) => {
    state.registerEmail = event.target.value;
    console.log(state.loginEmail)
  }

  const setRegPass = async(event) => {
    state.registerPassword = event.target.value;
    console.log(state.loginEmail)
  }

  const setLogMail = async(event) => {
    state.loginEmail = event.target.value;
    console.log(state.loginEmail)
  }

  const setLogPass = async(event) => {
    state.loginPassword = event.target.value;
    console.log(state.loginEmail)
  }

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        state.registerEmail,
        state.registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        state.loginEmail,
        state.loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (

    <div className="App">

      <div>
        <h3> Register User </h3>
        <div>
          <div>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setRegEmail(event)
              }}
            /></div>
          <br></br>
          <div>
            <input
              type="password"
              placeholder="Password..."
              onChange={(event) => {
                setRegPass(event)
              }}
            /></div>
        </div>
        <br /><br />
        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <div>
          <div>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setLogMail(event)
              }}
            /></div>
          <br />
          <div>
            <input
              type="password"
              placeholder="Password..."
              onChange={(event) => {
                setLogPass(event)
              }}
            /></div>
        </div>
        <br /><br />
        <button onClick={login}> Login</button>

      </div>

      <h4> User Logged In: </h4>
      <p>{user?.email}</p>
      <br /><br></br>
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default Log;