import React from "react";

function Applied({ closeAppliedModal, closeModal }) {

    setTimeout(closeModals, 1500);

    function closeModals() {
        closeAppliedModal()
        closeModal()
    }
    return (
        <>
        <h1>Applied</h1>
        </>
    )
}

export default Applied