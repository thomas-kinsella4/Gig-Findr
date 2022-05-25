import React from "react";

function AgentViewArtistProfile({ selectedArtist }) {

    console.log(selectedArtist)

    return (
        <>
        <h1>You are viewing {selectedArtist.username}'s profile</h1>
        </>
    )
}

export default AgentViewArtistProfile;