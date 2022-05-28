import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/user";
import Axios from "axios";


function ArtistCustomizeForm() {
    const [user] = useContext(UserContext);
    const [artistImage, setArtistImage] = useState("");
    const [song1, setSong1] = useState("")
    const [song2, setSong2] = useState("")
    const [song3, setSong3] = useState("")
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

    
    console.log("artist image: ", artistImage)
    console.log("song1: ", song1)
    console.log("song2 :", song2)
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
            })
        })
        .then( res => res.json())
        .then( data => console.log(data))
        .catch( error => console.log(error.message));
    }
    
    return (
        <>
        <h1>artist form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Profile Picture: </label>
            <input type="file" name="profile_img" 
            onChange={(e) => {uploadImage(e.target.files)}}>
            </input>
            <label>Bio: </label>
            <textarea></textarea>
            <p>Upload up to 3 of your songs</p>
            <label>Song 1: </label>
            <input type="file" name="song1" 
            onChange={(e) => {uploadSong1(e.target.files)}}>
            </input>
            <label>Song 2: </label>
            <input type="file" name="song2" 
            onChange={(e) => {uploadSong2(e.target.files)}}>
            </input>
            <label>Song 3: </label>
            <input type="file" name="song3" 
            onChange={(e) => {uploadSong3(e.target.files)}}>
            </input>
            <button>Submit</button>
        </form>
        </>
    )
}

export default ArtistCustomizeForm