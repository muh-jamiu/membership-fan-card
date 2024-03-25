import React from 'react'
import Footer from '../utils/footer'
import Canvas from '../utils/canvas'

export default function Promo() {
  return (
    <div className="landing promo home">

        <div className="top">
            <Canvas />
            <div className="text_content">
                <div className="d-flex justify-content-between">
                    <h2 className="">Eminem Fan Card</h2>
                    <p className="mb-0 btn" data-bs-toggle="offcanvas" data-bs-target="#menu"><i class="fa-solid fa-list"></i></p>
                </div>
                <div className="desc">
                    <h1 className="fw-bold mb-3 text-center">Available <span className="text_color">Promo</span></h1>
                    <p className="text-center">Unlock a world of exclusive benefits and experiences with your membership card.</p>
                </div>
            </div>
            
            <img src="https://phantom-marca.unidadeditorial.es/8ba8e88f28354c7d6fea00517edacedd/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/19/16661328920205.jpg" alt="" />
        </div>

        <div className="section section2">
            <h1 className="fw-bold text-center">
                You don't have any <span className="text_color">Available</span> Promo!!
            </h1>
            <p className="text-center">You don't have any available promo, Please come back later.</p>

            <h2 className="fw-bold mt-5 mb-3 text-center"><span className="text_color">Check Out</span> Next Events.</h2>

            <div className="box">
                <div className="text">
                    <div className="p-4 mt-4">
                        <h1 className='fw-bold'>March 3, 2024</h1>
                        <p className="mb-1">Casino Center</p>
                        <p className="">Barcelona, Spain</p>
                        <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                    </div>
                </div>
                <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event6.jpg" alt="" />
            </div>
            
            <div className="box">
                <div className="text">
                    <div className="p-4 mt-4">
                        <h1 className='fw-bold'>March 18, 2024</h1>
                        <p className="mb-1">Casino Center</p>
                        <p className="">Barcelona, Spain</p>
                        <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                    </div>
                </div>
                <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event4-750x500.jpg" alt="" />
            </div>

            <div className="box">
                <div className="text">
                    <div className="p-4 mt-4">
                        <h1 className='fw-bold'>March 22, 2024</h1>
                        <p className="mb-1">Casino Center</p>
                        <p className="">Barcelona, Spain</p>
                        <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                    </div>
                </div>
                <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/gal7-750x500.jpg" alt="" />
            </div>

            <div className="box">
                <div className="text">
                    <div className="p-4 mt-4">
                        <h1 className='fw-bold'>March 27, 2024</h1>
                        <p className="mb-1">Casino Center</p>
                        <p className="">Barcelona, Spain</p>
                        <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                    </div>
                </div>
                <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/video1.jpg" alt="" />
            </div>

            <div className="box">
                <div className="text">
                    <div className="p-4 mt-4">
                        <h1 className='fw-bold'>April 6, 2024</h1>
                        <p className="mb-1">Casino Center</p>
                        <p className="">Barcelona, Spain</p>
                        <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                    </div>
                </div>
                <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event3-750x500.jpg" alt="" />
            </div>
        </div>

        <Footer />
    </div>
  )
}
