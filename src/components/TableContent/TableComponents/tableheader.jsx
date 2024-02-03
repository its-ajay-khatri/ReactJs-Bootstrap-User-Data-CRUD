import React from "react";

const TableNavbar = ({searchTerm, setSearchTerm, openAddModal}) => {
    return(
        <>
            <nav className="navbar navbar-expand-lg pt-3 pb-3" style={{backgroundColor:'#e3f2fd'}}>
                <div class="container-fluid">
                    <span class="navbar-brand">Navbar</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="navbar-nav ms-auto mb-2 mb-lg-0 me-3">
                            <button class="btn btn-primary" type="submit" onClick={openAddModal}>Add User</button>
                        </div>
                        <form  class="d-flex" onSubmit={(e) => e.preventDefault()} role="search">
                            <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search" aria-label="Search"
                            id="searchInput"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TableNavbar;