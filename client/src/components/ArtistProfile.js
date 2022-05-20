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
        </>
    )
}

export default ArtistProfile