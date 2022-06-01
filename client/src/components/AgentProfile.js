import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import AgentProfileGigs from "./AgentProfileGigs";
import AgentCreateGig from "./AgentCreateGig";
import Axios from "axios";
import { Image } from "cloudinary-react";


function AgentProfile({ keepTrack }) {

    const [user, setUser] = useContext(UserContext);
    const [allGigs, setAllGigs] = useState([]);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    function openCreate() {
        setCreateModalOpen(true);
    }

    function closeCreate() {
        setCreateModalOpen(false);
    }

    useEffect(() => {
        fetch(`/gigs`)
        .then( res => res.json())
        .then( data => setAllGigs(data))
        .catch( error => console.log(error.message));
    }, []);

    const filteredGigs = allGigs.filter((gig) => {
        return gig.agent_id === user.id
    })

    const sortedGigs = filteredGigs.sort((gig) => {
        if (gig.gig_applications.length > 0) {
            return -1
        } 
        if (gig.gig_applications < 1) {
            return 1
        }
    })

    const renderedGigs = sortedGigs.map((gig) => {
        return <AgentProfileGigs key={gig.id} gig={gig} keepTrack={keepTrack}/>
    })




    return (
        <>
        <div id="navbar" className="sticky">
            <NavBar />
        </div>
        <div className="view-row">
                <div className="feed-side-column">

                </div>
                <section className="view-middle-column">
                {/* <h1>{user.username}'s' Profile</h1> */}
                <h2 className="gig-text-header">Your listed gigs:</h2>
                <button className="create-button" onClick={openCreate}>Create new gig listing</button>
                {renderedGigs}
                </section>
                <div className="feed-side-column">

                </div>
        {
            createModalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <AgentCreateGig closeCreate={closeCreate}/>
            </div>
            </>
            :
            null
        }
        </div>
        </>
    )
}

export default AgentProfile;