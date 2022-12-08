import React from 'react';


function AgEv(props) {
    return (
        <div className='w-[500px] lg:w-[700px] border-4 border-[#1E96FC] bg-white rounded-2xl flex flex-col m-10'>
            <div className="flex flex-row py-[10px] px-[30px]">
                <div className="w-[30px] h-[30px]">              
                   <img src="/time.png" alt="" className=' '/>
                </div>
                <div className="my-auto pl-4 text-[17px]">{props.time}</div>
            </div>
            <div className="px-[35px] font-bold py-1">{props.title}</div>
            <div className="px-[35px] pb-5">{props.description}</div>
        </div>
    );
}

export default AgEv;