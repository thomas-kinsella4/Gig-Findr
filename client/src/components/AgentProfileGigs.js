import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/user";
import AgentEditGig from "./AgentEditGig";
import AgentViewApps from "./AgentViewApps";

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
        <div id="post">
            {bookedArtist ? <h2>{bookedArtist.username} booked for this gig</h2> : null}
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && approvedGigs ? <h1 style={{color: "green"}}>BOOKED!</h1> : null}
            {gig.gig_applications.length > 0 && !approvedGigs ? <h1 style={{color: "red"}} onClick={() => openViewModal()}>ATTentioN</h1> : null}
            <h2>Gig at {gig.venue}</h2>
            <h3>{gig.date}</h3>
            <h3>{gig.time}pm</h3>
            <h3>{gig.genres}</h3>
            {gig.agent_id === user.id && user.isAgent === null && gig.gig_applications.length > 0 && approvedGigs ? null : <button onClick={openUpModal}>Edit</button>}
            {/* {gig.gig_applications.length > 0 && !approvedGigs ? <button onClick={openUpModal}>Edit</button> : null} */}
        </div>  
        </>
    )
}

export default AgentProfileGigs;