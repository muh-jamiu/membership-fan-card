import React, { useEffect, useState } from 'react'
import Canvas from "../utils/canvas"
import Footer from '../utils/footer'

export default function Listing() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        setCards([
            {
                "name" : "Regular",
                "price" : "USD $199",
                "description" : "Unlock the world of celebrity fandom with our Regular Membership Card – your passport to exclusive access and insider perks. Dive into a realm where dreams meet reality, and immerse yourself in the excitement of celebrity culture.",
                "color" : "first",
            },
            {
                "name" : "VIP",
                "price" : "USD $499",
                "description" : "Step into the spotlight with our VIP Membership Card – your golden ticket to the ultimate celebrity fan experience. As a VIP member, you'll enjoy unparalleled access to exclusive events, meet-and-greets with your favorite stars.",
                "color" : "second",
            },
            {
                "name" : "VVip",
                "price" : "USD $1,000",
                "description" : "Indulge in the epitome of celebrity fandom with our VVIP Membership Card – the pinnacle of luxury and exclusivity for the true connoisseur of star-studded experiences.",
                "color" : "third",
            },
        ])
    })

    return (
        <div className="landing listing blogs">

            <div className="top">
                <Canvas />
                <div className="text_content">
                    <div className="d-flex justify-content-between">
                        <h2 className="">Eminem Fan Card</h2>
                        <p className="mb-0 btn" data-bs-toggle="offcanvas" data-bs-target="#menu"><i class="fa-solid fa-list"></i></p>
                    </div>
                    <div className="desc">
                        <h1 className="fw-bold mb-3 text-center">Check All Available <span className="text_color">Cards</span></h1>
                        <p className="text-center">Discover a deck of possibilities, each card a gateway to unique privileges and memorable journeys. With every card, unlock a world of opportunities tailored to your passions and aspirations.</p>
                    </div>
                </div>
               
                <img src="https://phantom-marca.unidadeditorial.es/8ba8e88f28354c7d6fea00517edacedd/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/19/16661328920205.jpg" alt="" />
            </div>

            <div className="section1">
                {
                    cards.map(val => {
                        return(
                            <div className="box">
                                <h2 className="fw-bold text-white mt-2">{val.name} Membership Card</h2>
                                <h4 className="date mb-4 text-success">Price: <span className="fw-bold">{val.price}</span></h4>
                                <div className="card" id={val.color}>
                                </div>
                                <p className="content text-white">{val.description}</p>
                                <button id={val.color} className="btn bg-success"><a href="/enrollment" className='text-white'>Purchase</a></button>
                            </div>
                        )
                    })
                }
            </div>

            <Footer />

        </div>
    )
}
