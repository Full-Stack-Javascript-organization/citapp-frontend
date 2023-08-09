import React from "react";
import Card from "./StoreCard";

const data = [
  {
    name: "",
    url: "",
    address: "",
    time: "",
  },
];

export function HomePageBody() {
  return (
    <div className=" w-full grid grid-cols-1 p-2 desktop:grid-cols-4 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mt-5">
      <Card name="Gate Dentist" img="" />
      <Card name="Indian Food" img="" />
      <Card name="Meshiya" img="" />
      <Card name="Hotel Nerona" img="" />
      <Card name="Fade Stylish" img="" />
      <Card name="" img="" />
      <Card name="" img="" />
      <Card name="" img="" />
    </div>
  );
}
