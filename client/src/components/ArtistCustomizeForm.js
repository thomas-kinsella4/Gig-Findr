import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import Axios from "axios";
import { SiPiwigo, SiApplemusic } from "react-icons/si";




function ArtistCustomizeForm() {

    let navigateTo = useNavigate();

    const [user,setUser] = useContext(UserContext);
    const [artistImage, setArtistImage] = useState("");
    const [song1, setSong1] = useState("");
    const [song2, setSong2] = useState("");
    const [song3, setSong3] = useState("");
    const [bio, setBio] = useState("");
    // const [artistFormData, setArtistFormData] = useState({})

    // ONCHANGE, UPLOAD TO CLOUDINARY AND SET STATE TO BE THE PUBLIC ID WE GET BACK
    // ON FORM SUBMIT WE ARE SENDING A PATCH TO THE USER AND UPDATING THEIR PROFILE IMG AND SONGS TO BE THAT STATE WE JUST SET
console.log("from custom: ", user)
    
    function uploadImage(files) {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "jihpjhsw")

       Axios.post("https://api.cloudinary.com/v1_1/dpffchccp/image/upload", 
       formData
       ).then((res) => 
       setArtistImage(`https://res.cloudinary.com/dpffchccp/image/upload/v1653756400/${res.data.public_id}.png`))
    };

    function uploadSong1(files) {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "jihpjhsw")

       Axios.post("https://api.cloudinary.com/v1_1/dpffchccp/video/upload", 
       formData
       ).then((res) => 
       setSong1(res.data.url))
    };

    function uploadSong2(files) {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "jihpjhsw")

       Axios.post("https://api.cloudinary.com/v1_1/dpffchccp/video/upload", 
       formData
       ).then((res) => 
       setSong2(res.data.url))
    };

    function uploadSong3(files) {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "jihpjhsw")

       Axios.post("https://api.cloudinary.com/v1_1/dpffchccp/video/upload", 
       formData
       ).then((res) => 
       setSong3(res.data.url))
    };

    function handleBioChange(e) {
        setBio(e.target.value)
    }

    
    console.log("artist image: ", artistImage)
    console.log("song1: ", song1)
    console.log("song2 :", song2.length)
    console.log("song3: ", song3)
    // https://res.cloudinary.com/dpffchccp/video/upload/v1653758763/MissYouDemoV3_wj7cze.wav

    function handleFormSubmit(e) {
        e.preventDefault()
        fetch(`/artists/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                profile_img : artistImage,
                song1 : song1,
                song2 : song2,
                song3 : song3,
                bio: bio
            })
        })
        .then( res => res.json())
        .then( data => setUser(data))
        .then(navigateTo("/creating/prof"))
        .catch( error => console.log(error.message));
    }
    
    return (
        <>
        <div className="custom-form-div">
            <h1 className="gig-text-header">SETTING UP YOUR PROFILE</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="profile-pic" className="custom-form-label">Profile Picture: <SiPiwigo style={artistImage.length === 0 ? {"color": "#479AFF"} : {"color": "green"}}className="song-icon"/></label>
                <input id="profile-pic" className="file-input" type="file" name="profile_img" 
                onChange={(e) => {uploadImage(e.target.files)}}>
                </input>
                {artistImage.length === 0 ? null : <p>IMAGE UPLOADED</p>}
                <label htmlFor="bio-input" className="custom-form-label">Bio:</label>
                <textarea type="text" id="bio-input" className="bio-input-box" onChange={handleBioChange} value={bio}></textarea>
                <p className="custom-form-message">Upload up to 3 of your songs</p>
                <label htmlFor="song1" className="custom-form-label">Song 1:<SiApplemusic style={song1.length === 0 ? {"color": "#479AFF"} : {"color": "green"}} className="song-icon"/> </label>
                <input id="song1" className="file-input" type="file" name="song1" 
                onChange={(e) => {uploadSong1(e.target.files)}}>
                </input>
                {song1.length === 0 ? null : <p>SONG UPLOADED</p>}
                <label htmlFor="song2" className="custom-form-label">Song 2:<SiApplemusic style={song2.length === 0 ? {"color": "#479AFF"} : {"color": "green"}} className="song-icon"/> </label>
                <input id="song2" className="file-input" type="file" name="song2" 
                onChange={(e) => {uploadSong2(e.target.files)}}>
                </input>
                {song2.length === 0 ? null : <p>SONG UPLOADED</p>}
                <label htmlFor="song3" className="custom-form-label">Song 3:<SiApplemusic style={song3.length === 0 ? {"color": "#479AFF"} : {"color": "green"}} className="song-icon"/> </label>
                <input id="song3" className="file-input" type="file" name="song3" 
                onChange={(e) => {uploadSong3(e.target.files)}}>
                </input>
                {song3.length === 0 ? null : <p>SONG UPLOADED</p>}
                <button className="apply-button">Submit</button>
            </form>
                <button className="apply-button" onClick={() => navigateTo("/")}>Skip for now</button>
        </div>
        </>
    )
}

export default ArtistCustomizeForm