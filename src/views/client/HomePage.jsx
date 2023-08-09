import React from "react";
import Card from "./StoreCard";

export function HomePageBody() {
  const companies = [
    {
      companyName: "ABC",
      companyID: 1,
      address: "Address 123",
      availableTime: "9:00 am to 5:00pm",
      status: "active",
    },
    {
      companyName: "Company 2",
      companyID: 2,
      address: "Address 345",
      availableTime: "9:00 am to 5:00pm",
      status: "active",
    },
    {
      companyName: "Company 3",
      companyID: 3,
      address: "Hilton",
      availableTime: "9:00 am to 5:00pm",
      status: "active",
    },
  ];

  return (
    <div className=" w-full grid grid-cols-4 p-2 desktop:grid-cols-4 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mt-5">
      {companies.map((company) => {
        return <Card key={company.companyID} company={company} />;
      })}
    </div>
  );
}
