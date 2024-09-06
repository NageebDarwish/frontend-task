import React from "react";

const CTA: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white py-8 flex flex-col items-center justify-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to explore?</h3>
      <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold text-lg transition-transform transform hover:scale-105">
        Learn More
      </button>
    </div>
  );
};

export default CTA;
