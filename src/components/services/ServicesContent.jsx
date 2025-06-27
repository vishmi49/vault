import React from "react";

const ServicesContent = () => {
  return (
    <div className="w-full md:w-[40%] text-left">
      <h2 className="text-4xl font-bold font-poppins uppercase mb-6 text-gray-900">
        OUR SERVICES
      </h2>

      <ul className="list-disc list-inside text-gray-700 font-poppins space-y-4 text-base leading-relaxed">
        <li>Custom T-shirt printing with logos and artwork</li>
        <li>Merchandise for sports teams and universities</li>
        <li>Bulk orders for corporate and promotional events</li>
        <li>Multiple T-shirt styles: crew neck, v-neck, drop collar</li>
        <li>Material choices by GSM and durability</li>
      </ul>
    </div>
  );
};

export default ServicesContent;
