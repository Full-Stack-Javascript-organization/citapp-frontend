import React from "react";

const planData = {
  title: "Plan your next picnic",
  subtitle: "Let us live togheter an adventure",
  description:
    "Description lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates nostrum dolorum reprehenderit error! Doloribus est illo eius saepe? Molestias sapiente perspiciatis doloribus consectetur nihil facilis aliquid eaque vel quisquam.",
  image1:"https://drive.google.com/uc?id=15-vc0Y-28QPcyVNWQSNKmfRY2eWbSmKH",
  image2:"https://drive.google.com/uc?id=1APlL7EZnowTtjnKLtsVCYg0h1jg2YW2Y",
  image3:"https://drive.google.com/uc?id=1ej1lDN45H8UvljgirjtVqATW5szNgJ5q",
  image4:"https://drive.google.com/uc?id=1y4vViDebbwr-alU60i1vYijUQwnjZIVI",
  image5:"https://drive.google.com/uc?id=1CMt-G23elUM_Qx4eByIu5omzKAN4zBNW",
};

export function Plan(){
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
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
