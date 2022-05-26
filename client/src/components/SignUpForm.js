import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";


function SignUpForm() {

    let navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirm_password: ""
    });

    const [user, setUser] = useContext(UserContext);
    const [selectedType, setSelectedType] = useState("artist");
    const [errors, setErrors] = useState("");
   


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
                    setErrors(null)
                    setUser(data)
                    navigateTo("/signingup")
                })
            } else {
                res.json().then(res => {
                    setErrors(res.errors)  
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
                    setErrors(null)
                    setUser(data)
                    navigateTo("/signingup")
                })
            } else {
                res.json().then(res => {
                    setErrors(res.errors)
                })
            }
        })
            .catch( error => console.log(error.message));
    }
    }
    


    return (
        <>
            <h3>Sign up</h3>
            <select onChange={handleSelectChange}>
                <option name="artist" value="artist">Artist</option>
                <option name="agent" value="agent">Agent</option>
            </select>
            {selectedType === "artist" ? <p>You've selected to signup as an artist, you are looking to play shows</p> : null}
            {selectedType === "agent" ? <p>You've selected to signup as an agent, you are looking to book artists to perfom at your venues</p> : null}
            <button onClick={() => navigateTo("/login")}>Back to login</button>
            {errors !== "" ? <p className="error-msg">{errors}</p> : null}
        <form onSubmit={handleSignUpSubmit}>
            <label>Username:</label>
            <input type="text" value={formData.username} name="username" onChange={handleFormChange} required></input>
            <label>Password:</label>
            <input type="text" value={formData.password} name="password" onChange={handleFormChange} required></input>
            <label>Confirm Password:</label>
            <input type="text" value={formData.confirm_password} name="confirm_password" onChange={handleFormChange} required></input>
            <button>Sign Up</button>
        </form>
        </>
    )
}

export default SignUpForm