import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import ArtistsShows from "./ArtistsShows";




function ArtistsShowsContainer() {

    const [user] = useContext(UserContext);
    const [userGigs, setUserGigs] = useState([])

    useEffect(() => {
        fetch(`/artists/${user.id}`)
        .then( res => res.json())
        .then( data => setUserGigs(data.gigs))
        .catch( error => console.log(error.message));
    }, [])

    console.log("userGigs: ", userGigs);

    const renderedArtistGigs = userGigs.map((gig) => {
        return <ArtistsShows key={gig.id} gig={gig} />
    })



    return (
        <>
        <h1>{user.username}'s shows</h1>
        {renderedArtistGigs}
        </>
    )
}

export default ArtistsShowsContainer;