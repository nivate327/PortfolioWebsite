import React from "react";
import { Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
//'import "./swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Contact from "./Contact";
import Footer from "./Footer";
import Service from "./Service";


// import required modules
import { Pagination } from "swiper";
import WorkCounter from "./WorkCounter";
import Overlay from "./Overlay";
import MybioData from "./MybioData";

const Home = () => {

    const swiperArr = [{
        name: "Rohan",
        skills: "responsive websites.",
        img: "img1",
        link:"https://github.com/nivate327/"
    },
    {
        name: "Rohan",
        skills: "React Apps",
        img: "img2",
        link:"https://github.com/nivate327/"
    },
    {
        name: "Rohan",
        skills: "User Interface.",
        img: "img3",
        link:"https://github.com/nivate327/"
    }
    ];


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper container-fluid"
            >
                {swiperArr.map((val) => {
                    return (
                        <SwiperSlide className="slider">
                            <div className={val.img} >
                                <h1 className="slider-h1">I'm {val.name} </h1>
                                <h1 className="slider-h1">I build beautiful {val.skills}</h1>
                                <div className="btns">
                                    <button className="btn view-port"><a href={val.link}>View Portfolio</a></button>
                                    <button className="btn hire">Hire Me</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })

                }

            </Swiper>


            {/* My Projects */}
            <div className="MyProjects container-fluid" id="myproject">
                <h2>My Projects...</h2>

                <div className="container-fluid">
                    {/* first row*/}
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-12 col-12 col-md-3 first">
                            <a href="https://nivate327.github.io/Weather/"><img src="../img/weather.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Weather App</h3>
                                <p>build using React</p>
                            </div>

                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12 col-md-6 first">
                            <a href="https://nivate327.github.io/Fitness/"><img src="../img/fitness.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Fitness Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-12 col-12 col-md-3 first">
                            <a href="https://nivate327.github.io/PRODUCT-WEBSITE-TEMPLATE/"><img src="../img/accessories.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Accessories Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second row*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12 col-md-6 first">
                            <a href="https://nivate327.github.io/PRODUCT-WEBSITE-TEMPLATE/"><img src="../img/accessories.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Accessories Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12 col-md-6 first">
                            <a href="https://nivate327.github.io/PRODUCT-WEBSITE-TEMPLATE/"><img src="../img/accessories.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Accessories Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    {/* third row*/}
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12 col-md-4 first">
                            <a href="https://nivate327.github.io/CALCULATOR---JS/"><img src="../img/calculator.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Calculator</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-12 col-12 col-md-4 first">
                            <a href="https://nivate327.github.io/PRODUCT-WEBSITE-TEMPLATE/"><img src="../img/accessories.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Accessories Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-sm-12 col-12 col-md-4 first">
                            <a href="https://nivate327.github.io/PRODUCT-WEBSITE-TEMPLATE/"><img src="../img/accessories.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Accessories Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* fourth row*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12 col-md-6 first">
                            <a href="https://nivate327.github.io/PRODUCT-WEBSITE-TEMPLATE/"><img src="../img/accessories.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Accessories Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12 col-md-6 first">
                            <a href="https://nivate327.github.io/PRODUCT-WEBSITE-TEMPLATE/"><img src="../img/accessories.jpg" alt="" className="myproject" /></a>

                            <div className="content">
                                <h3>Accessories Website</h3>
                                <p>build using Html Css Javascript</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/*----------------workcounter Section-------------------*/}
            <MybioData/>


             {/*----------------workcounter Section-------------------*/}
             <WorkCounter/>

             {/*----------------service Section-------------------*/}
             <Service/>

             {/*----------------Overlay Section-------------------*/}
             <Overlay/>
           
           
            {/*----------------Contact Section-------------------*/}
            <Contact/>

            {/*----------------Footer Section-------------------*/}
            <Footer/>
            <Outlet />

        </>
    );
}

export default Home;