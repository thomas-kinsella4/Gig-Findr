import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import AgentEditFromMain from "./AgentEditFromMain";
import AgentViewApps from "./AgentViewApps";
import { AiFillAlert } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

function GigPost({ gig, openModal, keepTrack  }) {

    const [user] = useContext(UserContext);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    
    const approvedGigs = gig.gig_applications.find((gig) => {
        return gig.isApproved === true
    })

    console.log("approved gigs: ", approvedGigs)

    // console.log("from gigpost: ", gig.artist_id)

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
            {/* {gig.gig_applications.length > 0 && approvedGigs && user.socialmedia_links === null ? <h1 style={{color: "green"}} onClick={() => openModal(gig)} className="notification-flag"><AiFillBell /></h1> : null} */}
            {/* {approvedGigs.artist_id === user.id && user.isAgent === undefined && gig.gig_applications.length > 0 && approvedGigs ? <h1 style={{color: "green"}}>You have been BOOKED! for this show</h1> : null} */}
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && approvedGigs ? <h1 style={{color: "green"}} className="notification-flag" onClick={() => openModal(gig)}><AiOutlineCheck /></h1> : null}
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && !approvedGigs ? <h1 className="notification-flag" onClick={() => openViewModal()}><AiFillAlert onClick={() => openViewModal()}/></h1> : null}
            <h2 className="gig-text-venue">Gig at {gig.venue}</h2>
            <h3 className="gig-text">Date: {gig.date}</h3>
            <h3 className="gig-text">Genres: {gig.genres}</h3>
            {gig.agent_id === user.id && user.isAgent === null && !approvedGigs ? <button className ="gigpost-btn" onClick={() => openEditModal(gig)}>Edit your post</button> : <button className ="gigpost-btn" onClick={() => openModal(gig)}>View Details</button>}
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