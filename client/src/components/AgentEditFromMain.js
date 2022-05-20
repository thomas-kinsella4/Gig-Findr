import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgentEditFromMain({ gig, closeEditModal }) {

    let navigateTo = useNavigate();

    const [editFormData, setEditFormData] = useState({})

    function handleEditInputs(e) {
        setEditFormData({
            ...editFormData,
            [e.target.name] : e.target.value
        })
    }   

    function handleEditSubmit(e) {
        e.preventDefault()
        fetch(`/gigs/${gig.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(editFormData)
        })
        .then(res => {
            if (res.ok) {
                navigateTo("/updating")
            }
        })
     }

    function handleDeleteGig() {
        fetch(`/gigs/${gig.id}`, {
            method: "DELETE"
        })
        .then(() => navigateTo("/updating"))
        .catch( error => console.log(error.message));
    }

    return (
        <>
        <button onClick={closeEditModal}>X</button>
        <h1>Edit Your Gig at {gig.venue}</h1>
        <form onSubmit={handleEditSubmit}>
            <label>Venue:</label>
            <input placeholder={gig.venue} name="venue" onChange={handleEditInputs} value={editFormData.venue}></input>
            <label>Date:</label>
            <input placeholder={gig.date} name="date" onChange={handleEditInputs} value={editFormData.date}></input>
            <label>Time:</label>
            <input placeholder={gig.time} name="time" onChange={handleEditInputs} value={editFormData.time}></input>
            <label>Genres:</label>
            <input placeholder={gig.genres} name="genres" onChange={handleEditInputs} value={editFormData.genres}></input>
            <label>Description:</label>
            <input placeholder={gig.description} name="description" onChange={handleEditInputs} value={editFormData.description}></input>
            <button>Submit Changes</button>
        </form>
            <button onClick={handleDeleteGig}>Delete Gig</button>
        </>
    )
}

export default AgentEditFromMain;