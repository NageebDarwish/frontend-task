import React from "react";
import power from "../assets/power.webp";

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white h-screen flex flex-col items-center justify-center px-4">
      <img src={power} alt="Product" className="w-1/2 max-w-sm" />
      <h1 className="text-4xl md:text-6xl font-bold mt-4">
        Introducing the Future
      </h1>
      <p className="text-lg md:text-2xl mt-2">
        Experience innovation like never before.
      </p>
    </div>
  );
};

export default Hero;
