import React from "react";
import { cn } from "lib/utils";
import Car from "components/icons/Car";

type HeaderProps = {
  className?: string;
  size?: "sm" | "lg";
};

const Header: React.FC = ({ className, size = "lg" }: HeaderProps) => {
  return (
    <header
      className={cn(
        "relative bg-[url(/public/assets/images/background.jpeg)] bg-cover bg-top px-8 pb-28 pt-12 text-brand-white",
        className,
      )}
    >
      <div className="absolute left-0 top-0 h-full w-11/12 bg-gradient-to-r from-black/40 to-blue-500/0" />

      <div className="relative grid grid-cols-[1fr_3rem_1fr] items-end justify-between">
        <div className="col-span-2 col-start-1 row-start-1">
          <h1
            className={cn(
              "text-nowrap text-9xl font-semibold",
              size === "sm" && "text-8xl",
            )}
          >
            Ready to <br /> own a car?
          </h1>
          <p className={cn("mt-9 text-5xl", size === "sm" && "mt-7 text-4xl")}>
            Your Ride, Your Savings
          </p>
        </div>

        <div className="relative col-span-2 col-start-2 row-start-1">
          <Car className="ml-auto max-w-[448px] translate-y-1/4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
