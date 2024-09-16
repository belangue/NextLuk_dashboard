import React, { useState } from 'react';

const Data = [
    { id: 1, SalonName: 'John', location: 'Yaounde', HairdresserNumber:'4', HairdresserDetail: 'Admin', status: 'Pending' },
    { id: 2, SalonName: 'Jane', location: 'S', HairdresserNumber: '6', HairdresserDetail: 'User', status: 'Inactive' },
    { id: 3, SalonName: 'Fina', location: 'dora', HairdresserNumber:'3', HairdresserDetail: 'user', status: 'Suspended' },
    { id: 4, SalonName: 'John', location: 'Doe', HairdresserNumber:'6', HairdresserDetail: 'Admin', status: 'Active' },
    { id: 5, SalonName: 'William', location: 'Brown', HairdresserNumber: '7', HairdresserDetail: 'Admin', status: 'Active' },
    // ... (rest of the data)
];

const statusStyles = {
    "Inactive": { backgroundColor: '#FEE2E2', color: '#991B1B' },
    "Suspended": { backgroundColor: '#DBEAFE', color: '#1E40AF' },
    "Active": { backgroundColor: '#D1FAE5', color: '#065F46' },
    "Pending": { backgroundColor: '#FEF3C7', color: '#92400E' },
};

export default function Salonadmin() {
    const [userList, setUserList] = useState(Data);
    const [searchTerm, setSearchTerm] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false);
    const [selectedHairdresser, setSelectedHairdresser] = useState(null);

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredList = Data.filter(user => 
            user.SalonName.toLowerCase().includes(term) || 
            user.location.toLowerCase().includes(term)
        );
        setUserList(filteredList);
    };

    const openModal = (hairdresser) => {
        setSelectedHairdresser(hairdresser);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedHairdresser(null);
    };

    const openModal2 = () => {
        setModalOpen2(true);
    };

    const closeModal2 = () => {
        setModalOpen2(false);
    };
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>SalonAdmin</h3>
            
            <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <input
                    type="text"
                    placeholder="Search salons or users..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '8px' }}
                />
                <div>
                    <button onClick={() => openModal2(true)} style={{ backgroundColor: '#3B82F6', color: 'white', padding: '8px 16px', borderRadius: '4px', marginLeft: '1100px' }}>Add users</button>
                </div>
                {isModalOpen2 && (
            <div style={{marginTop: '16px', backgroundColor:'palegoldenrod', borderRadradius:'4px', cursor: 'pointer'}}>
            <h2>Add user</h2>
            <form>
            <label>User Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <button>Add</button>
            <button onClick={closeModal2}>Delete</button>
            </form>
            </div>
            )
            }
            </div>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#F3F4F6' }}>
                        <tr>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Id</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>SalonName</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Location</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>HairdresserNumber</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>HairdresserDetail</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
                            <th style={{ padding: '12px', textAlign: 'left' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((row) => (
                            <tr key={row.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                                <td style={{ padding: '12px' }}>{row.id}</td>
                                <td style={{ padding: '12px' }}>{row.SalonName}</td>
                                <td style={{ padding: '12px' }}>{row.location}</td>
                                <td style={{ padding: '12px', textAlign: 'center' }}>{row.HairdresserNumber}</td>
                                <td style={{ padding: '12px' }}>
                                    <button onClick={() => openModal(row)} style={{ color: '#3B82F6', fontWeight: 'bold', border:'none' }}>
                                        ...
                                    </button>
                                </td>
                                <td style={{ padding: '12px' }}>
                                    <span style={{
                                        ...statusStyles[row.status],
                                        padding: '4px 8px',
                                        borderRadius: '9999px',
                                        fontSize: '12px'
                                    }}>
                                        {row.status}
                                    </span>
                                </td>
                                <td style={{ padding: '12px' }}>
                                    <button style={{ backgroundColor: '#3B82F6', color: 'white', padding: '4px 8px', borderRadius: '4px', marginRight: '8px', fontSize: '14px' }}>Edit</button>
                                    <button style={{ backgroundColor: 'pink', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {modalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        maxWidth: '400px',
                        width: '100%'
                    }}>
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Hairdresser Details</h2>
                        {selectedHairdresser && (
                            <div>
                                <p>Salon Name: {selectedHairdresser.SalonName}</p>
                                <p>Location: {selectedHairdresser.location}</p>
                                <p>Hairdresser Number: {selectedHairdresser.HairdresserNumber}</p>
                                <p>Hairdresser Detail: {selectedHairdresser.HairdresserDetail}</p>
                                <p>Status: {selectedHairdresser.status}</p>
                            </div>
                        )}
                        <button 
                            onClick={closeModal}
                            style={{
                                marginTop: '16px',
                                backgroundColor: '#3B82F6',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}