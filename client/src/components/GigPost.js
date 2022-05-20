import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";

function GigPost({ gig, openModal }) {

    const [user] = useContext(UserContext);
    
    return (
        <>
        <div id="post">
            <h2>Gig at {gig.venue}</h2>
            <h3>{gig.date}</h3>
            <h3>{gig.time}pm</h3>
            <h3>{gig.genres}</h3>
            {gig.agent_id === user.id && user.isAgent === null ? <button onClick={() => openModal()}>Edit your post</button> : <button onClick={() => openModal(gig)}>View Details</button>}
        </div>  
        </>
    )
}

export default GigPost