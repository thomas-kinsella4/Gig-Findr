import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import AgentEditGig from "./AgentEditGig";
import AgentViewApps from "./AgentViewApps";
import { AiFillBell, AiFillAlert } from "react-icons/ai";


function AgentProfileGigs({ gig, keepTrack }) {
    
    const [user] = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [selectedEdit, setSelectedEdit] = useState(NaN);
    const [bookedArtist, setBookedArtist] = useState("");
    
    
    const approvedGigs = gig.gig_applications.find((gig) => {
        return gig.isApproved === true
    })
    
    useEffect(() => {
        if (approvedGigs) {
            fetch(`/artist/${approvedGigs.artist_id}`)
        .then( res => res.json())
        .then( data => setBookedArtist(data))
        .catch( error => console.log(error.message))
        } 
    }, [approvedGigs])

    function openUpModal() {
        setIsModalOpen(true)
        setSelectedEdit(gig)
    }

    function closeUpModal() {
        setIsModalOpen(false)
    }

    function openViewModal() {
        setViewModalOpen(true)
    }

    function closeViewModal() {
        setViewModalOpen(false)
    }

    return (
        <>
        {
            isModalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <AgentEditGig closeUpModal={closeUpModal} selectedEdit={selectedEdit}/>
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
        <div id="agent-prof-post">
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && approvedGigs ? <h1 className="notification-flag" style={{"color": "green"}}><AiFillBell /></h1> : null}
            {bookedArtist ? <h2 className="gig-text-venue" style={{"color": "green"}} onClick={() => console.log(bookedArtist)}>{bookedArtist.username} booked for this gig</h2> : null}
            {gig.gig_applications.length > 0 && !approvedGigs ? <h1 className="notification-flag" onClick={() => openViewModal()}><AiFillAlert /></h1> : null}
            <h2 className="gig-text-venue">Gig at {gig.venue}</h2>
            <h3 className="gig-text">date: {gig.date}</h3>
            <h3 className="gig-text">time: {gig.time}{gig.timetwo}</h3>
            <h3 className="gig-text">genres: {gig.genres}</h3>
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && approvedGigs ? null : <button onClick={openUpModal} className="apply-button">Edit</button>}
            {/* {gig.gig_applications.length > 0 && !approvedGigs ? <button onClick={openUpModal}>Edit</button> : null} */}
        </div>  
        </>
    )
}

export default AgentProfileGigs;