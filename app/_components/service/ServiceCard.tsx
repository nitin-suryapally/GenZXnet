import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
  return (
    <div className="relative group">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="rounded-lg w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
