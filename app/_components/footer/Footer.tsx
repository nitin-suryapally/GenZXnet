import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-300 text-justify max-w-md">
              GenZNext Enhance your business with comprehensive solutions tailored to your specific needs. Our offerings, ranging from sophisticated to simple, maximize your resources, assets, and investments. Achieve your goals efficiently and effectively.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">Head Office</h3>
            <p className="text-gray-300">
              1960 Bent Grass Way
              Bolingbrook, IL 60490, USA
            </p>
            <p className="flex items-center text-gray-300 mt-2">
              <FaWhatsapp className="mr-2 text-lg" /> +1 (815) 5569495
            </p>
            <p className="flex items-center text-gray-300 mt-2">
              <FaEnvelope className="mr-2 text-lg" /> contact@genzxnet.com
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold text-white-400 mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Application Development</li>
              <li>Mobile App Development</li>
              <li>Staffing Services</li>
              <li>Staff Aug Services</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-white text-sm">
            ©2024 GenZxnet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
