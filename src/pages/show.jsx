import React, { useEffect, useState } from 'react'
import axios from '../axios'
import { useCookies } from 'react-cookie'

export default function Show() {
    const [data, setdata] = useState([])
    const [loaded, setloaded] = useState(false)
    const [cookie, setCookie] = useCookies("")
    const [user, setUser] = useState(cookie.owner ??  "")

    useEffect(() => {
        axios.get("/card2/get2")
        .then(res => {
            setdata(res.data.data)
            setloaded(true)
        })
        .catch(err => {
            console.log(err)
            setloaded(false)
        })
    },[data])
    
    if(user){
        return (
            <div className='page'>
                <h2 className="text-center fw-bold text-white mb-1 mt-3">Data Save</h2>
                <p className="text-center text-white mb-4">You can view all your <span className="text-primary">saved data</span> on this page</p>
                {
                    !loaded && <>
                    <div className="text-center mt-5">
                        <div class="spinner-border text-primary"></div>  
                    </div></>
                }
                { loaded &&
                    data.map((val, index) => {
                        return (
                            <div className="box">
                                <h1 className="mb-4 fw-bold">{index + 1}:)</h1>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold text-white mb-0"><i class="fa-solid fa-user"></i> Name: </p>
                                    <p className="mx-2 mb-0 text-white">{val.name}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-envelope"></i> Email: </p>
                                    <p className="mx-2 mb-0 text-white">{val.email}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-phone"></i> Phone Number: </p>
                                    <p className="mx-2 mb-0 text-white">{val.phone}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-bag-shopping"></i> Occupation: </p>
                                    <p className="mx-2 mb-0 text-white">{val.occupation}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-flag-usa"></i> State: </p>
                                    <p className="mx-2 mb-0 text-white">{val.state}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-location-dot"></i> Home Address: </p>
                                    <p className="mx-2 mb-0 text-white">{val.address}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-thermometer"></i> Marital Status: </p>
                                    <p className="mx-2 mb-0 text-white">{val.status}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-money-check-dollar"></i> Payment Type: </p>
                                    <p className="mx-2 mb-0 text-white">{val.payment ?? "N/A"}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-solid fa-money-bill"></i> Card Type: </p>
                                    <p className="mx-2 mb-0 text-white">{val.card ?? "N/A"}</p>
                                </div>
                                <div className="d-flex mb-3">
                                    <p className="fw-bold mb-0 text-white"><i class="fa-brands fa-magento"></i> Age: </p>
                                    <p className="mx-2 mb-0 text-white">{val.age}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else{
        window.location.href = "/account-login"
    }
}
