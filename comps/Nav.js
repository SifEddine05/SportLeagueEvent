import React from 'react';
import Image
 from 'next/image';
 import Link from 'next/link';

function Nav(props) {
    return (
        <div className=" w-screen flex flex-row justify-between pb-2 lg:pb-3 bg-white shadow-md">
            <Image src ="/logo.svg" width={50} height={50} className="ml-8"/>
            <div className="flex flex-row gap-2 lg:gap-6 mr-12 mt-3">
               <Link href="/">
                  <div className="cursor-pointer px-3 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl text-sm lg:text-lg">Home</div>
                </Link>
                <Link href="#aboutsec">
                    <div className="cursor-pointer px-3 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl text-sm lg:text-lg">About</div>
                </Link>
                <Link href="#sponsorssec">
                    <div className="cursor-pointer px-3 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl text-sm lg:text-lg">Sponsors</div>
                </Link>
                <Link href="#speakerssec">
                    <div className="cursor-pointer px-3 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl text-sm lg:text-lg">Speakers</div>
                </Link>
                <Link href="#faqsec">
                    <div className="cursor-pointer px-3 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl text-sm lg:text-lg">FAQ</div>
                </Link>
                <Link href="#footer">
                    <div className="cursor-pointer px-3 lg:py-1 py-2 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl text-sm lg:text-lg">Contact Us</div>
                </Link>
                
                
                <div className="cursor-pointer px-3 lg:py-1 py-2 font-semibold ml-12 border-2 hover:font-bold hover:bg-[#1E96FC] hover:text-white border-slate-500 rounded-2xl text-sm lg:text-lg">Sign Up</div>
            </div>
                
        </div>
    );
}

export default Nav;