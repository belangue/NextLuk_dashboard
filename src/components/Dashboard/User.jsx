import React, { useState } from 'react'
import { Dropdown, Modal, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Dropdown, Modal, Ripple });
const Data = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', accountType: 'Admin', status: 'Pending' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com', accountType: 'Hairdresser', status: 'Inactive' },
    { id: 3, firstName: 'Fina', lastName: 'dora', email: 'fina@gmail.com', accountType: 'Hairdresser', status: 'Suspended' },
    { id: 4, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', accountType: 'Admin', status: 'Active' },
    { id: 5, firstName: 'William', lastName: 'Brown', email: 'williambrown@yahoo.com', accountType: 'Admin', status: 'Active' },
    { id: 6, firstName: 'Olivia', lastName: 'Jones', email: 'oliviajones@corpmail.com', accountType: 'Hairdresser', status: 'Active' },
    { id: 7, firstName: 'France', lastName: 'Wilson', email: 'wilson@company.net', accountType: 'Hairdresser', status: 'Inactive' },
    { id: 8, firstName: 'Noah', lastName: 'Miller', email: 'noahmiller@gmail.com', accountType: 'Hairdresser', status: 'Active' },
    { id: 9, firstName: 'Ava', lastName: 'Taylor', email: 'avataylor@outlook.com', accountType: 'Hairdresser', status: 'Inactive' },
    { id: 10, firstName: 'Isabella', lastName: 'Moore', email: 'isabellamoor@yahoo.com', accountType: 'Hairdresser', status: 'Active' },
    // Add more data rows as needed
];
const statusClassName = {
    "Inactive": "badge badge-light-danger",
    "Suspended": "badge badge-light-primary",
    "Active": "badge badge-light-success",
    "Pending": "badge badge-light-info",
}
export default function User() {
    const [userList, setUserList] = useState(Data);
    const [isOpen, setIsOpen] = useState(false)
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        accountType: "",
    });
    const openModal = () => {
        setIsOpen(!isOpen)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const handleStatusChange = (userId, newStatus) => {
        setUserList(prevList => prevList.map(user =>
            user.id === userId ? { ...user, status: newStatus } : user
        ));
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = userList.length + 1;
        const createdUser = {
            id: newId,
            ...newUser,
            status: 'Pending'
        };
        setUserList(prevList => [...prevList, createdUser]);
        closeModal();
    };
    const handleAction = (action, userId) => {
        setUserList(prevList => prevList.map(user => {
            if (user.id === userId) {
                switch (action) {
                    case 'delete':
                        return null;
                    case 'suspend':
                        return { ...user, status: 'Suspended' };
                    case 'activate':
                        return { ...user, status: 'Active' };
                    default:
                        return user;
                }
            }
            return user;
        }).filter(Boolean));
    };

    return (
        <div>
            <div class="container-fluid">
                <div class="row page-title">
                    <div class="col-sm-6">
                        <h3>Users</h3>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header d-md-block">
                        <div class="d-md-flex d-sm-block align-items-center">
                            <form class="search-form mb-0">
                                <div class="input-group"><span class="input-group-text pe-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color='pink' viewBox="0 0 24 24" fill="black"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-search">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                                    <input class="form-control" type="text" placeholder="Search anything..." />
                                </div>
                            </form>
                            <div class="flex-grow-1 text-end">
                                <form class="d-inline-flex">
                                    <button onClick={openModal} type="button" class="btn btn-primary" data-mdb-ripple-init data-mdb-modal-init data-mdb-target="#exampleModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-plus-square">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>

                                        </svg>
                                        Add user
                                    </button>
                                    {isOpen && (
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <button type="button" class="btn-close" data-mdb-ripple-init data-mdb-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">...

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-mdb-ripple-init data-mdb-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary" data-mdb-ripple-init>Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                    </div >
                    <div class="card-body file-manager">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr class="b-b-jojo">
                                        <th scope="col">Id</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">AccountType</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((row) => (
                                        <tr className='b-b-jojo' key={row.id}>
                                            <th>{row.id}</th>
                                            <td><img class="img-30 me-2" src={require(`../../assets/images/avatar/${row.id}.jpg`)} alt="profile" />{row.firstName}</td>
                                            <td>{row.lastName}</td>
                                            <td>{row.email}</td>
                                            <td>{row.accountType}</td>
                                            <td> <span class={statusClassName[row.status]}>{row.status}</span></td>
                                            <td>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-primary dropdown-toggle"
                                                        type="button"
                                                        id={`dropdownMenuButton-${row.id}`}
                                                        data-mdb-dropdown-init
                                                        data-mdb-ripple-init
                                                        aria-expanded="false"
                                                    >
                                                        Change
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${row.id}`}>
                                                        <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange(row.id, 'Active')}>Active</a></li>
                                                        <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange(row.id, 'Inactive')}>Inactive</a></li>
                                                        <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange(row.id, 'Suspended')}>Suspended</a></li>
                                                        <li><a className="dropdown-item" href="#" onClick={() => handleStatusChange(row.id, 'Pending')}>Pending</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >
            {isOpen && (
                <div className="modal-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div className="modal-content" style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '5px',
                        width: '80%',
                        maxWidth: '500px'
                    }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Add New User</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" value={newUser.firstName} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" value={newUser.lastName} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={newUser.email} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="accountType" className="form-label">Account Type</label>
                                    <select className="form-select" id="accountType" name="accountType" value={newUser.accountType} onChange={handleInputChange} required>
                                        <option value="">Select account type</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Hairdresser">Hairdresser</option>
                                    </select>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                    <button type="submit" className="btn btn-primary">Add User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}
