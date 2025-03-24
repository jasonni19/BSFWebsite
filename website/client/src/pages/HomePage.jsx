import React, { Suspense } from "react";
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import { Link } from 'react-router-dom';

import Island from "../images/island.png"
import Bear from "../images/bearfish.png"
import Fish1 from "../images/fish1.png"
import Fish2 from "../images/fish2.png"
import Fish3 from "../images/fish3.png"
import Monica from "../images/santaMonica.jpg"
import Support from "../images/support.jpg"
import teamPicture from "../images/team.jpg"
import socPicture from "../images/slide1.jpg"
import Coral1 from "../images/coral1.png"
import Coral2 from "../images/coral2.png"

import 'animate.css';

// Lazy load images
const LazyImage = ({ src, alt, className, draggable = "false" }) => (
    <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        draggable={draggable}
    />
);

// Preload critical images
const preloadImages = () => {
    const criticalImages = [Monica, teamPicture, Support]; // Preload the main section images
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

const HomePage = () => {
    // Preload critical images when component mounts
    React.useEffect(() => {
        preloadImages();
    }, []);

    return (
        <div className="custom-background bg-sky-300 min-w-full">
            <NavBar />

            <div className="flex">
                <div className="relative bg-sky-200 h-[450px]">
                    <p className="sm:text-1xl lg:text-2xl text-sky-600 font-semibold mt-16 text-center w-full rounded-lg p-5">
                        <span className="text-4xl lg:text-5xl font-bold" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                            Welcome to Bruin Sportfishing!
                        </span> <br /> <br />
                        The premier fishing club at UCLA, Bruin Sportfishing offers a welcoming community for all Bruins with an interest in fishing. Membership is free for all UCLA students, staff, and faculty, and we encourage anglers of all experience levels—whether you're a seasoned pro or just getting started—to join us on our exciting fishing trips!
                    </p>

                    <LazyImage src={Island} className="w-60 ml-auto mt-[3%] overflow-x-hidden hidden md:block hidden sm:block" alt="Island" />
                    <div className="flex">
                        <LazyImage src={Bear} className="overflow-x-hidden sm:-mt-44" alt="Bear" />
                        <LazyImage src={Fish2} className="w-60 overflow-x-hidden hidden md:block hidden sm:block" alt="Fish 2" />
                    </div>

                    <div className="flex justify-end items-end">
                        <LazyImage src={Fish1} className="w-60 ml-8 overflow-x-hidden hidden md:block hidden sm:block" alt="Fish 1" />
                        <LazyImage src={Fish3} className="w-60 mr-auto overflow-x-hidden ml-32 md:block hidden sm:block" alt="Fish 3" />
                        <div className="ml-5 mr-12 text-white">
                            <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                <h1 className="text-5xl font-semibold hover:animate-pulse mb-3"> Stay Up to Date</h1>
                            </span>

                            <div>
                                <p className="font-medium">
                                    Follow us on our Instagram, TikTok, and join our mailing list! <br />
                                    You can also reach out with any questions or ideas for collaboration.
                                </p>

                                <a className="underline hover:text-cyan-100 mr-3" href="https://www.instagram.com/bruinsportfishing/">Instagram</a>
                                <a className="underline hover:text-cyan-100 mr-3" href="https://www.tiktok.com/@bruinsportfishing?lang=en">Tiktok</a>
                                <a className="underline hover:text-cyan-100" href="https://docs.google.com/forms/d/e/1FAIpQLSd54h76fVEZeMex4BbmhglLNYM2sfDpEp7xuw3tTVwKalorCA/viewform">Join the Mailing List!</a>
                            </div>
                            <div className="flex justify-center">
                                <LazyImage src={socPicture} className="h-52 w-52 mt-3 rounded-full" alt="Social Media" />
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 overflow-x-hidden overflow-y-auto">
                            <div className="">
                                <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    <h1 className="mb-3 lg:mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                        Upcoming and Past Trips
                                    </h1>
                                </span>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <LazyImage src={Monica} className="w-40 mb-4 h-40 rounded-full sm:block" alt="Santa Monica Pier" />
                                    <p className="w-full sm:ml-5 text-white font-medium">
                                        Get ready to cast your line on our exciting upcoming fishing trips!
                                        Whether you're an experienced fisher or just starting, our trips offer
                                        something for everyone. Stay tuned for <Link className="underline hover:text-cyan-100" to="/trips">details</Link> and join us for our next trip!
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    <h1 className="mb-3 lg:mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                        Meet Our Team
                                    </h1>
                                </span>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <LazyImage src={teamPicture} className="w-40 h-40 rounded-full flex-shrink-0 flex-grow-0 mb-4 sm:block" alt="Team Picture" />
                                    <p className="w-full sm:ml-5 font-medium text-white">
                                        We're here to make sure every trip is fun, chill, and full of awesome memories.
                                        View more information about us <Link className="underline hover:text-cyan-100" to="/who-we-are">here</Link>!
                                    </p>
                                </div>
                            </div>

                            <div className="">
                                <span style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                                    <h1 className="mb-3 lg:mt-12 text-5xl text-white font-semibold hover:animate-pulse">
                                        Support Us
                                    </h1>
                                </span>
                                <div className="flex flex-col sm:flex-row items-center">
                                    <LazyImage src={Support} className="w-40 h-40 mb-4 rounded-full sm:block" alt="Support Us" />
                                    <p className="w-full sm:ml-5 font-medium text-white">
                                        Love what we're doing at Bruin Sportfishing? Your support helps us plan awesome fishing trips, grow our community, and share the joy of fishing with more people.
                                        More information on supporting us <Link className="underline hover:text-cyan-100" to="/support-us">here</Link>!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-[-4px]">
                        <div className="flex">
                            <LazyImage src={Coral1} className="w-64 ml-[10%] md:block hidden sm:block" alt="Coral 1" />
                            <LazyImage src={Coral2} className="w-64 ml-auto mr-[10%] md:block hidden sm:block" alt="Coral 2" />
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage; 
