import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-background text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-300 text-justify max-w-md">
              S & V Tek Systems Solutions is a highly creative, modern,
              visually. Leverage our solutions and accomplish your goals.
              Sophisticated to simple; one-stop comprehensive solution
              complementing your business resources, assets, and investments.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-lg font-bold text-white mb-4">Head Office</h3>
            <p className="text-gray-300">
              3420 Ronnie Ln, John’s Creek, GA – 30024, USA
            </p>
            <p className="flex items-center text-gray-300 mt-2">
              <FaWhatsapp className="mr-2 text-lg" /> +1 (470) 222-4448
            </p>
            <p className="flex items-center text-gray-300 mt-2">
              <FaEnvelope className="mr-2 text-lg" /> contact@svteksystems.com
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
