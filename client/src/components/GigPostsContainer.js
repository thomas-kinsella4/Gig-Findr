import React from "react";
import GigPost from "./GigPost";


function GigPostsContainer( { gigData } ) {

    const renderedPosts = gigData.map((gig) => {
        return <GigPost key={gig.id} gig={gig} />
    })

    return(
        <>
        { renderedPosts }
        </>
    )
}

export default GigPostsContainer