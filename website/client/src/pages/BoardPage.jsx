import React from "react"
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import PersonCard from "../components/PersonCard.jsx"

import Bridget from "../images/people/bridget.png"
import Sun from "../images/people/sun.jpg"
import Jason from "../images/people/jason.jpg"
import Riley from "../images/people/riley.png"
import Brandon from "../images/people/brandon.png"
import Lindy from "../images/people/lindy.png"
import Abril from "../images/people/abril.png"


const Board = () => {
    
    return (<div> <NavBar />

        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center mt-8 text-sky-600 text-5xl font-bold"> <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}> Meet Our Board </span> </h1>

            <div> {/*Co-Presidents */}
                <p className=" mt-8 text-center font-bold text-3xl">  Executive Board  </p>  
                <div className="mt-12 grid lg:grid-cols-2 md: grid-cols-1 sm:grid-cols-1 gap-48 gap-y-8" alt="executive">
                    <PersonCard ImageUrl={Bridget} Name="Bridget Vause" Position="Co-president" />
                    <PersonCard ImageUrl={Sun} Name="Sun Ho-Hwang" Position="Co-president" />
                </div>
            </div>

            <div>
                <p className="mt-8 text-center font-bold text-3xl">  Officers </p>
                {/*Co-Presidents */}
                <div className="mt-12 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-16 md:gap-x-12 sm:gap-x-4 gap-y-12 " alt="officers">
                    <PersonCard ImageUrl={Jason} Name="Jason Ni" Position="Treasurer & Co-logistics Coordinator" />
                    <PersonCard ImageUrl={Riley} Name="Riley Weiss" Position="Social & Recruitment Co-chair" />
                    <PersonCard ImageUrl={Brandon} Name="Brandon Garfinkel" Position="Social & Recruitment Co-chair" />
                    <PersonCard ImageUrl={Lindy} Name="Lindy Nguyen" Position="Social Media Co-chair" />
                    <PersonCard ImageUrl={Abril} Name="Abril Aguilar" Position="Social Media Co-chair" />
                </div>
            </div>




        <Footer/>
        </div> </div>)
}

export default Board