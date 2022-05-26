import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function AgentCreateGig({ closeCreate }) {

    let navigateTo = useNavigate();

    const [user] = useContext(UserContext);

    const [createFormData, setCreateFormData] = useState({
        venue: "",
        time: 0,
        timetwo: "",
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
            <input type="text "name="venue" onChange={handleCreateInputs} value={createFormData.venue}></input>
            <label>Date:</label>
            <input type="text" name="date" onChange={handleCreateInputs} value={createFormData.date}></input>
            <label>Time:</label>
            <select name="time" onChange={handleCreateInputs} value={createFormData.time}>
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
            <select name="timetwo" onChange={handleCreateInputs} value={createFormData.timetwo}>
                <option value="pm">PM</option>
                <option value="am">AM</option>
            </select>
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