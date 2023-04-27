/*import React from 'react';
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
            <Image src ="/logo.svg" width={50} height={50} className="lg:ml-8 md:ml-6 sm:ml-4 ml-2 pt-2"/>
            <div className='sm:inline hidden'>
                <div className="flex   flex-row gap-1 md:gap-3 sm:gap-2 lg:gap-5 pt-2 lg:mr-12 md:mr-9 sm:mr-7 mr-5  mt-3">
                <Link href="/">
                    <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg md:text-[12px] sm:text-sm text-[9px] lg:text-lg">Home</div>
                    </Link>
                    <Link href="#aboutsec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg md:text-[12px] sm:text-sm text-[9px] lg:text-lg">About</div>
                    </Link>
                    <Link href="#speakerssec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg md:text-[12px] sm:text-sm text-[9px] lg:text-lg">Speakers</div>
                    </Link>
                    <Link href="#agendasec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg md:text-[12px] sm:text-sm text-[9px] lg:text-lg">Agenda</div>
                    </Link>
                    <Link href="#sponsorssec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg md:text-[12px] sm:text-sm text-[9px] lg:text-lg">Sponsors</div>
                    </Link>
                    <Link href="#faqsec">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg md:text-[12px] sm:text-sm text-[9px] lg:text-lg">FAQ</div>
                    </Link>
                    <Link href="#footer">
                        <div className="cursor-pointer md:px-3 px-2 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg md:text-[12px] sm:text-sm text-[9px] lg:text-lg">Contact Us</div>
                    </Link>
                    <Link href="error">
                        <div className="cursor-pointer md:px-3 px-1 lg:py-1 py-2 font-semibold lg:ml-12 md:ml-9 sm:ml-6 ml-3 border-2 hover:font-bold hover:bg-[#1E96FC] hover:text-white border-slate-500 rounded-2lg  md:text-[12px] sm:text-sm text-[8px] lg:text-lg">Sign Up</div>
                    </Link>
                </div>

            </div>
            <div className=' flex justify-start sm:hidden'>
            {style&& <div className='sm:hidden inline'>
                <div className="flex   flex-row justify-center items-center gap-1 md:gap-3 sm:gap-2  lg:gap-5 pt-2 lg:mr-12 md:mr-9 sm:mr-7 mr-5  mt-3">
                <Link href="/">
                    <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-center lg:text-lg">Home</div>
                    </Link>
                    <Link href="#aboutsec">
                        <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-center lg:text-lg">About</div>
                    </Link>
                    <Link href="#speakerssec">
                        <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-center lg:text-lg">Speakers</div>
                    </Link>
                    <Link href="#agendasec">
                        <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-center lg:text-lg">Agenda</div>
                    </Link>
                    <Link href="#sponsorssec">
                        <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-centerlg:text-lg">Sponsors</div>
                    </Link>
                    <Link href="#faqsec">
                        <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-center lg:text-lg">FAQ</div>
                    </Link>
                    <Link href="#footer">
                        <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-centerlg:text-lg">Contact Us</div>
                    </Link>
                    <Link href="errr">
                        <div className="cursor-pointer md:px-3 sm:px-1 pr-1 lg:py-1 py-2 font-semibold lg:ml-12 md:ml-9 sm:ml-6 ml-1 border-2 hover:font-bold hover:bg-[#1E96FC] hover:text-white border-slate-500 rounded-2lg  md:text-[12px] sm:text-sm text-[9px] text-center lg:text-lg">Sign Up</div>
                    </Link>
                    
                </div>
            </div> }
            <button className=' ml-1 sm:hidden inline ' onClick={handlClick}  ><img src="/Menu1.png" alt="menu icon "  className='w-[25px] sm:mr-4 mr-2 pt-2' /></button>

                
            </div>
        </div>
       
    </div>
               
    );
}

export default Nav;

*/
import LogoEvent from "../public/logo.svg";
import { useState } from "react";
import menu from "../public/Menu1.png";
import cancel from "../public/Menu1.png";

const navLinks = [
  { name: "About", link: "#aboutsec" },
  { name: "Speakers", link: "#speakerssec" },
  { name: "Agenda", link: "#agendasec" },
  { name: "Sponsors", link: "#sponsorssec" },
  {name:"Faq",link:"#faqsec"},
  { name: "About us", link: "#footer" },
  { name: "Sign Up", link: "errr" },

  /* TO DO : unhide sponsors when we get one */
  // { name: "Sponsors", link: "#sponsors" },
];

const Nav = () => {


  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(false);
  };

  return (
    <div className="w-full fixed top-0 h-[80px] bg-dark-green z-50 shadow-lg  border-b-2 ">
      <div className="bg-dark-green w-full px-8 md:px-16 py-4 flex justify-between items-center  ">
        <a href="#">
          <img
            src="/logo.svg"
            alt="Logo Event"
            className="w-[60px]  "
          />
        </a>
        <div className="lg:flex justify-center items-center  lg:gap-14 md:gap-10 sm:gap-6 text-[18px] font-semibold hidden text-black">
          {navLinks.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className="hover:text-blue-800"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* TO DO : unhide join us btn */}

        {!menuActive && (
          <button
            className="w-[30px] lg:hidden block"
            onClick={() => setMenuActive(true)}
          >
            <img src="/Menu1.png" alt="menu" className="w-full" />
          </button>
        )}
        {menuActive && (
          <button
            className="w-[30px] lg:hidden block"
            onClick={() => setMenuActive(false)}
          >
            <img src="/Menu1.png" alt="menu" className="w-full" />
          </button>
        )}
      </div>
      <div
        className={`bg-[#1E96FC] lg:hidden fixed z-5 transition-transform top-[60px] -right-[100vw] ${
          menuActive && "-translate-x-[100vw]"
        } w-[100%] h-fit p-6 flex flex-col gap-6 text-lg text-primary capitalize lg:static lg:flex-row lg:h-fit lg:w-fit lg:items-center lg:text-base lg:gap-12`}
      >
        <div className="h-fit py-6 flex flex-col justify-start items-center gap-4 font-semibold  text-black">
          {navLinks.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className="hover:text-blue-800"
              onClick={handleClick}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;