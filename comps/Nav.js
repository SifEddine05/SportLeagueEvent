import React from 'react';
import Image
 from 'next/image';
function Nav(props) {
    return (
        <div className=" w-screen flex flex-row justify-between mt-3 pb-3">
            <Image src ="/logo.svg" width={50} height={50} className="ml-8"/>
            <div className="flex flex-row gap-6 mr-12 mt-3">
                <div className="px-3 py-1 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl">Home</div>
                <div className="px-3 py-1 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl">About</div>
                <div className="px-3 py-1 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl">Sponsors</div>
                <div className="px-3 py-1 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl">Speakers</div>
                <div className="px-3 py-1 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl">FAQ</div>
                <div className="px-3 py-1 font-semibold hover:border-2 hover:font-bold border-slate-500 hover:rounded-2xl">Contact Us</div>
                <div className="px-3 py-1 font-semibold ml-12 border-2 hover:font-bold hover:bg-[#1E96FC] hover:text-white border-slate-500 rounded-2xl">Sign Up</div>
            </div>
                
        </div>
    );
}

export default Nav;