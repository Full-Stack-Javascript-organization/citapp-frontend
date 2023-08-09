import React, { useState, useRef } from "react";
import { FaMapPin, FaCircle, FaClock } from "react-icons/fa";

export default function Card(props) {
  //   function handleMouseMove(event) {
  //     const card = cardRef.current;
  //     const { offsetWidth: width, offsetHeight: height } = card;
  //     const { clientX, clientY } = event;
  //     const x = clientX - card.offsetLeft - width / 2;
  //     const y = clientY - card.offsetTop - height / 2;
  //     var mult = 40;
  //     setXRotation((y / height) * mult);
  //     setYRotation((x / width) * mult);
  //   }
  //   function handleMouseEnter() {
  //     const img = imgRef.current;
  //     const title = titleRef.current;
  //     const sizesBox = sizesboxRef.current;
  //     const purchase = purchaseRef.current;
  //     const desc = descRef.current;
  //     title.style.transform = "translateZ(150px)";
  //     img.style.transform = "translateZ(100px) rotateZ(-45deg)";
  //     sizesBox.style.transform = "translateZ(100px)";
  //     purchase.style.transform = "translateZ(75px)";
  //     desc.style.transform = "translateZ(75px)";
  //   }
  //   function handleMouseLeave() {
  //     setXRotation(0);
  //     setYRotation(0);

  //     const img = imgRef.current;
  //     const title = titleRef.current;
  //     const sizesBox = sizesboxRef.current;
  //     const purchase = purchaseRef.current;
  //     title.style.transform = "translateZ(0px)";
  //     img.style.transform = "translateZ(0px) rotateZ(0deg)";
  //     sizesBox.style.transform = "translateZ(0px)";
  //     purchase.style.transform = "translateZ(0px)";
  //   }

  return (
    <div className="w-full h-[500px] text-[#EEEEEE]  p-5 flex-col rounded bg-[#393E46]">
      <img
        src={""}
        alt="Store"
        className="w-full h-[250px] rounded-md bg-gray-100"
      />
      <div className="flex mt-2 items-center gap-2 content-center">
        <FaCircle className=" flex-initial text-[#00DFA2] text-lg " />
        <h1 className="font-bold text-4xl text-[#F7E987]">{props.name}</h1>
      </div>

      <div className="flex mt-2 items-center gap-2">
        <FaMapPin className="text-[#00ADB5] flex-initial " />
        <p className=" ">123 Broadway, BC</p>
      </div>
      <div className="flex mt-2 items-center gap-2">
        <FaClock className="text-[#00ADB5]" />
        <p className="">9:00 am - 5:00pm</p>
      </div>
      <div className="flex justify-around">
        <button
          className="mt-2 px-5 py-3 text-xl font-bold bg-[#00ADB5] rounded"
          type="button"
        >
          Reserve
        </button>
      </div>
    </div>
  );
}
