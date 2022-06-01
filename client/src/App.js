import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LogInForm from './components/LogInForm';
import MainFeed from './components/MainFeed';
import AgentProfile from './components/AgentProfile';
import ArtistProfile from './components/ArtistProfile';
import Loading from './components/Loading';
import AgentViewArtistProfile from './components/AgentViewArtistProfile';
import { useEffect, useContext, useState } from "react";
import { UserContext } from "./context/user";
import ArtistsShowsContainer from './components/ArtistsShowsContainer';
import ArtistCustomizeForm from './components/ArtistCustomizeForm';



function App() {


  const [user, setUser] = useContext(UserContext)
  const [selectedArtist, setSelectedArtist] = useState([]);
    
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

    function keepTrack(artist) {
      setSelectedArtist(artist)
    }

    console.log("user from app:", user)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFeed keepTrack={keepTrack}/>} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/agent/profile" element={<AgentProfile keepTrack={keepTrack}/>} />
        <Route path="/artist/profile" element={<ArtistProfile />} />
        <Route path="/artist/shows" element={<ArtistsShowsContainer />} />
        <Route path="/view/artist" element={<AgentViewArtistProfile selectedArtist={selectedArtist}/>} />
        <Route path="/artist/customize" element={<ArtistCustomizeForm />} />
        <Route path="/updating" element={<Loading message={"Updating your changes..."} destination={"/agent/profile"}/>} />
        <Route path="/creating" element={<Loading message={"Creating..."} destination={"/agent/profile"}/>} />
        <Route path="/booking" element={<Loading message={"Confiming booking..."} destination={"/agent/profile"}/>} />
        <Route path="/loggingout" element={<Loading message={"Logging out..."} destination={"/"}/>} />
        <Route path="/loggingin" element={<Loading message={"Logging in..."} destination={"/"}/>} />
        <Route path="/applying" element={<Loading message={"Applying..."} destination={"/artist/shows"}/>} />
        <Route path="/signingup" element={<Loading message={"Creating your account..."} destination={"/login"}/>} />
        <Route path="/artist/signingup" element={<Loading message={"Creating your account..."} destination={"/artist/customize"}/>} />
        <Route path="/creating/prof" element={<Loading message={"Creating Your Profile..."} destination={"/artist/profile"}/>} />
      </Routes>
    </Router>
    )
}
        

export default App;
