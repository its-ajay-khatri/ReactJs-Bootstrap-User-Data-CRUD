import React, { useState } from "react";
import TableNavbar from "./TableComponents/tableheader";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import userJsonData from '../Data/UserData.json'
import TableGrid from "./TableComponents/TableGrid";
import TableModalEditForm from "./TableComponents/TableModalEditForm";
import './TablePage.css'

const TablePage = () => {
  const [userData, setUserData] = useState(userJsonData);
  const [showModal, setShowModal] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  //add a new user
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const openModal = (userId) => {
    const user = userData.find((user) => user.id === userId);
    setSelectedUser(user);
    setShowModal(true);
  };

  const openAddModal = () => {
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    setSelectedUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (selectedUser) {
      //If editing an existing user
      setSelectedUser((prevUser) => ({ ...prevUser, [name]: value }));
    } else {
      //If adding a new user
      setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  //delete current user using userId
  const handleDelete = (userId) => {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
    if (!confirmation) {
      return; 
    }
    const updatedData = userData.filter((user) => user.id !== userId);
    setUserData(updatedData);
  };

  const handleSaveChanges = () => {
    let updatedData;
    if (selectedUser) {
      if (       //validation
        selectedUser.firstName.trim() === "" ||
        selectedUser.lastName.trim() === "" ||
        selectedUser.email.trim() === "" ||
        selectedUser.phoneNumber.trim() === ""
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      updatedData = userData.map((user) =>
        user.id === selectedUser.id ? selectedUser : user
      );
    } else {
      if (       //validation
        newUser.firstName.trim() === "" ||
        newUser.lastName.trim() === "" ||
        newUser.email.trim() === "" ||
        newUser.phoneNumber.trim() === ""
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      updatedData = [...userData, { id: userData.length + 1, ...newUser }];
    }

    setUserData(updatedData);
    setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    setSelectedUser(null);
    setShowModal(false);
  };

  const sortByColumn = (columnName) => {
    if (sortOrder === "asc") {
      userData.sort((a, b) => (a[columnName] > b[columnName] ? 1 : -1));
      setSortOrder("desc");
    } else {
      userData.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1));
      setSortOrder("asc");
    }
  };

  const filteredData = userData.filter((user) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return (
      searchRegex.test(user.firstName) ||
      searchRegex.test(user.lastName) ||
      searchRegex.test(user.email) ||
      searchRegex.test(user.phoneNumber)
    );
  });

  return (
    <>
      <div className="table-container table-outer-section">
        <TableNavbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} openAddModal={openAddModal}/>
        {/* Table structure */}
        { filteredData.length !== 0 ? (
          <TableGrid openModal={openModal} sortByColumn={sortByColumn} filteredData={filteredData} handleDelete={handleDelete}/>
        ) : (
          <p className="not-found-text">Sorry, No Data found</p>
        )}
        {/* Modal structure */}
        <TableModalEditForm newUser={newUser} showModal={showModal} closeModal={closeModal} selectedUser={selectedUser} handleInputChange={handleInputChange} handleSaveChanges={handleSaveChanges}/>
      </div>
    </>
  );
};

export default TablePage;
