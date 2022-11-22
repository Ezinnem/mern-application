import React, { useEffect, useState } from "react";
import axios from "axios";
import EditMember from "./edit-member";
import DeleteMember from "./delete-member";

import { Modal, Button, Alert } from "react-bootstrap";


export default function ListMember() {

  const [data, setData] = useState(null);
  const [memberId, setMemberId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleShowAlert = () => setShowAlert(true);

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:4042/getAllMembers`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);


  const editHandler = (item) => {
    setMemberId(item);
    handleShowModal();

  };

  const deleteHandler = (item) => {
    setMemberId(item);
    handleShowAlert()

  };


  if (data) {
    return <div>
      <Modal show={showModal} onHide={handleCloseModal} className="edit-modal">
        <EditMember details={memberId} />
        <Button onClick={handleCloseModal} className="close-modal"> Close</Button>
      </Modal>


      <Alert variant="danger" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>You are about to delete a member detail!</Alert.Heading>
        <DeleteMember details={memberId} />
      </Alert>

      <table className="table table-striped" style={{ marginTop: 20 }} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.data.members.map((item, i) => {
            return <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.country}</td>
              <td>
                <button className="edit-member"
                  onClick={() => {
                    editHandler(item);
                  }}
                >
                  Edit
                </button>
              </td>
              <td> <button className="delete-member"
                onClick={() => {
                  deleteHandler(item);
                }}
              >
                X
              </button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>;
  } else {

  }
}