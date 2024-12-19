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
        <div className="bg-sky-300 min-w-full min-h-[1800px] overflow-hidden">
            {/* Navbar */}

            <NavBar />

            <div className="flex h-screen">


                <div className="bg-sky-200 h-[450px]">

                    <p className="text-2xl text-sky-600  font-semibold mt-16 text-center w-full rounded-lg p-5">  <span className="text-4xl" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                        Welcome to Bruin Sportfishing!
                    </span> <br /> <br />
                        The premier fishing club at UCLA, Bruin Sportfishing offers a welcoming community for all Bruins with an interest in fishing. Membership is free for all UCLA students, staff, and faculty, and we encourage anglers of all experience levels—whether you're a seasoned pro or just getting started—to join us on our exciting fishing trips! </p>

                    <img src={Island} loading="lazy" draggable="false" className="w-60 ml-auto hidden md:block hidden sm:block" />
                    <img src={Bear} loading="lazy" draggable="false" className=" sm:-mt-44" />
                    <img src={Fish1} loading="lazy" draggable="false" className="w-60 mt-24 ml-24 md:block hidden sm:block" />


                    <div className="flex justify-end items-end">
                    <div className="element-to-animate opacity-0 mr-12 text-white" >
                        <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}> <h1 className="text-5xl font-semibold hover:animate-pulse mb-3"> Stay Up to Date</h1> </span>

                        <div className="">
                            <p> Follow us on our Instagram, TikTok, and join our mailing list! <br /> You can also reach out with any questions or ideas for collaboration!</p>


                            <a className="underline hover:text-cyan-100 mr-3" href="https://www.instagram.com/bruinsportfishing/">Instagram</a>

                            <a className="underline hover:text-cyan-100 mr-3" href="https://www.tiktok.com/@bruinsportfishing?lang=en">Tiktok</a>

                            <a className="underline hover:text-cyan-100" href="https://docs.google.com/forms/d/e/1FAIpQLSd54h76fVEZeMex4BbmhglLNYM2sfDpEp7xuw3tTVwKalorCA/viewform">Join the Mailing List!</a>
                        </div>
                    </div>
                    </div>

                    <div className="container mx-auto px-4 py-8 min-h-screen overflow-hidden">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 overflow-x-hidden overflow-y-auto">

                            <div className="opacity-0 element-to-animate">
                                <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    <h1 className="mb-3 mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                        Upcoming and Past Trips
                                    </h1>
                                </span>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <img src={Monica} loading="lazy" className="w-40 h-40 rounded-full sm:block" />
                                    <p className="w-full sm:ml-5 mt-8 text-white">
                                        Get ready to cast your line on our exciting upcoming fishing trips!
                                        Whether you're an experienced fisher or just starting, our trips offer
                                        something for everyone. Stay tuned for <Link className="underline hover:text-cyan-100" to="/trips">details</Link> and join us for our next trip!
                                    </p>
                                </div>
                            </div>

                            <div className="opacity-0 element-to-animate">
                                <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    <h1 className="mb-3 mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                        Upcoming and Past Trips
                                    </h1>
                                </span>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <img src={Monica} loading="lazy" className="w-40 h-40 rounded-full sm:block" />
                                    <p className="w-full sm:ml-5 mt-8 text-white">
                                        Get ready to cast your line on our exciting upcoming fishing trips!
                                        Whether you're an experienced fisher or just starting, our trips offer
                                        something for everyone. Stay tuned for <Link className="underline hover:text-cyan-100" to="/trips">details</Link> and join us for our next trip!
                                    </p>
                                </div>
                            </div>

                            <div className="opacity-0 element-to-animate">
                                <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    <h1 className="mb-3 mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                        Upcoming and Past Trips
                                    </h1>
                                </span>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <img src={Monica} loading="lazy" className="w-40 h-40 rounded-full sm:block" />
                                    <p className="w-full sm:ml-5 mt-8 text-white">
                                        Get ready to cast your line on our exciting upcoming fishing trips!
                                        Whether you're an experienced fisher or just starting, our trips offer
                                        something for everyone. Stay tuned for <Link className="underline hover:text-cyan-100" to="/trips">details</Link> and join us for our next trip!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* }
                <div className = "flex mt-60 ml-16">
                        <div class="opacity-0 element-to-animate ">
                            <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                <h1 className="mb-3 mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                    Upcoming and Past Trips
                                </h1>
                            </span>
                            <div class="flex flex-col sm:flex-row items-center">
                                <img src={Monica} loading="lazy" className="w-60 h-60 rounded-full sm:block" />
                                <p className=" w-60 sm:ml-5 mt-8 text-white">
                                    Get ready to cast your line on our exciting upcoming fishing trips! Whether you're an experienced fisher or just starting, our trips offer something for everyone. Stay tuned for <Link className="underline hover:text-cyan-100" to="/trips">details</Link> and join us for our next trip!
                                </p>
                            </div>
                        </div>


                        <div class="opacity-0 element-to-animate ml-48">
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
                        </div> */}







                </div>


            </div>



        </div>
    );
}

export default HomePage; 
