import React, { ReactNode } from "react";

//define props
type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <div className="bg-blue-800 w-fit items-center px-4 py-3 mx-auto text-white text-2xl sm:text-2xl md:text-4xl uppercase -rotate-6">
      {children}
    </div>
  );
};

export default SectionHeading;
