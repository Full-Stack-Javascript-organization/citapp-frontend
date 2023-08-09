import React from "react";
import Card from "./StoreCard";

export function HomePageBody() {
  return (
    <div className=" w-full grid grid-cols-4 p-2 desktop:grid-cols-4 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mt-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
