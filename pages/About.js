import Image from "next/image";
const About = () => {
    return ( 
    <div className="flex justify-center bg-[#EFF7FB] items-center w-screen h-screen ">
        <div className="w-[40%] lg:pr-4 md:pr-3 sm:pr-2 pr-1">
            <h3 className="lg:text-[30px] md:text-[25px] sm:text-[20px] text-[13px]  text-[#FFC600] text-center mb-1 font-semibold">About</h3>
            <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] text-[9px] text-center text-[#1E96FC]">TECH LEAGUE is a collaborative event between CSE and the Ministry of Youth and Sports, that will mainly focus on the relationship between sports and new technologies.This event consists of a conferences about new technologies applied in the world of sports, and a 2 day hackathon about a major problem related to this domain.Winners will be provided with the necessary materiels so they can develop and work on their solution, with the possibility of being implemented in the Ministy's upcoming sporting events!</p>
        </div>
        <Image src="/logo 1.svg" width={100} height={100} className="w-[15%]" />
    </div> )
}
 
export default About;