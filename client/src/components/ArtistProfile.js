import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";

function ArtistProfile() {

    const [user] = useContext(UserContext);

    return (
        <>
        <NavBar />
        <h1>{user.username}'s Profile</h1>
        <img style={{width: 200}} src={user.profile_img}></img>
        {user.song1 ? <audio className="audio-player" controls
             src={user.song1} type="audio/wav"></audio> : null}
        {user.song2 ? <audio className="audio-player" controls
            src={user.song2} type="audio/"></audio> : null}
        {user.song3 ? <audio className="audio-player" controls 
        src={user.song3} type="audio/wav"></audio> : null}
        </>
    )
}

export default ArtistProfile