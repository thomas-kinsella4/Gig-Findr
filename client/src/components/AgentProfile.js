import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";
import AgentProfileGigs from "./AgentProfileGigs";
import AgentCreateGig from "./AgentCreateGig";
import Axios from "axios";
import { Image } from "cloudinary-react";


function AgentProfile({ keepTrack }) {

    const [user, setUser] = useContext(UserContext);
    const [allGigs, setAllGigs] = useState([]);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    function openCreate() {
        setCreateModalOpen(true);
    }

    function closeCreate() {
        setCreateModalOpen(false);
    }

    useEffect(() => {
        fetch(`/gigs`)
        .then( res => res.json())
        .then( data => setAllGigs(data))
        .catch( error => console.log(error.message));
    }, []);

    const filteredGigs = allGigs.filter((gig) => {
        return gig.agent_id === user.id
    })

    const renderedGigs = filteredGigs.map((gig) => {
        return <AgentProfileGigs key={gig.id} gig={gig} keepTrack={keepTrack}/>
    })

    function uploadImage(files) {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "jihpjhsw")

       Axios.post("https://api.cloudinary.com/v1_1/dpffchccp/image/upload", 
       formData
       ).then((res) => 
       console.log(res.data.public_id))
    };



    return (
        <>
        <NavBar />
        <input type="file" onChange={(e) => {uploadImage(e.target.files)}}></input>
        <Image style={{"width": 200}} cloudName="dpffchccp" publicId={user.profile_img}/>
        <audio className="audio-player" controls>
            <source src="https://res.cloudinary.com/dpffchccp/video/upload/v1653758763/MissYouDemoV3_wj7cze.wav" type="audio"></source>
        </audio>
        {
            createModalOpen ? 
            <>
            <div className="overlay"></div>
            <div className="modal">
                <AgentCreateGig closeCreate={closeCreate}/>
            </div>
            </>
            :
            null
        }
        <h1>{user.username}'s' Profile</h1>
        <button onClick={openCreate}>Create new listing</button>
        <h2>Your listed gigs:</h2>
        {renderedGigs}
        </>
    )
}

export default AgentProfile;