import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgentEditGig({ closeUpModal, selectedEdit }) {

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
        fetch(`/gigs/${selectedEdit.id}`, {
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
        fetch(`/gigs/${selectedEdit.id}`, {
            method: "DELETE"
        })
        .then(() => navigateTo("/updating"))
        .catch( error => console.log(error.message));
    }

    return (
        <>
        <button onClick={closeUpModal}>X</button>
        <h1>Edit Your Gig at {selectedEdit.venue}</h1>
        <form onSubmit={handleEditSubmit}>
            <label>Venue:</label>
            <input placeholder={selectedEdit.venue} name="venue" onChange={handleEditInputs} value={editFormData.venue}></input>
            <label>Date:</label>
            <input placeholder={selectedEdit.date} name="date" onChange={handleEditInputs} value={editFormData.date}></input>
            <label>Time:</label>
            <input placeholder={selectedEdit.time} name="time" onChange={handleEditInputs} value={editFormData.time}></input>
            <label>Genres:</label>
            <input placeholder={selectedEdit.genres} name="genres" onChange={handleEditInputs} value={editFormData.genres}></input>
            <label>Description:</label>
            <input placeholder={selectedEdit.description} name="description" onChange={handleEditInputs} value={editFormData.description}></input>
            <button>Submit Changes</button>
        </form>
            <button onClick={handleDeleteGig}>Delete Gig</button>
        </>
    )
}

export default AgentEditGig;