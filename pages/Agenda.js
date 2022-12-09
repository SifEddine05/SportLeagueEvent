import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import AgEv from "../comps/AgEv";

export default function App() {
    var menu = ['Day 1', 'Day 2', 'Day 3'];

    let h = "hidden"
    let nh = ""

    // const agendaHac = [
    //     {time1: "07:00 - 08:00", title1: "Breakfast", description: "machine learning",
    //     time2: "08:00 - 09:00", title2: "Conference", description: "machine learning",
    //     time3: "09:00 - 09:30", title3: "Fun activities", description: "machine learning",
    //     time4: "09:30 - 10:30", title4: "hacking", description: "machine learning",
    //     time5: "10:30 - 11:30", title5: "mentoring review", description: "machine learning",
    //     time6: "11:30 - 12:30", title6: "lunch break", description: "machine learning",
    //     time7: "12:30 - 15:00", title7: "hacking", description: "machine learning",
    //     time8: "15:00 - 15:30", title8: "coffee break", description: "machine learning",
    //     time9: "15:30 - 16:30", title9: "conference", description: "machine learning",
    //     time10: "16:30 - 19:30", title10: "plan", description: "machine learning",
    //     time11: "19:30 - 20:30", title11: "hacking", description: "machine learning",
    //     time12: "20:00 - 21:00", title12: "dinner break", description: "machine learning",
    //     time13: "21:00 - 23:00", title13: "hacking", description: "machine learning",
    //     time14: "02:00 - 07:00", title14: "pause", description: "machine learning",
        
        
    //   },
    //     {time1: "07:00 - 08:00", title1: "Breakfast", description: "machine learning",
    //     time2: "08:00 - 09:00", title2: "Conference", description: "machine learning",
    //     time3: "09:00 - 09:30", title3: "Fun activities", description: "machine learning",
    //     time4: "09:30 - 10:30", title4: "hacking", description: "machine learning",
    //     time5: "10:30 - 11:30", title5: "mentoring review", description: "machine learning",
    //     time6: "11:30 - 12:30", title6: "lunch break", description: "machine learning",
    //     time7: "12:30 - 15:00", title7: "hacking", description: "machine learning",
    //     time8: "15:00 - 15:30", title8: "coffee break", description: "machine learning",
    //     time9: "15:30 - 16:30", title9: "conference", description: "machine learning",
    //     time10: "16:30 - 19:30", title10: "plan", description: "machine learning",
    //     time11: "19:30 - 20:30", title11: "hacking", description: "machine learning",
    //     time12: "20:00 - 21:00", title12: "dinner break", description: "machine learning", hid:"hidden",
    //     time13: "21:00 - 23:00", title13: "hacking", description: "machine learning",
    //     time14: "02:00 - 07:00", title14: "pause", description: "machine learning", },

        
    //     {time: "6:00 PM - 7:00 PM", title: "machine learning", description: "machine learning" },
    // ]

        const day1 = [
        {time: "09:00 - 08:00", title: "Check in", description: "machine learning"},
        {time: "10:00 - 11:00", title: "Breakfast", description: "machine learning"},
        {time: "12:00 - 10:30", title: "Opening ceremony", description: "machine learning"},
        {time: "13:00 - 11:30", title: "Lunch break", description: "machine learning"},
        {time: "13:30 - 12:30", title: "hacking", description: "machine learning"},
        {time: "13:30 - 15:00", title: "conference", description: "machine learning"},
        {time: "14:00 - 15:30", title: "snack", description: "machine learning"},
        {time: "14:30 - 16:30", title: "fun activities", description: "machine learning"},
        {time: "14:30 - 19:30", title: "hacking", description: "machine learning"},
        {time: "15:30 - 20:30", title: "dinner break", description: "machine learning"},
        {time: "16:00 - 21:00", title: "hacking", description: "machine learning"},
        {time: "18:00 - 23:00", title: "tea break", description: "machine learning"},
        {time: "19:00 - 07:00", title: "pause", description: "machine learning"}
        ]
        const day2 = [
          {time: "07:00 - 08:00", title: "Breakfast", description: "machine learning"},
          {time: "09:00 - 09:30", title: "Fun activities", description: "machine learning"},
          {time: "09:30 - 10:30", title: "hacking", description: "machine learning"},
          {time: "10:30 - 11:30", title: "mentoring review", description: "machine learning"},
          {time: "11:30 - 12:30", title: "lunch break", description: "machine learning"},
          {time: "12:30 - 15:00", title: "hacking", description: "machine learning"},
          {time: "15:00 - 15:30", title: "coffee break", description: "machine learning"},
          {time: "15:30 - 16:30", title: "conference", description: "machine learning"},
          {time: "16:30 - 19:30", title: "plan", description: "machine learning"},
          {time: "19:30 - 20:30", title: "hacking", description: "machine learning"},
          {time: "20:00 - 21:00", title: "dinner break", description: "machine learning"},
          {time: "21:00 - 23:00", title: "hacking", description: "machine learning"},
          {time: "23:00 - 07:00", title: "pause", description: "machine learning"}
          ]


          const day3 = [
            {time: "07:00 - 08:00", title: "Breakfast", description: "machine learning"},
            {time: "08:00 - 09:00", title: "Conference", description: "machine learning"},
            {time: "09:00 - 11:00", title: "Working on progress and preparing the presentation", description: "machine learning"},
            {time: "11:00 - 12:00", title: "lunch break", description: "machine learning"},
            {time: "12:00 - 13:30", title: "presentation part1", description: "machine learning"},
            {time: "13:30 - 15:15", title: "presentation part2", description: "machine learning"},
            {time: "15:30 - 16:30", title: "deliberation & result announcement", description: "machine learning"},
            {time: "16:30 - 17:30", title: "closing ceremony + certificates & awards", description: "machine learning"},
            ]
            
          
        

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + "</span>";
    },
  };

  return (
    <div  id ="agendasec" className="w-screen bg-[#EFF7FB] pt-20">
      <h3  className="lg:text-[40px] md:text-[31px] sm:text-[24px] text-[20px] text-center text-[#FFC600] font-bold">Agenda</h3>

          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* {agendaHac.map((ag) => <SwiperSlide ><div className="py-20">
                <AgEv time = {ag.time1} title = {ag.title1} />
                <AgEv time = {ag.time2} title = {ag.title2} />
                <AgEv time = {ag.time3} title = {ag.title3} />
                <AgEv time = {ag.time4} title = {ag.title4} />
                <AgEv time = {ag.time5} title = {ag.title5} />
                <AgEv time = {ag.time6} title = {ag.title6} />
                <AgEv time = {ag.time7} title = {ag.title7} />
                <AgEv time = {ag.time8} title = {ag.title8} />
                <AgEv time = {ag.time9} title = {ag.title9} />
                <AgEv time = {ag.time10} title = {ag.title10} />
                <AgEv time = {ag.time11} title = {ag.title11} />
                <AgEv hid={ag.hid} time = {ag.time12} title = {ag.title12}/>   
            </div></SwiperSlide>)} */}

            <SwiperSlide ><div className="py-24">{day1.map((d)=><AgEv time = {d.time} title = {d.title} />)}</div></SwiperSlide>
            <SwiperSlide ><div className="py-24">{day2.map((d)=><AgEv time = {d.time} title = {d.title} />)}</div></SwiperSlide>
            <SwiperSlide ><div className="py-24">{day3.map((d)=><AgEv time = {d.time} title = {d.title} />)}</div></SwiperSlide>


          </Swiper>

       
    </div>
  );
}
