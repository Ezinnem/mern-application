import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export default function EditMember(props) {
  const memberDetails = props.details

  const [memberInfo, setMemberInfo] = useState({
    name: memberDetails.name,
    email: memberDetails.email,
    phone: memberDetails.phone,
    country: memberDetails.country
  });

  const handleChange = (event) => {
    setMemberInfo({ ...memberInfo, [event.target.name]: event.target.value });
  };

  const handleEditForm = (event) => {
    event.preventDefault();
    console.log(memberInfo);
    axios.patch(`http://localhost:4042/updateMember/${memberDetails._id}`, memberInfo)
      .then(res => console.log(res.data, res.status));
    window.location.reload(false);
  };

  if (props) {
    return (
      <div className="edit-form-container">
        <p className="edit-detail-text">Edit Member Details for {memberInfo.name}</p>

        <Form onSubmit={handleEditForm} className="edit-form">
          <input type="text" name="name" value={memberInfo.name} onChange={handleChange} />
          <input type="text" name="email" value={memberInfo.email} onChange={handleChange} />
          <input type="text" name="phone" value={memberInfo.phone} onChange={handleChange} />
          <input type="text" name="country" value={memberInfo.country} onChange={handleChange} />
          <Button type="submit" className="submit-edit-button">Submit Changes</Button>
        </Form>
      </div>
    );
  } else {
    <>
    </>
  }
}