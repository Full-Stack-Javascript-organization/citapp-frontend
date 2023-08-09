import { React, useContext, useState, useRef } from "react";
import { FaMapPin, FaCircle, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import IndianFood from "../../assets/img/IndianFood.png";
import Dentist from "../../assets/img/Dentist.png";
import Escape from "../../assets/img/escape.png";
import starlight from "../../assets/img/starlight.png";
import lodge from "../../assets/img/lodge.png";

export default function Card(props) {
  let companyInfo = {
    companyName: props.company.companyName,
    companyID: props.company.companyID,
    address: props.company.address,
    availableTime: props.company.availableTime,
    img: props.company.img,
  };
  let image = "";
  switch (props.company.img) {
    case "IndianFood":
      image = IndianFood;
      break;
    case "Dentist":
      image = Dentist;
      break;
    case "escape":
      image = Escape;
      break;
    case "starlight":
      image = starlight;
      break;
    case "lodge":
      image = lodge;
      break;
    default:
      break;
  }
  return (
    <Link
      to="/reservation"
      state={{ company: companyInfo }}
      className="flex flex-col h-[500px]  bg-[#393E46] rounded  hover:shadow-3xl "
    >
      <div className=" text-xl text-[#EEEEEE] p-5 ">
        <img
          src={image}
          alt="Store"
          className="w-full h-[250px] rounded-md bg-gray-100"
        />
        <div className="flex mt-2 items-center gap-2 content-center">
          <FaCircle className="shrink-0 text-[#00DFA2] text-lg " />
          <h1 className=" font-bold text-2xl text-[#F7E987]">
            {props.company.companyName}
          </h1>
        </div>

        <div className="flex mt-2 items-center gap-2">
          <FaMapPin className="text-[#00ADB5]" />
          <p className=" ">{props.company.address}</p>
        </div>
        <div className="flex mt-2 items-center gap-2">
          <FaClock className="text-[#00ADB5]" />
          <p className="">{props.company.availableTime}</p>
        </div>
      </div>
    </Link>
  );
}
