import { useState } from "react";


const Speaker = () => {
  
    return ( 
        <label className="h-fit overflow-hidden swap swap-rotate group">
            <input type="checkbox" />
             <div  data-tip="click to see detail" className="tooltip swap-off fill-current shadow-lg items-center rounded-lg mx-auto  groupe-hover:p-0 hover:cursor-pointer border-2 lg:w-[400px] w-[300px] border-cyan-800 p-2 self-center">
                <div className="w-full">
                     <img src="bghdadi.jpeg" alt="speaker" className="rounded-lg "  />
                </div>
                <h3 className="lg:text-[15px] md:text-[12px] sm:text-[10px] text-[8px] font-medium text-center mt-1 text-cyan-800 ">Ryadh baghdadi</h3>
            </div> 
           <div  className="swap-on fill-current flex focus:bg-black justify-center items-center hover:p-0">
            <div className="mask mask-circle w-[200px] px-4">
                <img src="bghdadi.jpeg" alt="speaker" className= ""  />
            </div>
                
                <div className="rounded-xl bg-[#1E96FC] bg-opacity-20 shadow-lg  ml-2 w-[45%]  ">
                    <h3 className="lg:text-[18px] md:text-[15px] mt-[6%]  sm:text-[13px] text-[10px] font-semibold text-center  text-cyan-800 ">Ryadh baghdadi</h3>
                    <p className="px-[3%] lg:text-[15px] md:text-[12px] mb-[16%] text-center mt-[5%] sm:text-[10px] text-[8px]">
                      Description lksflklqskfl kdsflsdlkf ldsqkflk dskfkjdfk dsflsdkfkdf ds f sd f sd f s d f  
                   </p>
                </div>
            </div> 
        </label>
     );
}
 
export default Speaker;