import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import { SiApplemusic } from "react-icons/si";

function ArtistProfile() {

    let navigateTo = useNavigate();

    const [user] = useContext(UserContext);

    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)
    

    return (
        <>
        <div id="navbar" className="sticky">
            <NavBar />
        </div>
        <div className="artist-prof">
            <h1 className="gig-text-header">{user.username}</h1>
            <h2 className="gig-text">{user.bio}</h2>
            <div>
            <img className="artist-img" src={user.profile_img}></img>
            </div>
            <div className="artist-songs-container">
                {user.song1 ? 
                <>
                <div className="artist-song-div">
                <SiApplemusic className={toggle1 === true ? "artist-song-logo" : "playing-song"}/>
                <audio onPlay={() => setToggle1(false)} onPause={() => setToggle1(true)} className="audio-player" controls
                src={user.song1} type="audio/wav"></audio>
                </div>
                </> : null}
            {user.song2 ?
            <>
            <div className="artist-song-div">
            <SiApplemusic className={toggle2 === true ? "artist-song-logo" : "playing-song"}/>
            <audio className="audio-player" onPlay={() => setToggle2(false)} onPause={() => setToggle2(true)} controls
                src={user.song2} type="audio/"></audio> 
            </div>
            </> : null}
            {user.song3 ? 
            <>
            <div className="artist-song-div">
            <SiApplemusic className={toggle3 === true ? "artist-song-logo" : "playing-song"}/>
            <audio className="audio-player" onPlay={() => setToggle3(false)} onPause={() => setToggle3(true)} controls 
            src={user.song3} type="audio/wav"></audio> 
            </div>
            </> : null}
            </div>
            <button className="apply-button" onClick={() => navigateTo("/artist/customize")}>edit your profile</button>
        </div>
    
        </>
    )
}

export default ArtistProfile