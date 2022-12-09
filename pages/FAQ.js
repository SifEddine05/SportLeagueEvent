import react, { useState } from "react";
import { icons } from "react-icons";
import Question from "../comps/Question";

const questions =[
        {
            qustion : "Who are we?" , 
            answer : "CSE (Scientific Club of ESI) is a student club at the Higher National School of Computer Science in Algiers. It's made for students who are passionate about computers, high tech, robotics, design, and anything related to technology. The CSE has managed to gain its place nationally and internationally by organizing major Tech events. After organizing the first hackathon and one of the largest in Algeria, the club is considered as one of the biggest and most active clubs in the country."
        },
        {
            qustion : "What is TECH-LEAGUE ?" , 
            answer : "Tech-League is a collaboration between the Ministery of Youth and Sports and the CSE club, that highlights the relations between sports and new computer technologies. In the event, these will be conferences on new technologies applied in the sports world such as “var” technique, the off-game system, and their technical side process"
        },
        {
            qustion : "What will I gain from participating in TECH-LEAGUE ?" , 
            answer :"Participating in a Hackathon will help you improve both your soft & technical skills in a short period of time."
        },
        {
            qustion : "Who can apply?" , 
            answer : "You’re good to go if you’re enrolled in a high school, college, or university. (Minors are not eligible)."
        },
        {
            qustion : "Can we apply as a team?" , 
            answer : "You and your intended teammates should each apply separately, but there is a chance that you’ll receive an invitation while some of your teammates won’t."
        },
        {
            qustion : "What should I bring?" , 
            answer : "Bring your student ID and anything else you’d need for a productive and healthy weekend (laptop, charger, change of clothes, and so on). You won’t need food or drinks we’ve got you covered!"
        },

]
const Faq = () => {
    
    return (
        <div id= "faqsec" className="bg-[#EFF7FB] py-[10%] ">
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