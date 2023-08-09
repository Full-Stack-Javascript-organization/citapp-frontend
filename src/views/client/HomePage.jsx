import React from "react";
import Card from "./StoreCard";

export function HomePageBody() {
  const companies = [
    {
      companyName: "HighGate Dentist",
      companyID: 1,
      address: "Address 123",
      availableTime: "9:00 am to 5:00pm",
      status: "active",
      img: "Dentist",
    },
    {
      companyName: "Elysian Eats Bistro",
      companyID: 2,
      address: "123 Serenity Street, Cresent City",
      availableTime: "11:30 am to 10:00pm",
      status: "active",
      img: "IndianFood",
    },
    {
      companyName: "Celestial Stay Lodge",
      companyID: 3,
      address: "456 Serene Valley Road, Horizon Hills",
      availableTime: "3:00 pm to 12:00pm",
      status: "active",
      img: "lodge",
    },
    {
      companyName: "Starlight Cineplex",
      companyID: 4,
      address: "101 Galaxy Avenue, Stardust City",
      availableTime: "12:00 pm to 11:00pm",
      status: "active",
      img: "starlight",
    },
    {
      companyName: "Quantum Quest Escape Room",
      companyID: 5,
      address: "90 Enigma Lane, Riddle Haven",
      availableTime: "11:00 am to 9:00pm",
      status: "active",
      img: "escape",
    },
  ];

  return (
    <div className=" m-auto grid grid-cols-1 p-5 px-10 desktop:grid-cols-4 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mt-5">
      {companies.map((company) => {
        return <Card key={company.companyID} company={company} />;
      })}
    </div>
  );
}
