import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import ArtistsShows from "./ArtistsShows";
import NavBar from "./NavBar";




function ArtistsShowsContainer() {

    const [user] = useContext(UserContext);
    const [userGigs, setUserGigs] = useState([]);
    const [userGigApps, setUserGigApps] = useState([]);

    // console.log("gigs from container: ",userGigs)
    // console.log("apps from container:", userGigApps)

    useEffect(() => {
        fetch(`/artists/${user.id}`)
        .then( res => res.json())
        .then( data => {
            setUserGigs(data.gigs)
            setUserGigApps(data.gig_applications)}
            )
        // .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }, [])

    // console.log("userGigs: ", userGigs);

    const renderedArtistGigs = userGigs.map((gig) => {
        return <ArtistsShows key={gig.id} gig={gig} userGigApps={userGigApps}/>
    })

    // const mappedApps = userGigApps.map((app) => {
    //     return app
    // })



    return (
        <>
        <NavBar />
        <h1>{user.username}'s shows</h1>
        {renderedArtistGigs}
        </>
    )
}

export default ArtistsShowsContainer;