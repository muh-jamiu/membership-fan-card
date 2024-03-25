import React from 'react'
import Canvas from "../utils/canvas"

export default function About() {
  return (
    <div className="landing">

        <div className="top">
            <Canvas />
            <div className="text_content">
                <div className="d-flex justify-content-between">
                    <h2 className="">Eminem Fan Card</h2>
                    <p className="mb-0 btn" data-bs-toggle="offcanvas" data-bs-target="#menu"><i class="fa-solid fa-list"></i></p>
                </div>
                <div className="desc">
                    <h1 className="fw-bold mb-3 text-center">About <span className="text_color">Us</span></h1>
                    <p className="text-center">Experience the epitome of luxury, convenience, and personalized service as we redefine membership excellence. Join us and embark on a journey where every card unlocks a realm of extraordinary experiences tailored just for you.</p>
                </div>
            </div>
            
            <img src="https://phantom-marca.unidadeditorial.es/8ba8e88f28354c7d6fea00517edacedd/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/19/16661328920205.jpg" alt="" />
        </div>

    </div>
  )
}
