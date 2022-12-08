import Image from "next/image";
const About = () => {
    return ( 

    <div id="aboutsec" className="flex flex-row justify-center py-[15%] bg-[#EFF7FB] items-center w-screen">
        <div className="w-[70%] lg:w-[50%] lg:pr-4 md:pr-3 sm:pr-2 pr-1">
            <h3 className="lg:text-[30px] md:text-[25px] sm:text-[20px] text-[#FFC600] mb-8 font-bold">About</h3>
            <div className="flex flex-row">
                <p className="lg:text-[16px] text-[14px] text-[#1E96FC] text-justify font-semibold">TECH LEAGUE is a collaborative event between CSE and the Ministry of Youth and Sports, that will mainly focus on the relationship between sports and new technologies.This event consists of a conferences about new technologies applied in the world of sports, and a 2 day hackathon about a major problem related to this domain.Winners will be provided with the necessary materiels so they can develop and work on their solution, with the possibility of being implemented in the Ministy's upcoming sporting events!</p>
                <Image src="/logo.svg" width={200} height={200} className="ml-[5%]" />

            </div>
        </div>
        
    </div> )
}
 
export default About;