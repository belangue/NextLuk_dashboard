import React, { useState } from 'react'
const Data = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', accountType: 'Admin', status: 'Pending' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com', accountType: 'User', status: 'Inactive' },
    { id: 3, firstName: 'Fina', lastName: 'dora', email: 'fina@gmail.com', accountType: 'user', status: 'Suspended' },
    { id: 4, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', accountType: 'Admin', status: 'Active' },
];
const statusClassName = {
    "Inactive":"badge badge-light-danger",
    "Suspended":"badge badge-light-primary",
    "Active":"badge badge-light-success",
    "Pending": "badge badge-light-info",
}
export default function User() {
    const [userList, setuserList] = useState(Data)
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
                                    <button class="btn btn-primary plus-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-plus-square">
                                            <rect x="3" y="3" width="18" color='white' height="18" rx="2" ry="2"></rect>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>Add users
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
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
                                                {/* <div class="text-center col-12 col-sm-6 col-md-12"> */}
                                                <button class="btn m-1 btn-info btn-outline-info" type="button" data-bs-toggle="tooltip" title="btn btn-outline-info">Info Button</button>
                                                {/* </div> */}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr class="b-b-jojo">
                                        <th scope="row">1</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/1.jpg")} alt="profile" />Ram Jacob</td>
                                        <td>Wolfe</td>
                                        <td>RamJacob@twitter</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-danger">Suspended</span></td>
                                        <td>IND</td>
                                    </tr>
                                    <tr class="b-b-jojo">
                                        <th scope="row">2</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/2.jpg")} alt="profile" />John Deo</td>
                                        <td>Gummer</td>
                                        <td>JohnDeo@twitter	</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-primary">Pending</span></td>
                                        <td>US</td>
                                    </tr>
                                    <tr class="b-b-jojo">
                                        <th scope="row">3</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/3.jpg")} alt="profile" />Elana John</td>
                                        <td>Cazale	</td>
                                        <td>ElanaJohn@twitter</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-danger">Suspended</span></td>
                                        <td>UK</td>
                                    </tr>
                                    <tr class="b-b-jojo">
                                        <th scope="row">4</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/4.jpg")} alt="" />Meryl Streep</td>
                                        <td>Roberts</td>
                                        <td>MerylStreep@twitter</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-success">Active</span></td>
                                        <td>IDN</td>
                                    </tr>
                                    <tr class="b-b-jojo">
                                        <th scope="row">5</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/5.jpg")} alt="" />Emma Stone</td>
                                        <td>Stone</td>
                                        <td>EmmaStone@twitter	</td>
                                        <td>Hairdresser</td>
                                        <td> <span class="badge badge-light-primary">Pending</span></td>
                                        <td>IRN</td>
                                    </tr>
                                    <tr class="b-b-jojo">
                                        <th scope="row">6</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/6.jpg")} alt="" />Eliana Jons</td>
                                        <td>Jons</td>
                                        <td>ElianaJons@twitter		</td>
                                        <td>Admin</td>
                                        <td> <span class="badge badge-light-success">Active</span></td>
                                        <td>IRN</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td> <img class="img-30 me-2" src={require("../../assets/images/avatar/7.jpg")} alt="" />Ram Jacob</td>
                                        <td>Ottandy</td>
                                        <td>ElianaJons@twitter		</td>
                                        <td>Admin</td>
                                        <td> <span class="badge badge-light-success">Active</span></td>
                                        <td>IRN</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
