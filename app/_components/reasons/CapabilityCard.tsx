import React from "react";

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center md:text-left md:items-start p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      
      <div className="mb-4 text-green-500 text-6xl">{icon}</div>

      
      <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
        {title}
      </h3>

      
      <p className="text-gray-600 text-sm sm:text-base text-justify">{description}</p>
    </div>
  );
};

export default CapabilityCard;
