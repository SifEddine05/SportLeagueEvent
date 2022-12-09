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

    const agenda = [
        {time: "6:00 PM - 7:00 PM", title: "machine learning", description: "machine learning" },
        {time: "6:00 PM - 7:00 PM", title: "machine learning", description: "machine learning"},
        {time: "6:00 PM - 7:00 PM", title: "machine learning", description: "machine learning" },
    ]

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + "</span>";
    },
  };

  return (
    <div id ="agendasec" className="w-screen bg-[#EFF7FB]">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {agenda.map((ag) => <SwiperSlide ><div className="py-24"><AgEv time = {ag.time} title = {ag.title} description = {ag.description}/> <AgEv time = {ag.time} title = {ag.title} description = {ag.description}/> <AgEv time = {ag.time} title = {ag.title} description = {ag.description}/> <AgEv time = {ag.time} title = {ag.title} description = {ag.description}/></div></SwiperSlide>)}

      </Swiper>
    </div>
  );
}
