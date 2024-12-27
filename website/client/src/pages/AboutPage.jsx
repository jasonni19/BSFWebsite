import React from 'react'
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"

import Meeting from "../images/meeting.jpg"
import useSlide from "../components/Slide.jsx"

function AboutPage() {
    useSlide()
    return (<div style={{ backgroundColor: 'rgb(245, 245, 245)' }}> <Navbar />


        <div className="element-to-animate opacity-0 flex flex-col justify-center items-center">
            <h1 className="text-center mt-8 text-sky-600 text-5xl font-bold"> <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> What is Bruin Sportfishing? </span> </h1>
            <p className="font-semibold w-[50%] mt-4 text-center"> Bruin Sportfishing is a recreational fishing club at UCLA dedicated to building a community of students who share an interest in fishing and the outdoors. Our goal is to provide opportunities for members to learn about fishing techniques, engage in hands-on experiences, and foster camaraderie through group activities such as fishing trips and workshops. Whether you're an experienced fisher or completely new to fishing, Bruin Sportfishing welcomes everyone to explore and enjoy the sport together. </p>
        </div>

        <br />
        <br />

        <div className="element-to-animate opacity-0 flex flex-col justify-center items-center">
            <h1 className="text-center mt-8 text-sky-600 text-5xl font-bold"> <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> Join Today! </span></h1>
            <p className="font-semibold w-[50%] mt-4 text-center"> Meetings every Wednesday at 8 PM in <p className="underline">Kaplan A40 </p> </p>
            <img src={Meeting} draggable = "false" className="w-[90%] lg:w-[80%] rounded-lg mt-4" />
        </div>

        <div className=" flex flex-col justify-center items-center">
            <h1 className=" element-to-animate opacity-0 mt-16 mb-8 ml-8 lg:ml-0 sm:ml-8 text-sky-600 text-5xl font-bold"> <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> Frequently Asked Questions </span></h1>

            <div className="element-to-animate opacity-0 w-[80%]">
                <p className=" font-bold">Do I need to have prior fishing experience to join?</p>
                <p>No! Bruin Sportfishing is open to all students, in fact most people come with little to no fishing experience at all. We offer learning resources and mentorship to help you improve your fishing skills.</p>
            </div>

            <div className="element-to-animate opacity-0 w-[80%] mt-8">
                <p className="font-bold">How do I sign up for a fishing trip?</p>
                <p>To sign up for one of our fishing trips, simply attend a meeting, where we will announce trip details and registration instructions. You can also sign up online through our event pages, where you’ll find the necessary information for each trip, including location, date, and cost.</p>
            </div>

            <div className="element-to-animate opacity-0 w-[80%] mt-8">
                <p className="font-bold">What equipment do I need to bring for fishing trips?</p>
                <p>The club will provide most of the fishing gear for trips, but you are welcome to bring your own equipment if you prefer. Specific details about what to bring will be shared ahead of each trip.</p>
            </div>

            <div className="element-to-animate opacity-0 w-[80%] mt-8">
                <p className="font-bold">Are there any costs associated with joining the club or participating in events?</p>
                <p>Membership is free, and our goal is to make all fishing events free as well. For example, all of our fishing events have been nearly free for members, with fishing equipment, transportation, and fishing licenses covered. Please note that there may be occasional exceptions. </p>
            </div>

            <div className="element-to-animate opacity-0 w-[80%] mt-8 mb-16">
                <p className="font-bold">How can I get involved in the leadership or help organize events?</p>
                <p>We welcome members to get involved in leadership and event organization! If you are interested, you can express your interest during our meetings or contact our club officers. We are always looking for volunteers to help with event planning, logistics, and outreach. </p>
            </div>

            <Footer/>

        </div>

    </div>)
}

export default AboutPage;