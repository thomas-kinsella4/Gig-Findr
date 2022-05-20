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
                        navigateTo("/")
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
                        navigateTo("/")
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
        <div style={{"padding" : "2em"}}>
        <h1>Log In</h1>
        <select onChange={handleLogInSelect}>
            <option name="artist" value="artist">Artist</option>
            <option name="agent" value="agent">Agent</option>
        </select>
        <button onClick={() => navigateTo("/signup")}>Sign up</button>
        <form onSubmit={handleLogInSubmit}>
            <label>Username:</label>
            <input type="text" value={formData.username} name="username" onChange={handleChangeForm} required></input>
            <label>Password:</label>
            <input type="password" value={formData.password} name="password" onChange={handleChangeForm} required></input>
            <button>Log In</button> {errors !== "" ? <p className="error-msg">{errors}</p> : null}
        </form>
        </div>
    )
}

export default LogInForm