import React from "react";
import Header from "components/layout/Header";
import CarCard from "components/layout/CarCard";
import { Footer, FooterDescription } from "components/layout/Footer";
import carsData from "data/carsData";

const Portrait: React.FC = () => {
  return (
    <div className="aspect-portrait grid w-full max-w-[1080px] grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="grid grid-cols-2 gap-x-20 gap-y-32 px-16 py-32">
        {carsData.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>

      <Footer fullName="Joshua Salazar">
        <FooterDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </FooterDescription>
      </Footer>
    </div>
  );
};

export default Portrait;
