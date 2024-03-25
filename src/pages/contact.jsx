import React from 'react'
import Canvas from "../utils/canvas"
import Footer from '../utils/footer'

export default function Ccontact() {
  return (
    <div className="landing contact">

        <div className="top">
            <Canvas />
            <div className="text_content">
                <div className="d-flex justify-content-between">
                    <h2 className="">Eminem Fan Card</h2>
                    <p className="mb-0 btn" data-bs-toggle="offcanvas" data-bs-target="#menu"><i class="fa-solid fa-list"></i></p>
                </div>
                <div className="desc">
                    <h1 className="fw-bold mb-3 text-center">Contact <span className="text_color">Us</span></h1>
                    <p className="text-center">Reach out and connect with us – your gateway to personalized assistance, expert guidance, and exceptional service. Our team is here to listen, support, and empower you every step of the way. </p>
                </div>
            </div>
            
            <img src="https://phantom-marca.unidadeditorial.es/8ba8e88f28354c7d6fea00517edacedd/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/19/16661328920205.jpg" alt="" />
        </div>

        <div className="section1">
            <h2 className="text-center fw-bold mb-4">Send Us a <span className="text_color">Message</span></h2>
            <div className="box">

                <div class="input-group">
                    <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                    <input required type="text" class="form-control" placeholder="Enter your name"/>
                </div>

                <div class="input-group">
                    <span class="input-group-text"><i class="fa-solid fa-envelope"></i></span>
                    <input required type="Email" class="form-control" placeholder="Enter your email address"/>
                </div>

                <textarea name="" id="" cols="30" rows="10"  placeholder='Enter your message'></textarea>

                <button className="btn">Send Message</button>
                

            </div>
        </div>

        <Footer/>

    </div>
  )
}
