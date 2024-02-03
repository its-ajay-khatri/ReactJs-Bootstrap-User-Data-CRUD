import React from "react";
import { Modal, Button } from "react-bootstrap";

const TableModalEditForm = (props) => {
  
  const {showModal, closeModal, selectedUser, handleInputChange, handleSaveChanges, newUser} = props  
  
  return(
        <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedUser ? "Edit Entry" : "Add User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="disabledTextInput" className="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First name"
                  value={
                    selectedUser ? selectedUser.firstName : newUser.firstName
                  }
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label htmlFor="disabledTextInput" className="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last name"
                  value={
                    selectedUser ? selectedUser.lastName : newUser.lastName
                  }
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="disabledTextInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={selectedUser ? selectedUser.email : newUser.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <label htmlFor="disabledTextInput" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone"
                  value={
                    selectedUser ? selectedUser.phoneNumber : newUser.phoneNumber
                  }
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default TableModalEditForm;