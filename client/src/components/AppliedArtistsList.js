import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function AppliedArtistsList({ artist, filteredGigApps , keepTrack}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    //on initial click have modal pop up with pic bio name, have button
    //with option to view full profile

    let navigateTo = useNavigate();

    //set selected artist, then filter gig apps to match the selected
    //artist and return that gig

    // const [selectedArtist, setSelectedArtist] = ([]);

    function handleViewClick() {
        keepTrack(artist)
        setIsModalOpen(true)
    }

    // console.log(filteredGigApps.id)

    // const mappedGigApps = filteredGigApps.filter((apps) => {
    //     return apps.artist_id === selectedArtist.id
    // })

    // console.log(mappedGigApps)

    // function selectArtist() {
    //     const selectedArtistApp = filteredGigApps.filter((gig) => {
    //         return gig.artist_id === artist.id
    //     })
    //     console.log(selectedArtistApp)
    // }

    return (
        <>
        <h1>{artist.username}</h1>
        <button onClick={() => handleViewClick()}>View {artist.username}'s profile</button>
        {
            isModalOpen ?
            <>
            <div className="overlay"></div>
            <div className="modal">
                <>
                <h1>{artist.username}</h1>
                <h2>{artist.bio}</h2>
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