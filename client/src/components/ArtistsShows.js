import React, { useContext } from "react";
import { UserContext } from "../context/user";


function ArtistsShows({ gig }) {

    const [user] = useContext(UserContext);
    // console.log(user)
    // console.log("gig from artist shows: ", gig)

    const gigApps = user.gig_applications;
    // console.log(gigApps);

    const filteredGigApps = gigApps.filter((gig) => {
        return gig.isApproved === true
    })

    console.log("filtered: ", filteredGigApps)
    return (
        <>
        <div id="post">
            <h2>Gig at {gig.venue}</h2>
            <h3>{gig.date}</h3>
            <h3>{gig.time}pm</h3>
            <h3>{gig.genres}</h3>
            {/* <h3>Status: {}</h3> */}
        </div>
        </>
    )
}

export default ArtistsShows