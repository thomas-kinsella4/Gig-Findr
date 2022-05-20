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
        navigateTo("/") 
        setUser({})
        })
        .catch( error => console.log(error.message));
    }


    return (
        <>
        
            <div className="navbar-div">
                {user.isAgent === null ? 
                <>
                <button onClick={() => navigateTo("/agent/profile")}>Profile</button>
                <button onClick={() => navigateTo("/")}>Home</button>
                <button onClick={handleLogOut}>Logout</button> 
                </>
            : 
                <>
                <button onClick={() => navigateTo("/artist/profile")}>Profile</button>
                <button>Your Shows</button>
                <button onClick={() => navigateTo("/")}>Home</button>
                <button onClick={handleLogOut}>Logout</button>
                </>
            }
            </div>
        </>
    )
}

export default NavBar;