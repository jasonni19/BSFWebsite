import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer.jsx'
import useSlide from "../components/Slide.jsx"

import {Link } from "react-router-dom"; 
const SupportPage = () => {
    useSlide()
    return (
        <div style={{ backgroundColor: 'rgb(245, 245, 245)' }} className="min-h-screen flex flex-col">
            <Navbar />
            <div className=" flex flex-col justify-center items-center flex-grow">
                <h1 className="element-to-animate opacity-0 text-center mt-8 text-sky-600 text-5xl font-bold">
                    <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> Support Us </span>
                </h1>

                <h1 className="element-to-animate opacity-0 text-2xl lg:text-4xl mt-12 font-semibold text-center w-[50%]">
                    Thank you so much for your interest in supporting Bruin Sportfishing!
                </h1>

                <p className="element-to-animate opacity-0 text-xl lg:text-3xl mt-8 text-center w-[50%] mb-4">
                    As a student-run organization, funding is always a challenge for Bruin Sportfishing. From transportation and gear rentals for our fishing trips to providing bait, tackle, and educational materials for our meetings, most of our club’s expenses come directly from our members' pockets. Your support will allow us to make fishing trips, like deep-sea excursions and local outings, more accessible to all Bruins and help us expand fishing education without financial barriers!
                </p>

            <Link to="https://spark.ucla.edu/project/45037"
            className="element-to-animate opacity-0 text-sky-500 font-semibold text-4xl underline tracking-wide mb-8"> Donate here!</Link>
            </div>
            <Footer />
        </div>
    )
}

export default SupportPage
