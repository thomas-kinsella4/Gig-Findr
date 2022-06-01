import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import { SiApplemusic } from "react-icons/si";

function AgentViewArtistProfile({ selectedArtist }) {

    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)

    return (
        <>
        <div id="navbar" className="sticky">
            <NavBar />
        </div>
        <div className="artist-prof">
            <h1 className="gig-text-header">{selectedArtist.username}</h1>
            <h2 className="gig-text"><span className="agent-view-label">BIO:</span> {selectedArtist.bio}</h2>
            <div>
            <img className="artist-img" src={selectedArtist.profile_img}></img>
            </div>
            <h2 className="gig-text"><span className="agent-view-label">{selectedArtist.username}'s MUSIC</span></h2>
            <div className="artist-songs-container">
                {selectedArtist.song1 ? 
                <>
            <div className="artist-song-div">
                <SiApplemusic className={toggle1 === true ? "artist-song-logo" : "playing-song"}/>
                <audio onPlay={() => setToggle1(false)} onPause={() => setToggle1(true)} className="audio-player" controls
                src={selectedArtist.song1} type="audio/wav"></audio>
            </div>
                </> : null}
            {selectedArtist.song2 ?
            <>
            <div className="artist-song-div">
            <SiApplemusic className={toggle2 === true ? "artist-song-logo" : "playing-song"}/>
            <audio className="audio-player" onPlay={() => setToggle2(false)} onPause={() => setToggle2(true)} controls
                src={selectedArtist.song2} type="audio/"></audio> 
            </div>
                </> : null}
            {selectedArtist.song3 ? 
            <>
            <div className="artist-song-div">
            <SiApplemusic className={toggle3 === true ? "artist-song-logo" : "playing-song"}/>
            <audio className="audio-player" onPlay={() => setToggle3(false)} onPause={() => setToggle3(true)} controls 
            src={selectedArtist.song3} type="audio/wav"></audio> 
            </div>
            </> : null}
            </div>
        </div>
        </>
    )
}

export default AgentViewArtistProfile;