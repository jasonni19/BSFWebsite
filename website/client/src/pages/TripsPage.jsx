import React from 'react'
import Navbar from '../components/NavBar'
import useSlide from "../components/Slide.jsx"
import carouselSlide from "../components/slideCarousel.jsx"


import Sun from "../images/people/sun.jpg"
import slide1 from "../images/support.jpg"
import slide2 from "../images/channel2.jpg"

const TripsPage = () => {
  useSlide()
  const slides = [slide1, Sun, slide2, Sun];
  const activeIndex = carouselSlide(slides.length);

  return (<div>
    <Navbar />
    <div className=" flex flex-col justify-center items-center">


      <h1 className=" text-center mt-8 text-sky-600 text-3xl lg:text-5xl font-bold"> <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> Trips and Events </span> </h1>
      <p className="  font-semibold text-lg lg:text-2xl w-[50%] mt-4">
        The Bruin Sportfishing Club organizes weekend fishing trips throughout the academic year, where we explore various local and regional fishing spots. Our trips range from casual day excursions to thrilling overnight camping and fishing adventures. Whether you're a seasoned angler or a beginner, our outings are designed to ensure everyone has a great time, catches some fish, and learns new techniques!

        We provide all the necessary equipment, including rods, reels, and tackle, and we organize carpools from campus to make getting to the fishing spots easier for everyone. We strive to make these trips affordable, with many outings being low-cost or free for participants.
        <br />  <br />
        To join a trip, simply sign up ahead of time! Keep an eye on our <a class="underline hover:text-sky-600" href="https://www.instagram.com/bruinsportfishing/">social media</a> and emails for trip announcements and registration details. We can’t wait to have you reel in some fun with us!  </p>
    </div>

    <div className="element-to-animate opacity-0 flex flex-col ">
      <h1 className="ml-[10%] mt-16 text-sky-600 text-4xl lg:text-5xl font-bold"> <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> Past Fishing Trips</span> </h1>
    </div>

    <div className="flex grid lg:grid-cols-2 sm:grid-cols-1">

      <div>
        <h1 className="mt-8 ml-[10%] lg:ml-[25%] text-3xl font-semibold "> Channel Islands Deep Sea Fishing</h1>
        <p className="ml-[10%]  lg:ml-[25%] mt-2 w-[80%] lg:w-[50%] "> Our annual Channel Islands fishing trip is a highly anticipated event where members set off on a half-day deep sea fishing trip near the stunning Channel Islands, located just off the coast of Southern California. After a successful day of fishing, members have the opportunity to cook and feast on their fresh catch!</p>

        <div className="mt-4 ml-[5%] lg:ml-[25%]" >

          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1 bg-blue-300">{slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item w-full ${index === activeIndex ? "block" : "hidden"
                    }`}
                >
                  <img src={slide} draggable="false" className="w-full h-screen object-cover" />
                </div>
              ))}</div>
            </div>
          </div>

        </div>
      </div>


      <div className="">
        <p className="lg:mt-8 sm:mt-[] text-3xl font-semibold"> Fishes We Caught:</p>
        <ul className="mt-2">
          <li>Rockfish</li>
          <li>White Seabass</li>
          <li>Mackerel</li>
          <li>Sand Dab</li>
        </ul>
      </div>

    </div>
  </div>







  )
}

export default TripsPage