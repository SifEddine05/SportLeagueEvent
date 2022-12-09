import React from 'react';
import Link from 'next/link';


function Hm(props) {
    return (

        <div className="w-screen flex flex-col items-center">
            <div className="flex flex-col justify-center items-center bg-red-00 w-full bg-[#EFF7FB] pt-32 md:pt-[18%] lg:pt-[10%] ">
              <div className="rounded-tl-[48px] rounded-tr-[48px] rounded-br-[200px] lg:rounded-br-[300px] rounded-bl-[48px] w-[80%] max-h-[600px] bg-[#1E96FC] flex flex-col overflow-auto md:block hidden">
                    <div className="font-bold text-white text-[3vw] italic w-[65%] ml-[10%] mt-[2.5%]">Explore , Compete and improve your skills with TECH-LEAGUE ! </div>
                        <div className="flex flex-row justify-between ">
                            <div className="flex flex-col gap-[10%] justify-center mt-[2%] w-[27%] ml-[15%] ">
                                <div className="flex flex-row">
                                    <div className="w-[15%] pr-[5%]">
                                          <img src="/ajenda.svg" alt="" />
                                    </div>
                                        {/* <Image src="/ajenda.svg" width={70} height={70} className="pr-[10%]"/> */}
                                    <div className="font-semibold text-white text-[1vw] my-auto">January 2nd, 3rd and 4th, 2022 </div> 
                                </div>  
                                <div className="flex flex-row">
                                     <div className="w-[15%] pr-[5%]">
                                          <img src="/position.svg" alt="" />
                                    </div>  
                                {/* <Image src="/position.svg" width={67} height={67} className="pr-[10%]"/> */}
                                    <div className="font-semibold text-white text-[1vw] my-auto"> Oued Smar, Algiers </div> 
                                </div>
                                <Link href="err">
                                     <div className="cursor-pointer bg-[#FFB703] w-[60%] py-[1%] rounded-2xl text-center text-[1.5vw] font-semibold text-white mt-[5%] hover:bg-white hover:text-[#135286]">Get started</div>
                                </Link>
                            </div>
                            <div className="w-[15%] h-[15%] mr-[10%] mb-10">
                                <img src="/cse.svg" alt="" />
                            </div>
                            {/* <Image src="/cse.svg" width={0} height={0} className="mr-[8%] w-[30%] h-[30%]"/> */}
                        </div>   
                </div>
                <div className="block md:hidden flex flex-col items-center">
                     <div className="font-black text-[32px] italic w-[75%] mt-[2.5%] text-[#1E96FC] text-center ">Explore , Compete and improve your skills with TECH-LEAGUE ! </div>
                     <div className="pt-10 font-bold">January 2nd, 3rd and 4th, 2022</div>
                     <div className="font-bold">Oued Smar, Algiers</div>
                     <div className="w-[50px] h-[50px] mt-10 mb-12 ">
                        <img src="/cseLight.svg" alt="" />
                    </div>
                    <Link href="err">
                         <div className="cursor-pointer bg-[#FFB703] w-[150px] py-2 rounded-md text-center text-[16px] font-semibold text-white mb-6 hover:bg-white hover:text-[#135286]">Get started</div>
                    </Link>
                </div>
           </div>
        </div>
    );
}

export default Hm;