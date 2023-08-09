import React from "react";

const planData = {
  title: "Unlock Efficiency, One Schedule at a Time.",
  subtitle: "Connect Today!",
  description:
    "Cita reserves your spot at your important places. The goal is to make reservation easier and connect people to more services efficiently. ",
  image1: require("../../assets/img/image4.png"),
  image2: require("../../assets/img/image1.png"),
  image3: require("../../assets/img/caspgin_people_meeting_and_shaking_hands_in_office_environment__d5bb2f56-d50b-4383-af2d-744c539d21c2.png"),
  image4: require("../../assets/img/image2.png"),
  image5: require("../../assets/img/image5.png"),
};

export function Plan() {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={planData.image1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={planData.image2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={planData.image3}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={planData.image4}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={planData.image5}
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">{planData.title}</h3>
        <p className="text-2xl py-6">{planData.subtitle}</p>
        <p className="pb-6">{planData.description}</p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black font-bold text-white border-black hover:shadow-xl">
            Book Your Service
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
