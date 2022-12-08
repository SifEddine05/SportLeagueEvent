import React from 'react';
import Nav from '../comps/Nav';

function Hm(props) {
    return (

        <div className="w-screen lg:h-screen flex flex-col items-center">
            <Nav />
            <div className="flex flex-col w-full lg:h-full justify-center items-center bg-red-00 bg-[#EFF7FB] py-[5%] lg:py-0">
              <div className="rounded-tl-[48px] rounded-tr-[48px] rounded-br-[200px] lg:rounded-br-[300px] rounded-bl-[48px] w-[80%] lg:h-[65%] h-[300px] bg-[#1E96FC] flex flex-col overflow-auto">
                    <div className="font-bold text-white text-[3vw] italic ml-[10%] mt-[2.5%]">Develop your skills </div>
                        <div className="font-bold text-white text-[3vw] italic ml-[10%]">with Tech LEAGUE </div> 
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
                                <div className="bg-[#FFB703] w-[60%] py-[1%] rounded-2xl text-center text-[1.5vw] font-semibold text-white mt-[5%] hover:bg-white hover:text-[#135286]">Get started</div>
                            </div>
                            <div className="w-[15%] h-[15%] mr-[10%]">
                                <img src="/cse.svg" alt="" />
                            </div>
                            {/* <Image src="/cse.svg" width={0} height={0} className="mr-[8%] w-[30%] h-[30%]"/> */}
                        </div>   
                </div>
           </div>
        </div>
    );
}

export default Hm;