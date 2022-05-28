import React, { useState } from "react";
import GigPost from "./GigPost";
import GigDetails from "./GigDetails";


function GigPostsContainer( { gigData, keepTrack } ) {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedGig, setSelectedGig] = useState(NaN);
    const [searchTerm, setSearchTerm] = useState("");

    function openModal(gig) {
        setModalOpen(true);
        setSelectedGig(gig);
    }

    function closeModal() {
        setModalOpen(false);
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }

    const filteredPosts = gigData.filter((gig) => {
        return gig.venue.toLowerCase().includes(searchTerm.toLowerCase()) || gig.genres.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

    const renderedPosts = filteredPosts.map((gig) => {
        return <GigPost key={gig.id} gig={gig} openModal={openModal} keepTrack={keepTrack}/>
    })

    return(
        <>
        <div className="feed-row">
            <div className="feed-side-column">
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">F</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">N</h1>
                <h1 className="feed-letters">D</h1>
                <h1 className="feed-letters">R</h1>
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">F</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">N</h1>
                <h1 className="feed-letters">D</h1>
                <h1 className="feed-letters">R</h1>
            </div>
            <div className="feed-middle-column">
                <label className="input-label">SEARCH GIGS:</label>
                <input className="search-input" type="text" onChange={handleSearch} value={searchTerm}></input>
                { renderedPosts }
            </div>
            <div className="feed-side-column">
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">F</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">N</h1>
                <h1 className="feed-letters">D</h1>
                <h1 className="feed-letters">R</h1>
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">G</h1>
                <h1 className="feed-letters">F</h1>
                <h1 className="feed-letters">I</h1>
                <h1 className="feed-letters">N</h1>
                <h1 className="feed-letters">D</h1>
                <h1 className="feed-letters">R</h1>
            </div>
        </div>

        {
            
            ( modalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <GigDetails closeModal={closeModal} selectedGig={selectedGig} />
            </div>
            </> : null)
        }
        </>
    )
}

export default GigPostsContainer