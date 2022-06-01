import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function LogInForm() {

    let navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [user, setUser] = useContext(UserContext)
    const [selectedAccnt, setSelectedAccnt] = useState("artist")
    const [errors, setErrors] = useState("");

    function handleChangeForm(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function handleLogInSubmit(e) {
        e.preventDefault()
        if (selectedAccnt === "artist") {
           fetch(`/artist/login`, {
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
                        navigateTo("/loggingin")
                    })
                } else {
                    res.json().then(res => {
                        setErrors(res.error)   
                    })
                }
            })
                .catch( error => console.log(error.message));
    
        }  else {
           fetch(`/login`, {
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
                        navigateTo("/loggingin")
                    })
                } else {
                    res.json().then(res => {
                        setErrors(res.error)
                    })
                }
            })
                .catch( error => console.log(error.message));
    
        } 
    } 

    function handleLogInSelect(e) {
        setSelectedAccnt(e.target.value)
    }


    return (
        <div className="login-div">
            <h1 className="edit-gig-text-header">Log In</h1>
            <div className="view-row">
                    <div className="feed-side-column">

                    </div>
                <section className="login-middle-column">
                
                <select className="login-form-select" onChange={handleLogInSelect}>
                    <option style={{"color": "red"}} className="select-options" name="artist" value="artist">Artist</option>
                    <option className="select-options" name="agent" value="agent">Agent</option>
                </select>
                {selectedAccnt === "artist" ? <p className="message-text-login">You are an artist looking to play gigs</p> : null}
                {selectedAccnt === "agent" ? <p className="message-text-login">You are looking to book artists to perfom at your venues</p> : null}
                <form onSubmit={handleLogInSubmit}>
                    <label className="form-input-label">Username:</label>
                    <input className="form-input" type="text" value={formData.username} name="username" onChange={handleChangeForm} required></input>
                    <label className="form-input-label">Password:</label>
                    <input className="form-input" type="password" value={formData.password} name="password" onChange={handleChangeForm} required></input>
                    <br></br>
                    <button className="button">Log In</button> {errors !== "" ? <p className="message-text-login">{errors}<br></br>check to make sure you selected the correct account type</p> : null}
                </form>
                <p className="gig-text">dont have an account? <button className="button" onClick={() => navigateTo("/signup")}>Sign up here</button></p>
                
                </section>
            </div>
        </div>
    )
}

export default LogInForm