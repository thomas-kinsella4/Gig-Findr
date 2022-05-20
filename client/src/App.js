import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import MainFeed from './components/MainFeed';
import AgentProfile from './components/AgentProfile';
import ArtistProfile from './components/ArtistProfile';
import { useEffect, useContext } from "react";
import { UserContext } from "./context/user";


function App() {


  const [user, setUser] = useContext(UserContext)

  console.log("user from app: ", user)
    
    useEffect(() => {
      fetch("/artist/me")
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user))
        } else {
          console.log("fetch failed")
        }
      })
    }, [])

    useEffect(() => {
      fetch("/me")
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user))
        } else {
          console.log("fetch failed")
        }
      })
    }, [])



  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFeed />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/agent/profile" element={<AgentProfile />} />
        <Route path="/artist/profile" element={<ArtistProfile />} />
      </Routes>
    </Router>
    )
}
        

export default App;
