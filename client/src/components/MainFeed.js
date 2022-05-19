import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import GigPostsContainer from "./GigPostsContainer";
import NavBar from "./NavBar";

function MainFeed() {
    const [user] = useContext(UserContext);
    const [gigData, setGigData] = useState([]);

    console.log("user from mainfeed", user)

    useEffect(() => {
        fetch(`/gigs`)
        .then( res => res.json())
        .then( data => setGigData(data))
        .catch( error => console.log(error.message));
    }, [])
 

    return (
        <>
        <NavBar />
        {
            user.isAgent === null ? <h1>Agent</h1> : <h1>Artist</h1>
        }
        <h2>Greetings {user.username}</h2>
        <GigPostsContainer gigData={gigData}/>
        </>
    )
}

export default MainFeed