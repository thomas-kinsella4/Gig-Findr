import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import AgentEditGig from "./AgentEditGig";
import AgentViewApps from "./AgentViewApps";

function AgentProfileGigs({ gig, keepTrack }) {

    const [user] = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [selectedEdit, setSelectedEdit] = useState(NaN);

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
            {gig.gig_applications.length > 0 ? <h1 style={{color: "red"}} onClick={() => openViewModal()}>ATTentioN</h1> : null}
            <h2>Gig at {gig.venue}</h2>
            <h3>{gig.date}</h3>
            <h3>{gig.time}pm</h3>
            <h3>{gig.genres}</h3>
            <button onClick={openUpModal}>Edit</button>
        </div>  
        </>
    )
}

export default AgentProfileGigs;