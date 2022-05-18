import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";

function UserPage() {
    const [user] = useContext(UserContext)
    console.log(user.isAgent);
    return (
        <>
        {
            user.isAgent === null ? <h1>Agent</h1> : <h1>Artist</h1>
        }
        </>
    )
}

export default UserPage