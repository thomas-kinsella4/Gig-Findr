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
        <h1>{message}</h1>
        </>
    )
}

export default Loading