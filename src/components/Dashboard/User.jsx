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
    const [userList, setuserList] = useState(Data)
    const [isOpen, setIsOpen] = useState(false)
    const [name, setname] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [accountType, setaccountType] = useState("")

    const openModal = (content) => {
        setIsOpen(!isOpen)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log('Submitted', { name, lastName, email, accountType });
        closeModal(); // Close the modal after processing
    };
    const handleNameChange = (e) => {
        setname(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setlastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setemail(e.target.value)
    }
    const handleAccountTypeChange = (e) => {
        setaccountType(e.target.value)
    }
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
                                                        <div class="dropdown">
                                                            <button
                                                                class="btn btn-primary dropdown-toggle"
                                                                type="button"
                                                                id="dropdownMenuButton"
                                                                data-mdb-dropdown-init
                                                                data-mdb-ripple-init
                                                                aria-expanded="false"
                                                            >
                                                                Dropdown
                                                            </button>
                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
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
        </div >
    )
}
