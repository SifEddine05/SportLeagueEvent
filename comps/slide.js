import { useState } from "react";
const Slide = () => {
    const [j,setj]=useState(1);
    

    const [style1,setstyle1]=useState('rounded-full w-[20%] p-[2%] inline-block ')
    const [style2,setstyle2]=useState('rounded-full w-[30%] p-[2%] inline-block')
    const [style3,setstyle3]=useState('rounded-full w-[20%] p-[2%] inline-block')
    const stl1='rounded-full w-[20%] transform translate-x-[290%] duration-700 p-[2%] inline-block'
    const stl2='rounded-full w-[20%] transform translate-x-[-110%] duration-700 p-[2%] inline-block'
    const stl3='rounded-full w-[30%] transform translate-x-[-80%] duration-700 p-[2%] inline-block'
const handleClick1 =()=>{

    if(j==1 )
    {
        setj(2);
        setstyle1('rounded-full w-[20%] transform translate-x-[290%] duration-700 p-[2%] inline-block')
        setstyle2('rounded-full w-[20%] transform translate-x-[-110%] duration-700 p-[2%] inline-block')
        setstyle3('rounded-full w-[30%] transform translate-x-[-80%] duration-700 p-[2%] inline-block')
    }else
    {   if(j==2)
        {
            setj(3)
           setstyle2(' z-0 rounded-full w-[20%] transform translate-x-[110%] duration-700 p-[2%] inline-block')
            setstyle3(' z-10 rounded-full  w-[20%] transform translate-x-[-290%] duration-700 p-[2%] inline-block')
            setstyle1('z-20 rounded-full  w-[30%] transform translate-x-[80%] duration-700 p-[2%] inline-block')

        } else
        {
            setj(1)
            setstyle1(' z-10 rounded-full w-[20%] transform translate-x-[-8%] duration-700 p-[2%] inline-block')
            setstyle2('z-30 rounded-full w-[30%] transform translate-x-[-6%] duration-700 p-[2%] inline-block')
            setstyle3('z-0 rounded-full w-[20%] transform translate-x-[-10%] duration-700 p-[2%] inline-block')
        }
    }
    
}

const handleClick2 =()=>{
    if(j==1 )
    {
        setj(3);
        setstyle2('z-20  rounded-full w-[20%] transform translate-x-[110%] duration-700 p-[2%] inline-block')
        setstyle3('z-10 rounded-full  w-[20%] transform translate-x-[-290%] duration-700 p-[2%] inline-block')
        setstyle1('z-20 rounded-full  w-[30%] transform translate-x-[80%] duration-700 p-[2%] inline-block')
       
        
    }else
    {   if(j==2 )
        {
        setj(1)
        setstyle2('z-20 rounded-full w-[30%] transform translate-x-[-6%] duration-700 p-[2%] inline-block')
        setstyle3('z-20 rounded-full w-[20%] transform translate-x-[-10%] duration-700 p-[2%] inline-block')
        setstyle1('z-10 rounded-full w-[20%] transform translate-x-[-8%] duration-700 p-[2%] inline-block')

        } else
        {
        setj(2)
        setstyle1('z-10 rounded-full w-[20%] transform translate-x-[290%] duration-700 p-[2%] inline-block')
        setstyle2('z-0 rounded-full w-[20%] transform translate-x-[-110%] duration-700 p-[2%] inline-block')
        setstyle3('z-10 rounded-full w-[30%] transform translate-x-[-80%] duration-700 p-[2%] inline-block')
        
            
            
        }
    }
   
}
    return (
    <div id = "sponsorssec" className="items-center flex justify-around grow w-[65%] mx-auto">

            <button className="w-[5%] inline-block order-first" onClick={handleClick1}><img src="/slider.svg" alt="arrow" className="w-full" /></button>
            <div className={style1}>
                <a href="https://www.decathlon.com.dz/" target="_blank">
                     <img src="/decathlone.png" alt="decathlone" className="rounded-full w-[100%] " />
                </a>
            </div>
            <div className={style2} >
                <a href="https://www.mobilis.dz/" target="_blank">
                    <img src="/mobilis.png" alt="mobilis" className="rounded-full w-[100%] " />
                </a>
            </div> 
            <div className={style3}>
                <a href="https://www.faderco.dz/fr/" target="_blank">
                    <img src="/faderco.png" alt="fadreco" className="rounded-full w-[100%]" />
                </a>
            </div>
            <button className="w-[5%] inline-block order-last" onClick={handleClick2}><img src="/slider1.svg" alt="arrow1" className="w-full"  /></button>

    </div>  );

}
 
export default Slide;