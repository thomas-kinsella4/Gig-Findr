import React from "react";

function AgentEditGig({ closeUpModal, selectedEdit }) {
    return (
        <>
        <button onClick={closeUpModal}>X</button>
        <h1>Edit Your Gig at {selectedEdit.venue}</h1>
        <form>
            <label>Venue:</label>
            <input placeholder={selectedEdit.venue}></input>
            <label>date:</label>
            <input placeholder={selectedEdit.date}></input>
            <label>time:</label>
            <input placeholder={selectedEdit.time}></input>
            <label>genres:</label>
            <input placeholder={selectedEdit.genres}></input>
            <label>description:</label>
            <input placeholder={selectedEdit.description}></input>
        </form>
        </>
    )
}

export default AgentEditGig;