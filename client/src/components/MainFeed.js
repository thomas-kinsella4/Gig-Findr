import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import GigPostsContainer from "./GigPostsContainer";
import NavBar from "./NavBar";

function MainFeed({ keepTrack }) {

    const scrollToRef = useRef();
    let navigateTo = useNavigate();

    const [user] = useContext(UserContext);
    const [gigData, setGigData] = useState([]);

    useEffect(() => {
        fetch(`/gigs`)
        .then( res => res.json())
        .then( data => setGigData(data))
        .catch( error => console.log(error.message));
    }, [])
 
    //  useEffect(() => {
    //     const header = document.getElementById("navbar")
    //     const logoSection = document.getElementById("logo-div")
    //     const navBtn = document.querySelector(".nav-btn")
    
    //     const logoSectionOptions = {};
    
    //     const logoObserver = new IntersectionObserver
    //     (function(entries, logoObserver) {
    //         entries.forEach((entry) => {
    //             if(!entry.isIntersecting) {
    //                 header.classList.add("scrolled-navbar-div");
    //                 // navBtn.classList.add("scrolled-nav-btn");
    //             } else {
    //                 header.classList.remove("scrolled-navbar-div");
    //                 // navBtn.classList.remove("scrolled-nav-btn");
    //             }
    //         });
    //     }, logoSectionOptions);
    
    //     logoObserver.observe(logoSection)
    //     }, [user])





    return (
        <>
        <div id="navbar" className="sticky">
            {!user.username ? 
            <>
            {/* <div id="navbar" className="sticky"> */}
            <div className="no-user-navbar-div">
            <button className="nav-btn" onClick={() => navigateTo("/login")}>LOGIN/SIGNUP</button>
            </div>
            </>
            :
            <>
            <NavBar />
            </>
            }
        </div>
        <div id="logo-div">
        <h1 id="logo" onClick={() => scrollToRef.current.scrollIntoView({"behavior": "smooth"})}>GIG FINDR.</h1>
        </div>
        <div id="hidden-scroll-div" ref={scrollToRef}></div>
        <GigPostsContainer gigData={gigData} keepTrack={keepTrack}/>
        </>
    )
}

export default MainFeed