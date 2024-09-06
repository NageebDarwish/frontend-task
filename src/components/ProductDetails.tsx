import React from "react";

const ProductDetails: React.FC = () => {
  const features = [
    "Innovative Design",
    "Seamless Connectivity",
    "Long Battery Life",
    "Affordable Price",
  ];

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
        Key Features
      </h2>
      <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-8 md:space-y-0">
        {features.map((feature, index) => (
          <li key={index} className="bg-white p-4 shadow-lg rounded-lg">
            <p className="text-xl font-semibold">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
