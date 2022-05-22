import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import Applied from "./Applied";

function GigDetails({ closeModal, selectedGig }) {

    const [user] = useContext(UserContext)

    const [isModalOpen, setIsModalOpen] = useState(false);

    function closeAppliedModal() {
        setIsModalOpen(false)
    }


    function handleApplyClick() {
        // console.log("gig_id: ", selectedGig.id, "artist_id: ", user.id)
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
        <h1>{selectedGig.venue}</h1>
        <h3>{selectedGig.date}</h3>
        <h3>{selectedGig.time}pm</h3>
        <h3>{selectedGig.genres}</h3>
        <h3>{selectedGig.description}</h3>
        {user.music === null ? <button onClick={handleApplyClick}>Apply</button> : null}
        {!user.username ? <p>Log In Or Sign Up to apply</p> : null}
        </>       
    )
}

export default GigDetails