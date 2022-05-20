import React from "react";

function AgentCreateGig({ closeCreate }) {
    return (
        <>
        <button onClick={closeCreate}>X</button>
        <h1>create a new gig listing</h1>
        <form>
        <label>Venue:</label>
            <input></input>
            <label>date:</label>
            <input></input>
            <label>time:</label>
            <input></input>
            <label>genres:</label>
            <input></input>
            <label>description:</label>
            <input></input>
        </form>
        </>
    )
}

export default AgentCreateGig