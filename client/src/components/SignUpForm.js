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
                    navigateTo("/artist/signingup")
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
        <div className="login-div">
            <h1 className="edit-gig-text-header">Sign up</h1>
            <div className="view-row">
                    <div className="feed-side-column">

                    </div>
            <section className="login-middle-column">
            <select onChange={handleSelectChange} className="login-form-select">
                <option name="artist" value="artist">Artist</option>
                <option name="agent" value="agent">Agent</option>
            </select>
            {selectedType === "artist" ? <p className="message-text-login">You've selected to sign up as an artist,<br></br> you are looking to play gigs</p> : null}
            {selectedType === "agent" ? <p className="message-text-login">You've selected to sign up as an agent,<br></br> you are looking to book artists to perfom at your venues</p> : null}
            {errors !== "" ? <p className="error-msg">{errors}</p> : null}
        <form onSubmit={handleSignUpSubmit}>
            <label className="form-input-label">Username:</label>
            <input className="form-input" type="text" value={formData.username} name="username" onChange={handleFormChange} required></input>
            <label className="form-input-label">Password:</label>
            <input className="form-input" type="password" value={formData.password} name="password" onChange={handleFormChange} required></input>
            <label className="form-input-label">Confirm Password:</label>
            <input className="form-input" type="password" value={formData.confirm_password} name="confirm_password" onChange={handleFormChange} required></input>
            <br></br>
            <button className="button">Sign Up</button>
        </form>
            <button onClick={() => navigateTo("/login")} id="back-to-login-button">Back to login</button>
            </section>
        </div>
        </div>

        </>
    )
}

export default SignUpForm