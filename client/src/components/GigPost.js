import React from "react";

function GigPost({ gig }) {
    
    return (
        <>
        <div id="post">
            <h2>Gig at {gig.venue}!</h2>
            <h3>{gig.date}</h3>
            <h3>{gig.time}pm</h3>
            <h3>{gig.genres}</h3>
        <button>View Details</button>
        </div>  
        </>
    )
}

export default GigPost