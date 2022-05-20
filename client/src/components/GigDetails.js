import React from "react";

function GigDetails({ closeModal, selectedGig }) {

    // console.log("from gig details: ", selectedGig)

    return (
        <>
        <button onClick={closeModal}>X</button>
        <h1>{selectedGig.venue}</h1>
        <h3>{selectedGig.date}</h3>
        <h3>{selectedGig.time}pm</h3>
        <h3>{selectedGig.genres}</h3>
        <h3>{selectedGig.description}</h3>
        <h3>Description</h3>
        </>       
    )
}

export default GigDetails