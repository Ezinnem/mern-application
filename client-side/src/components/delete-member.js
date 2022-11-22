import axios from "axios";
import React from "react";
export default function DeleteMember(props) {
    const memberDetails = props.details

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:4042/deleteMember/${memberDetails._id}`)
            .then(res => console.log(res.data, res.status));
        window.location.reload(false);
    };

    const handleCancel = () => {
        window.location.reload(false);
    }
    if (props) {
        return (
            <div>
                <p>Are you sure you wish to Delete Member Details for {memberDetails.name}</p>

                <button onClick={handleDelete}>Yes</button> <button onClick={handleCancel}>Cancel</button>
            </div>
        );
    } else {
        <>
        </>
    }
}