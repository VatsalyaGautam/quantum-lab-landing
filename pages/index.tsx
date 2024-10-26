import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import {
  ChevronRightIcon,
  CheckIcon,
  StarIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import AIAssistant from "../components/AIAssistant";
import PricingCard from "../components/PricingCard";
const QuantumScene = dynamic(() => import("../components/QuantumScene"), {
  ssr: false,
});
type Feature = {
  name: string;
  id: string;
};
type PlanFeature = {
  name: string;
  included: boolean;
};
type IndexPlan = {
  name: string;
  price: string;
  features: PlanFeature[];
};

export default function QuantumLabLanding() {
  const controls = useAnimation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const mouseRef = useRef<[number, number]>([0, 0]);
  const scrollY = useRef(0);
  const features: Feature[] = [
    { id: "1", name: "Quantum-Inspired Algorithms" },
    { id: "2", name: "Neural Network Synthesis" },
    { id: "3", name: "Code Telepathy" },
    { id: "4", name: "Time-Bending Debugging" },
    { id: "5", name: "AI Co-Pilot Integration" },
    { id: "6", name: "Holographic Code Visualization" },
  ];

  const testimonials = [
    {
      name: "Dr. Quantum Coder",
      role: "CTO, FutureTech",
      content:
        "CodeWave's quantum-inspired algorithms have revolutionized our development process. It's like coding in the future!",
    },
    {
      name: "Neura Link",
      role: "AI Researcher, MindMeld Inc.",
      content:
        "The neural network synthesis feature is mind-blowing. It's as if the code understands my thoughts before I even type them.",
    },
    {
      name: "Chrono Dev",
      role: "Lead Engineer, TimeCorp",
      content:
        "Time-bending debugging? I didn't believe it until I tried it. CodeWave has literally saved us years of development time.",
    },
  ];
  const plans: IndexPlan[] = [
    {
      name: "Quantum Starter",
      price: "$49",
      features: [
        { name: "5 Quantum Threads", included: true },
        { name: "10TB Neural Storage", included: true },
        { name: "Basic Code Telepathy", included: true },
        { name: "Standard Time-Bending", included: true },
      ],
    },
    {
      name: "Neural Pro",
      price: "$149",
      features: [
        { name: "25 Quantum Threads", included: true },
        { name: "100TB Neural Storage", included: true },
        { name: "Advanced Code Telepathy", included: true },
        { name: "Enhanced Time-Bending", included: true },
        { name: "AI Co-Pilot Basic", included: true },
      ],
    },
    {
      name: "Chrono Enterprise",
      price: "Custom",
      features: [
        { name: "Unlimited Quantum Threads", included: true },
        { name: "Unlimited Neural Storage", included: true },
        { name: "Ultimate Code Telepathy", included: true },
        { name: "Chrono-Lock™ Time-Bending", included: true },
        { name: "AI Co-Pilot Elite", included: true },
        { name: "Custom Holographic Interfaces", included: true },
      ],
    },
  ];

  useEffect(() => {
    controls.start("visible");
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = [
        e.clientX / window.innerWidth,
        e.clientY / window.innerHeight,
      ];
    };
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center px-4">
        <div className="absolute inset-0">
          <QuantumScene
            features={features}
            mouse={{ x: mouseRef.current[0], y: mouseRef.current[1] }}
          />
        </div>
        <div className="text-center z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            CodeWave
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-cyan-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Surf the future of coding with quantum-powered development
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:shadow-lg"
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
          >
            Dive In
            <ChevronRightIcon className="inline-block w-6 h-6 ml-2" />
          </motion.button>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDownIcon className="w-8 h-8 text-cyan-300 opacity-75" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-300">
          Quantum Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-blue-900 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <CheckIcon className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-200">
                {feature.name}
              </h3>

              <p className="text-cyan-100">
                Experience coding beyond the boundaries of traditional
                paradigms. Unleash the power of quantum computing in your
                development workflow.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-300">
          Quantum Testimonials
        </h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-blue-900 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <p className="text-xl mb-4 text-blue-200">
              {testimonials[activeTestimonial].content}
            </p>
            <p className="font-semibold text-cyan-300">
              {testimonials[activeTestimonial].name}
            </p>
            <p className="text-blue-300">
              {testimonials[activeTestimonial].role}
            </p>
          </motion.div>
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${
                  index === activeTestimonial ? "bg-cyan-400" : "bg-blue-600"
                }`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-300">
          Quantum Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-300">
          Quantum Communication
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full bg-blue-900 bg-opacity-50 text-white border-b-2 border-cyan-500 py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300 placeholder-blue-300"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-6">
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full bg-blue-900 bg-opacity-50 text-white border-b-2 border-cyan-500 py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300 placeholder-blue-300"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <div className="mb-6">
            <motion.textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-blue-900 bg-opacity-50 text-white border-b-2 border-cyan-500 py-2 px-4 focus:outline-none focus:border-blue-500 transition-colors duration-300 placeholder-blue-300"
              whileFocus={{ scale: 1.05 }}
            />
          </div>
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Quantum Message
          </motion.button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">CodeWave</h3>
            <p className="text-blue-200">
              Surfing the quantum realm of coding possibilities.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Quantum Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Legal Wormholes
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">
              Quantum Entanglement
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-300">
          <p>
            &copy; 2024 CodeWave. All rights reserved across the multiverse.
          </p>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
}
