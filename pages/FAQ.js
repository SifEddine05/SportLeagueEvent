import react, { useState } from "react";
import { icons } from "react-icons";
import Question from "../comps/Question";

const questions =[
        {
            qustion : "What is a hackathon?" , 
            answer : "Hackathons are events that gather Tech enthusiasts, creativity & technology to bring innovative projects to life! Attendees work in groups & are provided with all necessities in order to build their projects.            "
        },
        {
            qustion : "What will I gain from participating in a hackathon??" , 
            answer : "Hackathons are events that gather Tech enthusiasts, creativity & technology to bring innovative projects to life! Attendees work in groups & are provided with all necessities in order to build their projects.            "
        },
        {
            qustion : "What will I gain from participating in a hackathon??" , 
            answer : "Hackathons are events that gather Tech enthusiasts, creativity & technology to bring innovative projects to life! Attendees work in groups & are provided with all necessities in order to build their projects.            "
        },
        {
            qustion : "What will I gain from participating in a hackathon??" , 
            answer : "Hackathons are events that gather Tech enthusiasts, creativity & technology to bring innovative projects to life! Attendees work in groups & are provided with all necessities in order to build their projects.            "
        },
        {
            qustion : "What will I gain from participating in a hackathon??" , 
            answer : "Hackathons are events that gather Tech enthusiasts, creativity & technology to bring innovative projects to life! Attendees work in groups & are provided with all necessities in order to build their projects.            "
        },
        {
            qustion : "What will I gain from participating in a hackathon??" , 
            answer : "Hackathons are events that gather Tech enthusiasts, creativity & technology to bring innovative projects to life! Attendees work in groups & are provided with all necessities in order to build their projects.            "
        },

]
const Faq = () => {
    
    return (
        <div className="bg-[#EFF7FB] py-[10%] ">
            <div className="  mx-auto  ">
            <h3 className="lg:text-[40px] md:text-[31px] sm:text-[24px] text-[20px] text-center text-[#FFC600] mb-[5%] font-bold">FAQ</h3>

                <div className="w-[50%] bg-[#EFF7FB] mx-auto  ">
                    {questions.map((elem)=>{
                        return(<Question qustion={elem.qustion} answer={elem.answer} />)
                    })}
                    
                </div>
            </div> 
        </div>
    
    
     );
}

export default Faq