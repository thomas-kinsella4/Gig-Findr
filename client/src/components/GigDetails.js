import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import Applied from "./Applied";

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    function closeAppliedModal() {
        setIsModalOpen(false)
    }

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
            .then(setIsModalOpen(true))
           }
       })
       .then( data => console.log(data))
       .catch( error => console.log(error.message));
    }


    return (
        <>
        {
            isModalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <Applied closeAppliedModal={closeAppliedModal} closeModal={closeModal} />
            </div>
            </>
            :
            null
        }
        
        <button onClick={closeModal}>X</button>
        {
            user.isAgent === null && bookedShows ? 
                <h1>You booked {bookedArtist.username} for this gig</h1>

                :
                null
           
        }
        <h1>{selectedGig.venue}</h1>
        <h3>{selectedGig.date}</h3>
        <h3>{selectedGig.time}pm</h3>
        <h3>{selectedGig.genres}</h3>
        <h3>{selectedGig.description}</h3>
        {user.music === null && applied ? <p>U ALREADY APPLIED for this show</p> : null}
        {!user.username ? 
        <>
        <p>Log In Or Sign Up to apply</p> 
        <button onClick={() => navigateTo("/login")}>Login/Signup</button>
        </>
        : null}
        {user.music === null && !applied ? <button onClick={handleApplyClick}>Apply</button> : null}
        </>       
    )
}

export default GigDetails