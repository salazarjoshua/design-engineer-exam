import React from "react";
import { cn } from "lib/utils";
import Logo from "components/icons/Logo";

type FooterProps = {
  children?: React.ReactNode;
  className?: string;
  fullName?: string;
};

const Footer: React.FC = ({
  children,
  className,
  fullName = "<Your Full Name>",
}: FooterProps) => {
  return (
    <footer
      className={cn(
        "flex flex-col gap-8 bg-brand-teal px-8 py-8 text-brand-lime",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-[40px] leading-none">{fullName}</div>
        <Logo className="max-w-[220px]" />
      </div>
      {children}
    </footer>
  );
};

export default Footer;
