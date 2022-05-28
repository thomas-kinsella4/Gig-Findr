import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { AiFillBell } from "react-icons/ai";


function ArtistsShows({ gig, userGigApps }) {

    const [isDetailsOpen, setIsDetailsOpen] = useState(false)

    const [user] = useContext(UserContext);

    const filteredApps = userGigApps.filter((app) => {
        return app.isApproved === true && app.gig_id === gig.id
    })

    function closeDetails() {
        setIsDetailsOpen(false)
    }

    return (
        <>
        
        {
            filteredApps.length === 0 ?
            <div id="post">
                <h2 className="gig-text-venue">Gig at {gig.venue}</h2>
                <button className ="gigpost-btn" onClick={() =>setIsDetailsOpen(true)}>View details</button>
            </div>
            :
            <div id="post">
                <h1 className="notification-flag" style={{"color": "green"}} onClick={() =>setIsDetailsOpen(true)}><AiFillBell /></h1>
                <h2 className="gig-text-venue">Gig at {gig.venue}</h2>
                <button className ="gigpost-btn" onClick={() =>setIsDetailsOpen(true)}>View details</button>
            </div>
        }
        {/* <div id="post">
        <h2>Gig at {gig.venue}</h2>
        <button onClick={() =>setIsDetailsOpen(true)}>View details</button>
        </div> */}
        {
            isDetailsOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
            {
                filteredApps.length === 0 ? 
                <>
                <div className="top-edit-div">
                <button className="modal-x-btn" onClick={closeDetails}>X</button>
                </div>
                <div className="modal-row">
                    <div className="modal-column-left">
                        <h2 className="gig-text-header">{gig.venue}</h2>
                    </div>
                    <div className="modal-column-right">
                        <h3 className="gig-text"><span className="details-labels">DATE</span>:{gig.date}</h3>
                        <h3 className="gig-text"><span className="details-labels">TIME</span>:{gig.time}{gig.timetwo}</h3>
                        <h3 className="gig-text"><span className="details-labels">GENRES</span>:{gig.genres}</h3>
                        <h3 className="gig-text"><span className="details-labels">DESCRIPTION</span>:{gig.description}</h3>
                        <h3 className="gig-text"><span className="details-labels">STATUS</span>:<span style={{"color": "yellow"}}>PENDING APPROVAL</span></h3> 
                    </div>
                </div>
                </>
                :
                <>
                <div className="top-edit-div">
                <button className="modal-x-btn" onClick={closeDetails}>X</button>
                </div>
                <div className="modal-row">
                    <div className="modal-column-left">
                        <h2 className="gig-text-header">{gig.venue}</h2>
                    </div>
                    <div className="modal-column-right">
                        <h2 className="gig-text" style={{"color": "green"}}>You have been BOOKED! for this gig</h2>
                        <h3 className="gig-text"><span className="details-labels">DATE</span>:{gig.date}</h3>
                        <h3 className="gig-text"><span className="details-labels">TIME</span>:{gig.time}pm</h3>
                        <h3 className="gig-text"><span className="details-labels">GENRES</span>:{gig.genres}</h3>
                        <h3 className="gig-text"><span className="details-labels">DESCRIPTION</span>:{gig.description}</h3>
                        <h3 className="gig-text">Status: <span style={{"color": "green"}}>APPROVED</span></h3> 
                    </div>
                </div>
                </>
            
                }
                        </div>
                        </>
                        :
                        null
        }
            </>
    )
}

export default ArtistsShows