import React from "react";
import { useNavigate } from "react-router-dom";

function Loading({ message, destination }) {

    let navigateTo = useNavigate();

    function navigateToFunction() {
        navigateTo(destination);
    }

    setTimeout(navigateToFunction, 1500);

    return (
        <>
        <div id="loading-div">
            <div className="container">
                <h1 id="loading-text">{message}</h1>
            </div>
        </div>
        </>
    )
}

export default Loading