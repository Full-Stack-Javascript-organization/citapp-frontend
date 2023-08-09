import React from "react";
import headerTeepees from "../../assets/img/image3.png";
import { useNavigate } from "react-router-dom";

const data = {
  title: "Schedule",
  mainService: "Appointments",
  mainMessage: "Empower Your Hours with Our App",
};

export function MainClient() {
  let navigate = useNavigate();
  const goToHomePage = () => {
    let path = `/homepage`;
    navigate(path);
  };

  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={headerTeepees}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>{data.title}</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            {data.mainService}
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            {data.mainMessage}
          </p>
          <button
            className="bg-black font-bold text-[#00ADB5] "
            onClick={goToHomePage}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}
