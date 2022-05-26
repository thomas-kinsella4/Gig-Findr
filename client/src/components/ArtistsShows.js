import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";


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
                <h2>Gig at {gig.venue}</h2>
                <button onClick={() =>setIsDetailsOpen(true)}>View details</button>
            </div>
            :
            <div id="post">
                <h2 style={{"color": "green"}}>ATTENTION</h2>
                <h2>Gig at {gig.venue}</h2>
                <button onClick={() =>setIsDetailsOpen(true)}>View details</button>
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
                {console.log(filteredApps)}
            {
                filteredApps.length === 0 ? 
                <>
                <button onClick={closeDetails}>X</button>
                <h2>Gig at {gig.venue}</h2>
                <h3>{gig.date}</h3>
                <h3>{gig.time}{gig.timetwo}</h3>
                <h3>{gig.genres}</h3>
                <h3>Status: <span style={{"color": "yellow"}}>PENDING APPROVAL</span></h3> 
                </>
                :
                <>
                <button onClick={closeDetails}>X</button>
                <h2 style={{"color": "green"}}>You have been BOOKED! for this gig</h2>
                <h2>Gig at {gig.venue}</h2>
                <h3>{gig.date}</h3>
                <h3>{gig.time}pm</h3>
                <h3>{gig.genres}</h3>
                <h3>Status: <span style={{"color": "green"}}>APPROVED</span></h3> 
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