import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

function NavBar() {

    const [user, setUser] = useContext(UserContext);

    let navigateTo = useNavigate();

    function handleLogOut() {
        fetch(`logout`, {
            method: "DELETE"
        })
        .then(() => {
        navigateTo("/loggingout") 
        setUser({})
        })
        .catch( error => console.log(error.message));
    }


    return (
        <>
            <div className="navbar-div">
                {user.isAgent === null ? 
                <>
                <button className="nav-btn" onClick={() => navigateTo("/")}>Home</button>
                <button className="nav-btn" onClick={() => navigateTo("/agent/profile")}>Profile</button>
                <button className="nav-btn" onClick={handleLogOut}>Logout</button> 
                </>
            : 
                <>
                <button className="nav-btn" onClick={() => navigateTo("/")}>HOME</button>
                <button className="nav-btn" onClick={() => navigateTo("/artist/profile")}>PROFILE</button>
                <button className="nav-btn" onClick={() => navigateTo("/artist/shows")}>YOUR GIGS</button>
                <button className="nav-btn" onClick={handleLogOut}>LOGOUT</button>
                </>
            }
            </div>
            <div className="welcome-header">
                    <h2 className="header-text">WELCOME BACK, <span id="navbar-username">{user.username}</span></h2>
            </div>
        </>
    )
}

export default NavBar;