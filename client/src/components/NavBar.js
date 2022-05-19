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
        navigateTo("/login") 
        setUser({})
        })
        .catch( error => console.log(error.message));
    }


    return (
        <button onClick={handleLogOut}>Logout</button>
    )
}

export default NavBar;