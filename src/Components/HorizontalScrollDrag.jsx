import React, { useRef, useState } from "react";

import p_1 from "../assets/p_1.png";
import p_2 from "../assets/p_2.png";
import p_3 from "../assets/p_3.png";
import p_4 from "../assets/p_4.png";
import p_5 from "../assets/p_5.png";
import p_6 from "../assets/p_6.png";
import p_7 from "../assets/p_7.png";

const HorizontalScrollDrag = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const dataList = [
    { image: p_1, title: 'Plantation and Sales' },
    { image: p_2, title: 'Miyawaki Forest Development' },
    { image: p_3, title: 'Custom Garden Solutions' },
    { image: p_4, title: 'Garden Maintenance' },
    { image: p_5, title: 'Planning and Consulting' },
    { image: p_6, title: 'Educational Workshops & Awareness:' },
    { image: p_7, title: 'Vatika Creations' }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="h-[198px] flex items-center gap-[40px] w-max">
        {dataList.map((eachObject, index) => (
          <div
            key={index}
            className="p-[20px] bg-[#FFF] rounded-xl flex-shrink-0 flex flex-col gap-[16px] items-center justify-center w-[250px] h-[150px] hover:border hover:border-b-[#55833D] hover:border-solid hover:border-b-8"
          >
            <img src={eachObject.image} alt="icon" className="w-[50px] h-[50px]" />
            <h1 className="text-lg text-center">{eachObject.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollDrag;
