import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import UserPage from './components/UserPage';
import { useEffect, useContext } from "react";
import { UserContext } from "./context/user";


function App() {


  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    fetch("/me")
    .then(res => {
      if (res.ok) {
        res.json().then(user => setUser(user))
      }
      else {
        console.log("fetch failed")
      }
    })
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/usertest" element={<UserPage />} />
      </Routes>
    </Router>
    )
}

export default App;
