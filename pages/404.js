import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Notfound(props) {
    
    const router = useRouter();
    const [count, setCount] = useState(15);


    useEffect(() => {
        setTimeout(() => {
            // router.push('/');
            setCount((count) => count - 1);
        }, 1000);
        if (count === 0) router.push('/');
    })

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-black">
            <h3 className="font-bold text-white">This page is not ready</h3>
            <h3 className="font-bold text-white">You will be redirected to the main page in {count} seconds</h3>
            <h3 className="py-7 text-sm text-white">with best regards / ESMS team 17 </h3>
            <div className="w-[5%] h-[5%]">
                                <img src="/cse.svg" alt="" />
            </div>

        </div>
    );
}

export default Notfound;