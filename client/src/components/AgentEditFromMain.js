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
        <div className="top-edit-div">
            <button className="edit-modal-x-btn" onClick={closeEditModal}>X</button>
        </div>
        <div className="modal-row">
            <div className="modal-column-left">
                <h1 className="edit-gig-text-header">Edit Your Gig at {gig.venue}</h1>
            </div>
            <div className="modal-column-right">
                <form onSubmit={handleEditSubmit}>
                    <label className="form-input-label">Venue:</label>
                    <input className="form-input" type="text" placeholder={gig.venue} name="venue" onChange={handleEditInputs} value={editFormData.venue}></input>
                    <label className="form-input-label">Date:</label>
                    <input className="form-input" type="text" placeholder={gig.date} name="date" onChange={handleEditInputs} value={editFormData.date}></input>
                    <label className="form-input-label">Time:</label>
                    <select className="form-input" name="time" onChange={handleEditInputs} value={editFormData.time} >
                        <option value={gig.time}>{gig.time}</option>
                        <option value={12}>12</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                    </select>
                    <select className="form-input" name="timetwo" onChange={handleEditInputs} value={editFormData.timetwo}>
                        <option value="pm">PM</option>
                        <option value="am">AM</option>
                    </select>
                    <label className="form-input-label">Genres:</label>
                    <input className="form-input" type="text" placeholder={gig.genres} name="genres" onChange={handleEditInputs} value={editFormData.genres}></input>
                    <label className="form-input-label">Description:</label>
                    <input className="form-input" type="text" placeholder={gig.description} name="description" onChange={handleEditInputs} value={editFormData.description}></input>
                    <br></br>
                    <button className="button">Submit Changes</button>
                </form>
                </div>
        </div>
            <button className="button" onClick={handleDeleteGig}>Delete Gig</button>
        </>
    )
}

export default AgentEditFromMain;