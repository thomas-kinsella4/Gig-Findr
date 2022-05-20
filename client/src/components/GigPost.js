import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import AgentEditFromMain from "./AgentEditFromMain";

function GigPost({ gig, openModal }) {

    const [user] = useContext(UserContext);
    const [editModalOpen, setEditModalOpen] = useState(false);

    function openEditModal(){
        setEditModalOpen(true)
    }

    function closeEditModal() {
        setEditModalOpen(false)
    }
    
    return (
        <>
        <div id="post">
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 ? <h1 style={{color: "red"}}>ATTentioN</h1> : null}
            <h2>Gig at {gig.venue}</h2>
            <h3>{gig.date}</h3>
            <h3>{gig.time}pm</h3>
            <h3>{gig.genres}</h3>
            <h3>{gig.description}</h3>
            {/* {gig.gig_application ? <h1>HELLO</h1> : null} */}
            {gig.agent_id === user.id && user.isAgent === null ? <button onClick={() => openEditModal(gig)}>Edit your post</button> : <button onClick={() => openModal(gig)}>View Details</button>}
        </div>  
        {
            editModalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <AgentEditFromMain gig={gig} closeEditModal={closeEditModal}/>
            </div>
            </>
            :
            null
        }
        </>
    )
}

export default GigPost