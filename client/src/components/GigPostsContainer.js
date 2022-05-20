import React, { useState } from "react";
import GigPost from "./GigPost";
import GigDetails from "./GigDetails";


function GigPostsContainer( { gigData } ) {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedGig, setSelectedGig] = useState(NaN);

    function openModal(gig) {
        setModalOpen(true);
        setSelectedGig(gig);
    }

    function closeModal() {
        setModalOpen(false);
    }

    const renderedPosts = gigData.map((gig) => {
        return <GigPost key={gig.id} gig={gig} openModal={openModal}/>
    })

    return(
        <>
        {
            
            ( modalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <GigDetails closeModal={closeModal} selectedGig={selectedGig}/>
            </div>
            </> : null)
        }
        { renderedPosts }
        </>
    )
}

export default GigPostsContainer