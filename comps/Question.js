
import react, { useState } from "react";

const Question = ({qustion , answer}) => {
    const [click,setClick]=useState(false)
    const handleClick = ()=>{
            if(click) setClick(false)
            else setClick(true)
    }
    return ( 
    <div className="mb-[5%]">
        <div onClick={handleClick} className="hover:cursor-pointer shadow-lg flex justify-between items-center bg-[#1E96FC] bg-opacity-25 p-2 rounded-2xl">
                <h3 className="lg:text-[22px] md:text-[18px] ml-[1%] w-[65%] sm:text-[14px] text-[10px] font-semibold">{qustion}</h3>
                <button  onClick={handleClick} className="flex justify-end w-[35%]" >
                {!click && <img src="down-arrow.png" alt="arrdwn"  className="w-[10%]"/> }
                    {click && <img src="up-arrow.png" alt="arrdwn"  className="w-[10%]"/> }
                </button>  
        </div>
        {click && <div className=" shadow-inner md:p-4 p-2 rounded-2xl bg-[#1E96FC] bg-opacity-10 mt-4">
                <p className="lg:text-[17px] md:text-[14px] sm:text-[12px] text-[10px]"> {answer }</p>
        </div> }
    </div> );
}
 
export default Question;