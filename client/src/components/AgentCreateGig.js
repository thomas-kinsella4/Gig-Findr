import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function AgentCreateGig({ closeCreate }) {

    let navigateTo = useNavigate();

    const [user] = useContext(UserContext);

    const [createFormData, setCreateFormData] = useState({
        venue: "",
        time: "",
        date: "",
        genres: "",
        description: ""
    });

    function handleCreateInputs(e) {
        setCreateFormData({
            ...createFormData,
            [e.target.name] : e.target.value
        })
    }

    function handleCreateSubmit(e) {
        e.preventDefault();
       fetch(`/gigs`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify({
               ...createFormData,
               agent_id: `${user.id}`
        })
       })
       .then(res => {
           if(res.ok) {
               navigateTo("/creating")
           }
       })
       .catch( error => console.log(error.message));
    }


    return (
        <>
        <button onClick={closeCreate}>X</button>
        <h1>create a new gig listing</h1>
        <form onSubmit={handleCreateSubmit}>
        <label>Venue:</label>
            <input name="venue" onChange={handleCreateInputs} value={createFormData.venue}></input>
            <label>Date:</label>
            <input name="date" onChange={handleCreateInputs} value={createFormData.date}></input>
            <label>Time:</label>
            <input name="time" onChange={handleCreateInputs} value={createFormData.time}></input>
            <label>Genres:</label>
            <input name="genres" onChange={handleCreateInputs} value={createFormData.genres}></input>
            <label>Description:</label>
            <input name="description" onChange={handleCreateInputs} value={createFormData.description}></input>
            <button>Create</button>
        </form>
        </>
    )
}

export default AgentCreateGig