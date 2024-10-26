import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

interface PlanFeature {
  name: string;
}

interface Plan {
  name: string;
  price: string;
  features: PlanFeature[];
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const rotateY = (event.clientX - centerX) / 20;
    const rotateX = (centerY - event.clientY) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="bg-blue-900 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg text-center flex flex-col h-full"
      style={{
        perspective: "1000px",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-blue-200">{plan.name}</h3>
        <p className="text-4xl font-bold mb-6 text-cyan-400">{plan.price}</p>
        <ul className="text-left mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center mb-2 text-blue-200">
              <CheckIcon className="w-5 h-5 text-cyan-400 mr-2" />
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
        Choose Plan
      </button>
    </motion.div>
  );
};

export default PricingCard;
