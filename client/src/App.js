import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import MainFeed from './components/MainFeed';
import { useEffect, useContext } from "react";
import { UserContext } from "./context/user";


function App() {


  const [user, setUser] = useContext(UserContext)

  console.log("user from app: ", user)

  useEffect(() => {
    if (user.isAgent === null) {
    // fetch("/me")
    // .then(res => {
    //   if (res.ok) {
    //     res.json().then(user => setUser(user))
    //   }
    //   else {
    //     console.log("fetch failed")
    //   }
    // })
    console.log("agent fetch")
  } else {
    // fetch("/artist/me")
    // .then( res => {
    //   if (res.ok) {
    //     res.json().then(user => setUser(user))
    //   }
    //   else {
    //     console.log("fetch failed")
    //   }
    // })
    console.log("artist fetch")
  }}, [])


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<MainFeed />} />
      </Routes>
    </Router>
    )
}

export default App;
