import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function GigDetails({ closeModal, selectedGig }) {

    
    let navigateTo = useNavigate();
    
    const bookedShows = selectedGig.gig_applications.find((app) => {
        return app.isApproved === true;
    })
    
    console.log(bookedShows)

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
        <button onClick={closeModal}>X</button>
        {
            user.isAgent === null && bookedShows && user.id === selectedGig.agent_id ? 
                <h1>You booked {bookedArtist.username} for this gig</h1>
                :
                null
           
        }
        <h1>{selectedGig.venue}</h1>
        <h3>{selectedGig.date}</h3>
        <h3>{selectedGig.time}{selectedGig.timetwo}</h3>
        <h3>{selectedGig.genres}</h3>
        <h3>{selectedGig.description}</h3>
        {user.music === null && applied ? <p>U ALREADY APPLIED for this show</p> : null}
        {!bookedShows && !user.username ? 
        <>
        <p>Log In Or Sign Up to apply</p> 
        <button onClick={() => navigateTo("/login")}>Login/Signup</button>
        </>
        : null}
        {/* {user.video === null && !applied && bookedShows.isApproved === true ? <button onClick={handleApplyClick} disabled>Apply</button> : <button onClick={handleApplyClick}>Apply</button>} */}
        {!bookedShows && user.video === null && !applied ? <button onClick={handleApplyClick}>Apply</button> : null}
        </>       
    )
}

export default GigDetails