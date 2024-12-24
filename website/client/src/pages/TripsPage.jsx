import React from 'react'
import Navbar from '../components/NavBar'
import useSlide from "../components/Slide.jsx"
import carouselSlide from "../components/slideCarousel.jsx"

import Footer from "../components/Footer.jsx"



import Sun from "../images/people/sun.jpg"
import bgImage from "../images/support.jpg"

import c1 from "../images/channel/c1.jpg"
import c2 from "../images/channel/c2.jpg"
import c3 from "../images/channel/c3.jpg"
import c4 from "../images/channel/c4.jpg"
import c5 from "../images/channel/c5.jpg"
import c6 from "../images/channel/c6.jpg"
import c7 from "../images/channel/c7.jpg"
import c8 from "../images/channel/c8.jpg"
import c9 from "../images/channel/c9.jpg"
import c10 from "../images/channel/c10.jpg"
import c11 from "../images/channel/c11.jpg"

import santaMonica from "../images/santaMonica.jpg"
import s2 from "../images/santa/s2.jpg"
import s3 from "../images/santa/s3.jpg"
import s4 from "../images/santa/s4.jpg"
import s5 from "../images/santa/s5.jpg"

const TripsPage = () => {
  useSlide()
  const channelSlides = [Sun,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11];
  const monicaSlides = [santaMonica,s2,s3,s4,s5];
  const activeIndex = carouselSlide(channelSlides.length);
  const activeIndex2 = carouselSlide(monicaSlides.length)

  return (<div style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
    <Navbar />

    <div className="z-0 relative flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage}` }}>
      {/* Overlay with low opacity */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div> {/* You can adjust opacity as needed */}

      <h1 className="text-center mt-8 text-sky-600 text-3xl lg:text-5xl font-bold z-10">
        <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>Trips and Events</span>
      </h1>
      <p className="font-semibold text-white text-lg lg:text-2xl w-[50%] mt-4 mb-8 z-10">
        The Bruin Sportfishing Club organizes weekend fishing trips throughout the academic year. Our trips range from casual day excursions to thrilling overnight camping and fishing adventures.
        <br />  <br />
        To join a trip, simply sign up ahead of time! Keep an eye on our <a className="underline hover:text-sky-600" href="https://www.instagram.com/bruinsportfishing/">social media</a> and emails for trip announcements and registration details. We can’t wait to have you reel in some fun with us!
      </p>
    </div>

    <div className="flex flex-col ">
      <h1 className="ml-[10%] mt-16 text-sky-600 text-4xl lg:text-5xl font-bold"> <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> Past Fishing Trips</span> </h1>
    </div>

    <div className="flex grid lg:grid-cols-2 sm:grid-cols-1 mb-16" alt="channel islands">

      <div>
        <h1 className="mt-8 ml-[10%] lg:ml-[25%] text-3xl font-semibold "> Channel Islands Deep Sea Fishing</h1>
        <p className="ml-[10%]  lg:ml-[25%] mt-2 w-[80%] lg:w-[50%] "> Our annual Channel Islands fishing trip is a highly anticipated event where members set off on a half-day deep sea fishing trip near the stunning Channel Islands, located just off the coast of Oxnard, California. After a successful day of fishing, members have the opportunity to cook and feast on their fresh catch!</p>

        <div className="mt-4 mb-4 ml-[10%] lg:ml-[25%]" >
        <p className="lg:mt-8 sm:mt-[] text-3xl font-semibold"> Fishes We Caught:</p>
        <ul className="mt-2">
          <li>- Rockfish</li>
          <li>- White Seabass</li>
          <li>- Mackerel</li>
          <li>- Lingcod</li>
          <li>- Sand Dab</li>
        </ul>
        </div>
      </div>


      <div className="z-0">

      <div className="ml-[2%] lg:ml-[20%] mockup-phone">
            <div className=" camera"></div>
            <div className=" display">
              <div className="artboard artboard-demo phone-1 bg-blue-300">{channelSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item w-full ${index === activeIndex ? "block" : "hidden"
                    }`}
                >
                  <img src={slide} draggable="false" className="w-full h-screen object-contain" />
                </div>
              ))}</div>
            </div>
          </div>

      </div>

    </div>



    <div className="flex grid lg:grid-cols-2 sm:grid-cols-1 mb-16" alt="Santa Monica">


      <div className="">

      <div className="z-0 ml-[2%] lg:ml-[20%] mockup-phone">
            <div className="z-0 camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-blue-300">{monicaSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item w-full ${index === activeIndex2 ? "block" : "hidden"
                    }`}
                >
                  <img src={slide} draggable="false" className="w-full h-screen object-contain" />
                </div>
              ))}</div>
            </div>
          </div>

      </div>

      <div>
        <h1 className="mt-8 text-3xl ml-[10%] font-semibold "> Santa Monica Pier Fishing</h1>
        <p className=" mt-2 w-[80%] ml-[10%] lg:w-[50%] "> Come join Bruin Sportfishing for a fun day at the Santa Monica Pier! Whether you're a seasoned angler or new to fishing, it’s a great chance to enjoy the ocean views and try your luck catching local fish. Meet up with fellow club members, relax, and make some great memories at one of LA’s most iconic spots.</p>

        <div className="mt-4 mb-4" >
        <p className="lg:mt-8 ml-[10%] sm:mt-[] text-3xl font-semibold"> Fishes We Caught:</p>
        <ul className="mt-2 ml-[10%]">
          <li>- Perch</li>
          <li>- Barred Sandbass</li>
          <li>- Mackerel</li>
          <li>- Croaker</li>
          <li>- Sardines</li>
        </ul>
        </div>
      </div>

    </div>

    <Footer/>
  </div>







  )
}

export default TripsPage