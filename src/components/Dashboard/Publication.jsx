import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Publication() {
    const loaderData = useLoaderData()
    // const navigate = useNavigate()
    console.log(loaderData);
    const [publicationList, setPublicationList] = useState(loaderData.hairstyle);
    const [isOpen, setIsOpen] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [hairstyleId, setHairstyleId] = useState('')
    const [newPublication, setNewPublication] = useState({
        name: "",
        price: 0,
        description: "",
        file: null,
        salonId: 1
    });
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    const fetchHairstyleData = async () => {
        await fetch(`${process.env.REACT_APP_DEV_URL}/hairstyle/getAllHairstyle`, {
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
                if (response.hairstyle) {
                    setPublicationList(response.hairstyle)
                }
                toast.error(response.error);

            })
            .catch(async err => {
                console.log(err);
                toast.success("Logout Success");
            });
    };

    const handleSubmit = async () => {
        // alert(JSON.stringify(newPublication))
        console.log(editMode);
        let url = ''
        if (editMode)
            url = `${process.env.REACT_APP_DEV_URL}/hairstyle/update/${hairstyleId}`
        else
            url = `${process.env.REACT_APP_DEV_URL}/hairstyle/createHairstyle`
        await fetch(url, {
            method: editMode ? 'Put' : 'Post',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'access-control': '*',
                'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),
            },
            body: JSON.stringify(newPublication),
        })
            .then(res => res.json())
            .then(async response => {
                console.log(response);
                if (response.message) {
                    if (newPublication.file) {
                        let formData = new FormData()
                        formData.append("images", newPublication.file)
                        await fetch(`${process.env.REACT_APP_DEV_URL}/uploadFile/${response.hairstyle.hairstyleId}`, {
                            method: 'Post',
                            headers: {
                                'access-control': '*',
                            },
                            body: formData,
                        })
                            .then(res => res.json())
                            .then(async response => {
                                console.log(response);
                                if (response.message) {
                                    toast.success(response.message);
                                }
                                toast.error(response.error);
                            })
                            .catch(async err => {
                                console.log(err);
                                toast.error("An error occur");
                            });
                    } else {
                        toast.success("good")
                    }
                    closeModal()
                    // navigate(window.location.pathname)
                    fetchHairstyleData()
                }
                toast.error(response.error);
            })
            .catch(async err => {
                console.log(err);
                toast.error("An error occur");
            });
    };
    console.log(publicationList);
    const handleDelete = async (id) => {
        console.log(id);

        await fetch(`${process.env.REACT_APP_DEV_URL}/hairstyle/delete/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                'access-control': '*',
                'authorization': 'Bearer ' + localStorage.getItem('nextluk_token'),
            },
            body: JSON.stringify(newPublication),
        })
            .then(res => res.json())
            .then(async response => {
                console.log(response);
                if (response.message) {
                    toast.success(response.message)
                    fetchHairstyleData()
                }
                toast.error(response.error);
            })
            .catch(async err => {
                console.log(err);
                toast.error("An error occur");
            });
    }
    return (
        <div className="container-fluid">
            <div className="card gallery-grid">
                <div className="card-header pb-0">
                    <h4>Hairdresser publication</h4>
                    <p className="desc mb-0 mt-1"><span></span><code></code><span></span></p>
                    <div className="card-header d-md-block">
                        <div className="d-md-flex d-sm-block align-items-center">
                            <form className="search-form mb-0">
                                <div className="input-group"><span className="input-group-text pe-0">
                                    <svg className="search-bg svg-color">
                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/iconly-sprite.svg#Search"></use>
                                    </svg></span>
                                    <input className="form-control" type="text" placeholder="Search anything..." />
                                </div>
                            </form>
                            <div className="flex-grow-1 text-end">
                                <button onClick={()=>{
                                    setHairstyleId('')
                                    setNewPublication({
                                        name: '',
                                        description: '',
                                        price: '',
                                    })
                                    setEditMode(false)
                                    openModal()
                                    }} className="btn btn-primary plus-square">
                                    <svg className="feather stroke-white ">
                                        <use href="https://admin.pixelstrap.net/edmin/assets/svg/feather-icons/dist/feather-sprite.svg#plus-square"></use>
                                    </svg>Add post
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="my-gallery card-body row gallery-with-description mb-0" itemscope="">
                    {publicationList.map((item) => (
                        <div className="col-xl-3 col-sm-6" key={item.id}>
                            <div className="my-gallery pswp-gallery">
                                <div className="pswp-gallery__item">
                                    <a data-pswp-width="1669" data-pswp-height="2500" >
                                        <img src={`${process.env.REACT_APP_DEV_URL}/../images/${item.hairstyleId}`}
                                            alt={item.name} height={250} />
                                        <div className="caption">
                                            <h4>{item.name}</h4>
                                            <p style={{ fontWeight: 'bold' }}>${item.price}</p>
                                            <p style={{ fontWeight: '' }}>{item.description}</p>
                                        </div>
                                    </a>
                                    <div style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end', gap: '3px' }} className="pswp-caption-content">
                                        <button
                                            style={{
                                                borderRadius: '10px',
                                                backgroundColor: 'transparent',
                                                height: '24px',
                                            }}
                                            onClick={() => {
                                                setHairstyleId(item.hairstyleId)
                                                setNewPublication({
                                                    name: item.name,
                                                    description: item.description,
                                                    price: item.price,
                                                    salonId: item.salonId,
                                                })
                                                setEditMode(true)
                                                openModal()
                                            }}
                                        >update</button>
                                        <button
                                            style={{
                                                borderRadius: '10px', backgroundColor: 'pink',
                                                height: '24px',
                                            }}
                                            onClick={() => handleDelete(item.hairstyleId)}>delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
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
                            <h5 className="modal-title">Add New Hairstyle</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="mb-3">
                                    <div className='row'>
                                        <div className='col md-5'>
                                            <label htmlFor="lastName" className="form-label">Hairstyle Name</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder='name'
                                                name="name"
                                                value={newPublication.name}
                                                onChange={(e) => setNewPublication({ ...newPublication, name: e.target.value })}
                                                required />
                                        </div>
                                        <div className='col md-5'>
                                            <label htmlFor="lastName" className="form-label">price</label>
                                            <input type="text" className="form-control" id="lastName"
                                                placeholder='price'
                                                name="price"
                                                value={newPublication.price}
                                                onChange={(e) => setNewPublication({ ...newPublication, price: e.target.value })}
                                                required />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Description</label>
                                    <textarea type="text" className="form-control"
                                        id="lastName" name="lastName"
                                        value={newPublication.description}
                                        onChange={(e) => setNewPublication({ ...newPublication, description: e.target.value })}
                                        required ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Image</label>
                                    <input type="file" className="form-control"
                                        id="lastName" name="lastName"
                                        // value={newPublication.price}
                                        onChange={(e) => setNewPublication({ ...newPublication, file: e.target.files[0] })}
                                        required />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export const getAllPulicationBySalon = async ({ params }) => {
    let response = await fetch(`${process.env.REACT_APP_DEV_URL}/hairstyle/getAllHairstyle`, {
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