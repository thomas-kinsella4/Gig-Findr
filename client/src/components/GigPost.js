import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import AgentEditFromMain from "./AgentEditFromMain";
import AgentViewApps from "./AgentViewApps";

function GigPost({ gig, openModal, keepTrack  }) {

    const [user] = useContext(UserContext);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    
    const approvedGigs = gig.gig_applications.find((gig) => {
        return gig.isApproved === true
    })

    console.log("from gigpost: ", gig.artist_id)

    function openEditModal(){
        setEditModalOpen(true)
    }

    function closeEditModal() {
        setEditModalOpen(false)
    }

    function openViewModal() {
        setViewModalOpen(true)
    }

    function closeViewModal() {
        setViewModalOpen(false)
    }

    return (
        <>
        <div id="post">
            {gig.gig_applications.length > 0 && approvedGigs ? <h1 style={{color: "green"}}>THIS SHOW HAS BEEN BOOKED!</h1> : null}
            {/* {approvedGigs.artist_id === user.id && user.isAgent === undefined && gig.gig_applications.length > 0 && approvedGigs ? <h1 style={{color: "green"}}>You have been BOOKED! for this show</h1> : null} */}
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && approvedGigs ? <h1 style={{color: "green"}}>BOOKED!</h1> : null}
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && !approvedGigs ? <h1 style={{color: "red"}} onClick={() => openViewModal()}>ATTentioN</h1> : null}
            <h2>Gig at {gig.venue}</h2>
            <h3>Date: {gig.date}</h3>
            <h3>Time: {gig.time}{gig.timetwo}</h3>
            <h3>Genres: {gig.genres}</h3>
            {gig.agent_id === user.id && user.isAgent === null && !approvedGigs ? <button onClick={() => openEditModal(gig)}>Edit your post</button> : <button onClick={() => openModal(gig)}>View Details</button>}
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
        {
            viewModalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <AgentViewApps gig={gig} closeViewModal={closeViewModal} keepTrack={keepTrack}/>
            </div>
            </>
            :
            null
        }
        </>
    )
}

export default GigPost