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

    // const sortedGigs = userGigs.map((gig) => {

    // })


    const renderedArtistGigs = userGigs.map((gig) => {
        return <ArtistsShows key={gig.id} gig={gig} userGigApps={userGigApps}/>
    })

    // const mappedApps = userGigApps.map((app) => {
    //     return app
    // })



    return (
        <>
        
            <div id="navbar" className="sticky">
            <NavBar />
            </div>
            <div className="view-row">
                <div className="feed-side-column">

                </div>
                <section className="view-middle-column">
                    <h1 className="gig-text-header">your gigs</h1>
                    {renderedArtistGigs}
                </section>
                <div className="feed-side-column">

                </div>
            </div>
      
        </>
    )
}

export default ArtistsShowsContainer;