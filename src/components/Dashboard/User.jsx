import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { toast } from 'react-toastify';

const statusClassName = {
    "Suspended": "badge badge-light-danger",
    "Active": "badge badge-light-info",
}
const actionAPI = {
    "Suspended": "/changeStatus",
    "Active": "/changeStatus",
    "Deleted": "/delete"
}
export default function User() {
    const loaderData = useLoaderData()
    console.log(loaderData);
    const [userList, setUserList] = useState(loaderData.users);
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
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
    console.log(userList);

    const filiterUser = userList.filter(user => (
        user.email.toLocaleLowerCase().includes(searchTerm) ||
        user.username.toLocaleLowerCase().includes(searchTerm)
    ))
    const fetchUsersData = async () => {
        await fetch(`${process.env.REACT_APP_DEV_URL}/user/getAllUsers`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'access-control': '*',
                'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),

            },
        })
            .then(res => res.json())
            .then(async response => {
                console.log(response);
                if (response.users) {
                    setUserList(response.users)
                }
                toast.error(response.error);

            })
            .catch(async err => {
                console.log(err);
                toast.success("Logout Success");
            });
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
    const handleAction = async (action, userId) => {
        await fetch(`${process.env.REACT_APP_DEV_URL}/user/${actionAPI[action]}/${userId}`, {
            method: action === 'Deleted' ? 'delete' : 'Put',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'access-control': '*',
                'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),
            },
            body: JSON.stringify({
                status: action
            }),
        })
            .then(res => res.json())
            .then(async response => {
                console.log(response);
                if (response.message) {
                    toast.success(response.message);
                    fetchUsersData();
                }
                toast.error(response.error);

            })
            .catch(async err => {
                console.log(err);
                toast.success("Logout Success");
            });
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row page-title">
                    <div className="col-sm-6">
                        <h3>Users</h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header d-md-block">
                        <div className="d-md-flex d-sm-block align-items-center">
                            <form className="search-form mb-0">
                                <div className="input-group"><span className="input-group-text pe-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color='pink' viewBox="0 0 24 24" fill="black"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="feather feather-search">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                                    <input className="form-control" type="text" placeholder="Search anything..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value.toLocaleLowerCase())}
                                    />
                                </div>
                            </form>
                            <div className="flex-grow-1 text-end">
                                <form className="d-inline-flex">
                                    <button onClick={openModal} type="button" className="btn btn-primary" data-mdb-ripple-init data-mdb-modal-init data-mdb-target="#exampleModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-plus-square">
                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>

                                        </svg>
                                        Add user
                                    </button>
                                    {isOpen && (
                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <button type="button" className="btn-close" data-mdb-ripple-init data-mdb-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">...

                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-mdb-ripple-init data-mdb-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" data-mdb-ripple-init>Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                    </div >
                    <div className="card-body file-manager">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="b-b-jojo">
                                        <th scope="col">Id</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">AccountType</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filiterUser.map((row) => (
                                        <tr className='b-b-jojo' key={row.userId}>
                                            <th>{row.userId}</th>
                                            <td>
                                                {/* <img className="img-30 me-2" src={require(`../../assets/images/avatar/${row.id}.jpg`)}
                                                 alt="profile" /> */}
                                                {row.username}</td>
                                            <td>{row.email}</td>
                                            <td>{row.userType}</td>
                                            <td> <span className={statusClassName[row.status]}>{row.status}</span></td>
                                            <td>
                                                <MDBDropdown>
                                                    <MDBDropdownToggle>
                                                        Action
                                                    </MDBDropdownToggle>
                                                    <MDBDropdownMenu right>
                                                        <MDBDropdownItem link onClick={() => handleAction('Deleted', row.userId)}>Delete</MDBDropdownItem>
                                                        <MDBDropdownItem link onClick={() => handleAction('Suspended', row.userId)}>Suspend</MDBDropdownItem>
                                                        <MDBDropdownItem link onClick={() => handleAction('Active', row.userId)}>Activate</MDBDropdownItem>
                                                    </MDBDropdownMenu>
                                                </MDBDropdown>
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

export const getAllUsers = async ({ params }) => {
    let response = await fetch(`${process.env.REACT_APP_DEV_URL}/user/getAllUsers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'access-control': '*',
            'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),
        },
    })
    if (!response.ok) {
        throw ('An error occurred');
    }
    return await response.json();
}
