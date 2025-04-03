import CarCard from "components/layout/CarCard";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import carsData from "data/carsData";
import React from "react";

const Square: React.FC = () => {
  return (
    <div className="grid aspect-square w-full max-w-[1080px] grid-rows-[auto_1fr_auto]">
      <Header className="pb-16" size="sm" />

      <div className="grid grid-cols-2 place-items-center gap-x-20 gap-y-32 px-8">
        {carsData.map((car, index) => (
          <div key={index} className={index % 2 === 0 ? "hidden" : ""}>
            <CarCard {...car} />
          </div>
        ))}
      </div>

      <Footer fullName="Joshua Salazar" />
    </div>
  );
};

export default Square;
