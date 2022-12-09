import React from 'react';
import Image
 from 'next/image';
 import Link from 'next/link';
 import {  useState } from 'react';
 //import menu from '../assets/menu.svg' ;



function Nav(props) {
    const [style , setStyle] = useState(false) ; 
    
const handlClick =()=>{

    if(style===false)
    {
        setStyle(true);
    }else{
        setStyle(false)   ; 
    }
}
    return (
    <div>
        <div className=" w-screen flex flex-row justify-between pb-2 lg:pb-3 bg-white lg:bg-red shadow-md">
            <Image src ="/logo.svg" width={50} height={50} className="ml-8 pt-2"/>
            <div className='sm:inline hidden'>
                <div className="flex   flex-row gap-1 md:gap-3 sm:gap-2 lg:gap-5 pt-2 lg:mr-12 md:mr-9 sm:mr-7 mr-5  mt-3">
                <Link href="/">
                    <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] lg:text-lg">Home</div>
                    </Link>
                    <Link href="#aboutsec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] lg:text-lg">About</div>
                    </Link>
                    <Link href="#speakerssec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] lg:text-lg">Speakers</div>
                    </Link>
                    <Link href="#agendasec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] lg:text-lg">Agenda</div>
                    </Link>
                    <Link href="#sponsorssec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] lg:text-lg">Sponsors</div>
                    </Link>
                    <Link href="#faqsec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] lg:text-lg">FAQ</div>
                    </Link>
                    <Link href="#footer">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] lg:text-lg">Contact Us</div>
                    </Link>
                    <Link href="error">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold lg:ml-12 md:ml-9 sm:ml-6 ml-3 border-2 hover:font-bold hover:bg-[#1E96FC] hover:text-white border-slate-500 rounded-2xl md:text-md sm:text-sm text-[8px] lg:text-lg">Sign Up</div>
                    </Link>
                </div>

            </div>
            <div className=' flex justify-start sm:hidden'>
            {style&& <div className='sm:hidden inline'>
                <div className="flex   flex-row justify-center items-center gap-1 md:gap-3 sm:gap-2 lg:gap-5 pt-2 lg:mr-12 md:mr-9 sm:mr-7 mr-5  mt-3">
                <Link href="/">
                    <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] text-center lg:text-lg">Home</div>
                    </Link>
                    <Link href="#aboutsec">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] text-center lg:text-lg">About</div>
                    </Link>
                    <Link href="#speakerssec">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] text-center lg:text-lg">Speakers</div>
                    </Link>
                    <Link href="#agendasec">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] text-center lg:text-lg">Agenda</div>
                    </Link>
                    <Link href="#sponsorssec">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] text-centerlg:text-lg">Sponsors</div>
                    </Link>
                    <Link href="#faqsec">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] text-center lg:text-lg">FAQ</div>
                    </Link>
                    <Link href="#footer">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl md:text-md sm:text-sm text-[9px] text-centerlg:text-lg">Contact Us</div>
                    </Link>
                    <Link href="errr">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold lg:ml-12 md:ml-9 sm:ml-6 ml-1 border-2 hover:font-bold hover:bg-[#1E96FC] hover:text-white border-slate-500 rounded-2xl md:text-md sm:text-sm text-[9px] text-center lg:text-lg">Sign Up</div>
                    </Link>
                    
                </div>
            </div> }
            <button className=' ml-1   sm:hidden inline ' onClick={handlClick}  ><img src="/Menu1.png" alt="menu icon "  className='w-[25px] mr-4 pt-2' /></button>

                
            </div>
        </div>
       
    </div>
               
    );
}

export default Nav;