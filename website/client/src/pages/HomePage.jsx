import React, { useState, useEffect, useRef } from "react";
import NavBar from "../components/NavBar.jsx"
import { Link } from 'react-router-dom';

import Island from "../images/island.png"
import Bear from "../images/bearfish.png"
import Fish1 from "../images/fish1.png"
import Monica from "../images/santaMonica.jpg"
import useSlide from "../components/Slide.jsx"

const HomePage = () => {
    useSlide();
    return (
        <div className="bg-sky-300 min-w-full h-[1800px] overflow-x-hidden">
            {/* Navbar */}

            <NavBar />

            <div className="flex h-screen">


                <div className="bg-sky-200 h-[450px]">

                    <p className="text-2xl text-sky-600 backdrop-blur-lg font-semibold mt-16 text-center w-full rounded-lg p-5">  <span className="text-4xl" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                        Welcome to Bruin Sportfishing!
                    </span> <br /> <br />
                        The premier fishing club at UCLA, Bruin Sportfishing offers a welcoming community for all Bruins with an interest in fishing. Membership is free for all UCLA students, staff, and faculty, and we encourage anglers of all experience levels—whether you're a seasoned pro or just getting started—to join us on our exciting fishing trips! </p>

                    <img src={Island} loading="lazy" draggable="false" className="absolute w-60 right-0 hidden md:block hidden sm:block" />
                    <img src={Bear} loading="lazy" draggable="false" className="" />
                    <img src={Fish1} loading="lazy" draggable="false" className="absolute w-60 mt-24 ml-24 md:block hidden sm:block" />


                    <div className="element-to-animate opacity-0 pr-32 absolute ml-20 right-0 text-white" >
                        <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}> <h1 className="text-5xl font-semibold hover:animate-pulse mb-3"> Stay Up to Date</h1> </span>

                        <div className="">
                            <p> Follow us on our Instagram, TikTok, and join our mailing list! <br /> You can also reach out with any questions or ideas for collaboration!</p>


                            <a className="underline hover:text-cyan-100 mr-3" href="https://www.instagram.com/bruinsportfishing/">Instagram</a>

                            <a className="underline hover:text-cyan-100 mr-3" href="https://www.tiktok.com/@bruinsportfishing?lang=en">Tiktok</a>

                            <a className="underline hover:text-cyan-100" href="https://docs.google.com/forms/d/e/1FAIpQLSd54h76fVEZeMex4BbmhglLNYM2sfDpEp7xuw3tTVwKalorCA/viewform">Join the Mailing List!</a>
                        </div>
                    </div>


                    <div class="container mt-64 mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-20">


                        <div class="opacity-0 element-to-animate">
                            <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                <h1 className="mb-3 mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                    Upcoming and Past Trips
                                </h1>
                            </span>
                            <div class="flex flex-col sm:flex-row items-center">
                                <img src={Monica} loading="lazy" className="w-60 h-60 rounded-full sm:block" />
                                <p className="w-60 sm:ml-5 mt-8 text-white">
                                    Get ready to cast your line on our exciting upcoming fishing trips! Whether you're an experienced fisher or just starting, our trips offer something for everyone. Stay tuned for <Link className="underline hover:text-cyan-100" to="/trips">details</Link> and join us for our next trip!
                                </p>
                            </div>
                        </div>


                        <div class="opacity-0 element-to-animate">
                            <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                <h1 className="mb-3 mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                    Support Us
                                </h1>
                            </span>
                            <div class="flex flex-col sm:flex-row items-center">
                                <img src={Monica} loading="lazy" className="w-60 h-60 rounded-full sm:block" />
                                <p className="w-60 sm:ml-5 mt-8 text-white">
                                    Get ready to cast your line on our exciting upcoming fishing trips! Whether you're an experienced fisher or just starting, our trips offer something for everyone. Stay tuned for <Link className="underline hover:text-cyan-100" to="/trips">details</Link> and join us for our next trip!
                                </p>
                            </div>
                        </div>

                    </div>
                    </div>





                    {/*<div className="carousel h-screen w-screen ">

                        <div id="slide2" className="carousel-item w-full ">
                            <img src={Slide1} className="rounded-md w-4/5 h-4/5 " />
                        </div>

                        <div id="slide3" className="carousel-item w-full">
                            <img src={Slide2} className="rounded-md w-4/5 h-4/5 " />
                        </div>

                        <div id="slide4" className="carousel-item w-full">
                            <img src={Logo1} className="rounded-md w-full h-4/5 " />
                        </div>

                        <div id="slide5" className="carousel-item w-full">
                            <img src={Logo1} className="rounded-md w-full h-4/5 " />

                        </div>
                    </div> */}

                </div>


            </div>



        </div>
    );
}

export default HomePage; 
