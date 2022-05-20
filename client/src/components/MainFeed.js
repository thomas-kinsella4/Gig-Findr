import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import GigPostsContainer from "./GigPostsContainer";
import NavBar from "./NavBar";

function MainFeed() {

    let navigateTo = useNavigate();

    const [user] = useContext(UserContext);
    const [gigData, setGigData] = useState([]);

    useEffect(() => {
        fetch(`/gigs`)
        .then( res => res.json())
        .then( data => setGigData(data))
        .catch( error => console.log(error.message));
    }, [])
 

    return (
        <>
        {!user.username ? 
        <>
        <button onClick={() => navigateTo("/login")}>LogIn/SignUp</button>
        <h2>Welcome</h2>
        </>
        :
        <>
        <NavBar />
        <h2>Greetings {user.username}</h2>
        </>
        }
        <GigPostsContainer gigData={gigData}/>
        </>
    )
}

export default MainFeed