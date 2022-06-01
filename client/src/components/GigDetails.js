import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function GigDetails({ closeModal, selectedGig }) {

    
    let navigateTo = useNavigate();
    
    const bookedShows = selectedGig.gig_applications.find((app) => {
        return app.isApproved === true;
    })

        useEffect(() => {
            if (bookedShows) {
                fetch(`/artist/${bookedShows.artist_id}`)
            .then( res => res.json())
            .then( data => setBookedArtist(data))
            .catch( error => console.log(error.message))
            } 
        }, [bookedShows])
    

    const [bookedArtist, setBookedArtist] = useState("");
    const [user] = useContext(UserContext)
   
    let applied = selectedGig.gig_applications.find((app) => {
        return app.artist_id === user.id
    })

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // function closeAppliedModal() {
    //     setIsModalOpen(false)
    // }

    function handleApplyClick() {
       fetch(`/gig_applications`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify({
               gig_id: `${selectedGig.id}`,
               artist_id: `${user.id}`,
               isApproved: false
           })
       })
       .then( res => {
           if(res.ok) {
            res.json()
            .then(navigateTo("/applying"))
           }
       })
       .then( data => console.log(data))
       .catch( error => console.log(error.message));
    }


    return (
        <>
        <button className="modal-x-btn" onClick={closeModal}>X</button>
        <div className="modal-row">
            <div className="modal-column-left">
                <h1 className="gig-text-header">{selectedGig.venue}</h1>
            </div>
            <div className="modal-column-right">
                {bookedShows ? <h1 className="gig-text" style={{"color": "green"}}>THIS GIG HAS BEEN BOOKED</h1> : null}
                {
                    user.isAgent === null && bookedShows && user.id === selectedGig.agent_id ? 
                        <h1 className="booked-gig-text">You booked {bookedArtist.username} for this gig</h1>
                        :
                        null
                
                }
                {/* {user.socialmedia_links === null && applied && bookedShows.isApproved && bookedShows.artist_id === user.id ? <h2 className="gig-text" style={{"color": "green"}}>You have been BOOKED! for this gig</h2> : null}
                {user.socialmedia_links === null && applied && bookedShows.isApproved && bookedShows.artist_id !== user.id ? <h2 className="gig-text" style={{"color": "green"}}>ANOTHER ARTIST HAS BEEN BOOKED FOR THIS GIG.<br></br>SORRY :/</h2> : null} */}
                <h3 className="gig-text"><span className="details-labels">DATE</span>:{selectedGig.date}</h3>
                <h3 className="gig-text"><span className="details-labels">TIME</span>:{selectedGig.time}{selectedGig.timetwo}</h3>
                <h3 className="gig-text"><span className="details-labels">GENRES</span>:{selectedGig.genres}</h3>
                <h3 className="gig-text"><span className="details-labels">DESCRIPTION</span>:{selectedGig.description}</h3>
                {user.socialmedia_links === null && applied ? <p className="message-text-login">You've applied for this gig.<br></br>Check "your gigs" to see the status of your application.</p> : null}
            </div>
        </div>
        {!bookedShows && !user.username ? 
            <>
        <div className="modal-bottom-div">
            <p className="message-text-login">Log In Or Sign Up to apply</p> 
        </div>
        <div className="modal-bottom-div">
            <button className="button" onClick={() => navigateTo("/login")}>Login/Signup</button>
        </div>
            </>
            : null}
            {/* {user.video === null && !applied && bookedShows.isApproved === true ? <button onClick={handleApplyClick} disabled>Apply</button> : <button onClick={handleApplyClick}>Apply</button>} */}
            <div className="modal-bottom-div">
                {!bookedShows && user.video === null && !applied ? <button className="apply-button" onClick={handleApplyClick}>Apply for this gig</button> : null}
            </div>
        </>       
    )
}

export default GigDetails