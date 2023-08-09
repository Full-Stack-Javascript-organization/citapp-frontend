import { React, useContext, useState, useRef } from "react";
import { FaMapPin, FaCircle, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card(props) {
  let companyInfo = {
    companyName: props.company.companyName,
    companyID: props.company.companyID,
    address: props.company.address,
    availableTime: props.company.availableTime,
  };

  return (
    <div className="w-full h-[500px] text-[#EEEEEE]  p-5 flex-col rounded bg-[#393E46]">
      <img
        src={""}
        alt="Store"
        className="w-full h-[250px] rounded-md bg-gray-100"
      />
      <div className="flex mt-2 items-center gap-2 content-center">
        <FaCircle className=" flex-initial text-[#00DFA2] text-lg " />
        <h1 className="font-bold text-4xl text-[#F7E987]">
          {props.company.companyName}
        </h1>
      </div>

      <div className="flex mt-2 items-center gap-2">
        <FaMapPin className="text-[#00ADB5] flex-initial " />
        <p className=" ">{props.company.address}</p>
      </div>
      <div className="flex mt-2 items-center gap-2">
        <FaClock className="text-[#00ADB5]" />
        <p className="">{props.company.availableTime}</p>
      </div>
      <div className="flex justify-around">
        <button
          className="mt-2 px-5 py-3 text-xl font-bold bg-[#00ADB5] rounded"
          type="button"
        >
          <Link to="/reservation" state={{ company: companyInfo }}>
            Next Step
          </Link>
        </button>
      </div>
    </div>
  );
}
