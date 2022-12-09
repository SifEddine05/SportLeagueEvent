import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



import { Navigation } from "swiper";
import Speaker from "./speaker";

export default function Speakers() {


    const [Tab , setTab]=useState([
        {
            name : "Selma bekkouche",
            description: "Salma Bekkouche is a blogger on “Salma Share” and social media platforms. She graduated in Information Technology Engineering, from Ecole Nationale Supérieure d’Informatique (ESI). Salma started her career as a Data Management Engineer and then a Dispatcher at Schlumberger.",
            image:"/Selma.jpg"
        },
        {
            name : "Riyadh baghdadi",
            description: "Riyadh Baghdadi is an assistant professor in computer science at NYU Abu Dhabi and an affiliated researcher at MIT. He works on the intersection of compilers and applied machine learning.",
            image:"/Ryadh.jpg"
        },
        {
            name : "Mehdi Djoughi",
            description: "Digital Marketer & Data Scientist | Co-founder & Digital Project Manager of Spart & Agence19",
            image:"/Mehdi.jpeg"
        },
        {
            name : "Mourad bouache",
            description: "Mourad Bouache, He work at the Performance Engineering Group at Yahoo! Verizon ",
            image:"/Mourad.jpg"
        },
    ])
  return (
    <div id="speakerssec" className="bg-[#EFF7FB] py-[10%] ">
            <div className="lg:w-[900px] w-[600px] mx-auto bg-[#EFF7FB]">
            <h3 className="lg:text-[40px] md:text-[32px] sm:text-[24px] text-[20px] text-[#FFC600] lg:mb-7 md:mb-5 sm:mb-3 mb-[10%] font-bold text-center">Our Speakers </h3>
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
        {
            Tab.map((elem)=>{
                return(<SwiperSlide><Speaker name={elem.name} description={elem.description} image={elem.image}/></SwiperSlide>)
                    
                })
        }
            
        </Swiper>
            </div>
    </div>
   
  );
}


/*const Speakers = () => {
    return (
        <div className="bg-[#EFF7FB] h-screen w-screen">
            
        </div>
    );
}
 
export default Speakers;*/