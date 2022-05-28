import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function AppliedArtistsList({ gig, artist, filteredGigApps , keepTrack}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log("filtered gig apps: ", filteredGigApps)

    let navigateTo = useNavigate();


    function handleViewClick() {
        keepTrack(artist)
        setIsModalOpen(true)
    }


    function handleBookArtistClick() {
        const filtered = filteredGigApps.filter((gigApp) => {
            return gigApp.artist_id === artist.id
        })
        const mapped = filtered.map((app) => {
            return app.id
        })
        fetch(`/gig_applications/${mapped[0]}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                isApproved : true
            })
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            navigateTo("/booking")
        })
        .catch( error => console.log(error.message));
    }

    return (
        <>
        <h1 className="applied-gig-text-header">{artist.username}</h1>
        <button className="view-button" onClick={() => handleViewClick()}>View {artist.username}'s profile</button>
        <button className="view-button" onClick={handleBookArtistClick}>Book {artist.username}</button>
        {
            isModalOpen ?
            <>
            <div className="overlay"></div>
            <div className="modal">
                <>
                <h1 className="applied-gig-text-header">{artist.username}</h1>
                {/* <h2>{artist.bio}</h2> */}
                <img></img>
                <button onClick={navigateTo("/view/artist")}>View full profile</button>
                </>
            </div>
            </>
            :
            null
        }
        </>
    )
}

export default AppliedArtistsList