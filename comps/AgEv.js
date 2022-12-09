import React from 'react';


function AgEv({hid, time, title, description}) {
    return (
        <div className={hid}>
            <div className='w-[320px] md:w-[500px] lg:w-[700px] border-4 border-[#1E96FC] bg-white rounded-2xl shadow-lg flex flex-col m-6'>
                <div className="flex flex-row py-[10px] px-[30px]">
                    <div className="w-[30px] h-[30px]">              
                    <img src="/time.png" alt="" className=' '/>
                    </div>
                    <div className="my-auto pl-4 text-[17px]">{time}</div>
                </div>
                <div className="px-[35px] font-bold text-[16px] lg:text-[20px]">{title}</div>
                <div className="px-[35px] pb-2">{description}</div>
          </div>
        </div>
        
    );
}

export default AgEv;