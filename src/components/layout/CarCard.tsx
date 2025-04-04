import Car from "components/icons/Car";
import Button from "components/ui/Button";
import React from "react";

export type CarCardProps = {
  color: "purple" | "blue";
  name: string;
  price: string;
  cta: string;
};

const colorClass = {
  purple: "text-brand-purple",
  blue: "text-brand-blue",
};

const CarCard: React.FC<CarCardProps> = ({ color, name, price, cta }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <Car className={colorClass[color]} />

      <h2 className="my-1 text-center text-5xl font-semibold">{name}</h2>

      <div className="text-xl font-normal">
        <span className="inline-block -translate-y-1/4 align-super">For</span>
        <span className="ml-1.5 inline-block text-4xl font-semibold">
          {price}
        </span>
      </div>

      <Button className="mt-4">{cta}</Button>
    </div>
  );
};

export default CarCard;
