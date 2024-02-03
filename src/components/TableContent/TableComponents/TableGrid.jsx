import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './tableGrid.css'

const TableGrid = (props) => {

    const { openModal, sortByColumn, filteredData, handleDelete} = props;

    return(
        <>
        <div className="table-container">
            <div className="row table-inner-section">
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th
                        className="table-headings"
                        scope="col"
                        onClick={() => sortByColumn("id")}
                    >
                        Sr. No
                    </th>
                    <th
                        className="table-headings"
                        scope="col"
                        onClick={() => sortByColumn("firstName")}
                    >
                        First Name
                    </th>
                    <th
                        className="table-headings"
                        scope="col"
                        onClick={() => sortByColumn("lastName")}
                    >
                        Last Name
                    </th>
                    <th
                        className="table-headings"
                        scope="col"
                        onClick={() => sortByColumn("email")}
                    >
                        Email
                    </th>
                    <th
                        className="table-headings"
                        scope="col"
                        onClick={() => sortByColumn("phoneNumber")}
                    >
                        Number
                    </th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.map((val, index) => {
                    return (
                        <tr key={index}>
                        <th scope="row">{val.id}</th>
                        <td>{val.firstName}</td>
                        <td>{val.lastName}</td>
                        <td>{val.email}</td>
                        <td>{val.phoneNumber}</td>
                        <td className='table-buttons-column'>
                            <button
                            type="button"
                            className="btn btn-warning me-2"
                            onClick={() => openModal(val.id)}
                            >
                            Edit
                            </button>
                            <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(val.id)}
                            >
                            Delete
                            </button>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default TableGrid;