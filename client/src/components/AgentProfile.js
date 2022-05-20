import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import AgentProfileGigs from "./AgentProfileGigs";
import AgentCreateGig from "./AgentCreateGig";


function AgentProfile() {

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

    const renderedGigs = filteredGigs.map((gig) => {
        return <AgentProfileGigs key={gig.id} gig={gig}/>
    })

    console.log("filtered: ", filteredGigs)


    return (
        <>
        <NavBar />
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
        <h1>{user.username}'s' Profile</h1>
        <button onClick={openCreate}>Create new listing</button>
        <h2>Your listed gigs:</h2>
        {renderedGigs}
        </>
    )
}

export default AgentProfile;