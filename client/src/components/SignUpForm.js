import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import NavBar from "./NavBar";

function SignUpForm() {

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirm_password: ""
    });

    const [user, setUser] = useContext(UserContext);
    const [selectedType, setSelectedType] = useState("artist");
    // const [isAgent, setIsAgent] = useState(true)
   


    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleSelectChange(e) {
        setSelectedType(e.target.value)
    }

    function handleSignUpSubmit(e) {
        e.preventDefault()
    if (selectedType === "artist") {
       fetch(`/artist/signup`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(formData)
       })
       .then( res => 
        {
            if (res.ok) {
                res.json().then(data => {
                    // setErrors(null)
                    setUser(data)
                    console.log(data)
                })
            } else {
                res.json().then(res => {
                    // setErrors(res.errors)
                    // setShowErrors(true)
                })
            }
        })
            .catch( error => console.log(error.message));

    } else {
        fetch(`/agent/signup`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               Accept: "application/json"
           },
           body: JSON.stringify(formData)
       })
       .then( res => 
        {
            if (res.ok) {
                res.json().then(data => {
                    // setErrors(null)
                    setUser(data)
                    console.log(data)
                })
            } else {
                res.json().then(res => {
                    // setErrors(res.errors)
                    // setShowErrors(true)
                })
            }
        })
            .catch( error => console.log(error.message));
    }
    }
    


    return (
        <>
        <NavBar />
            <h3>Sign up</h3>
            <select onChange={handleSelectChange}>
                <option name="artist" value="artist">Artist</option>
                <option name="agent" value="agent">Agent</option>
            </select>
        <form onSubmit={handleSignUpSubmit}>
            <label>Username:</label>
            <input type="text" value={formData.username} name="username" onChange={handleFormChange}></input>
            <label>Password:</label>
            <input type="text" value={formData.password} name="password" onChange={handleFormChange}></input>
            <label>Confirm Password:</label>
            <input type="text" value={formData.confirm_password} name="confirm_password" onChange={handleFormChange}></input>
            <button>Sign Up</button>
        </form>
        </>
    )
}

export default SignUpForm