import React from "react";
import { cn } from "lib/utils";
import Car from "components/icons/Car";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC = ({ className, children }: HeaderProps) => {
  return (
    <header
      className={cn(
        "relative bg-[url(/public/assets/images/background.jpeg)] bg-cover bg-top px-8 pb-28 pt-12 text-brand-white",
        className,
      )}
    >
      <div className="absolute left-0 top-0 h-full w-11/12 bg-gradient-to-r from-black/40 to-blue-500/0" />

      <div className="relative flex items-end justify-between">
        <div>
          <h1 className="text-nowrap text-9xl font-semibold">
            Ready to <br /> own a car?
          </h1>
          <p className="mt-9 text-5xl">Your Ride, Your Savings</p>
        </div>

        <div className="relative">
          <Car className="max-w-[448px] translate-y-1/4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
