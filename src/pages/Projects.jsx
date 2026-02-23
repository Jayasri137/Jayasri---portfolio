"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projectList = [
  { id: "preschool", title: "Bluestone Preschool Website", image: "/prescl.png" },
  { id: "goi", title: "Bluestone Group of Institutions", image: "/goi.png" },
  { id: "techpark", title: "Bluestone Techpark Website", image: "/tech.png" },
  { id: "sports", title: "Bluestone Elite Sports", image: "/elitesport.png" },
  { id: "upsc", title: "Bluestone UPSC Landing Page", image: "/upsc.png" },
  { id: "crm", title: "Bluestone Groups CRM", image: "/crm.png" },
  { id: "dotetrans", title: "DotEtrans Landing Page", image: "/dotetranz.png" },
  { id: "cookdin", title: "Cookdin Admin Panel", image: "/adminsub.jpeg" },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const navigate = useNavigate();

  /* SAME RESPONSIVE CALCULATION AS SERVICES */
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isMobile, cardWidth, spacing } = useMemo(() => {
    const mobile = width < 768;
    const cWidth = mobile ? width * 0.85 : 520;

    return {
      isMobile: mobile,
      cardWidth: cWidth,
      spacing: mobile ? cWidth + 15 : 320,
    };
  }, [width]);

  /* SAME NAVIGATION */
  const handleNext = () =>
    setActive((prev) => (prev + 1) % projectList.length);

  const handlePrev = () =>
    setActive((prev) => (prev - 1 + projectList.length) % projectList.length);

  return (
    <section className="relative py-20 md:py-32 bg-[#0b0b18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER (Same Layout Style) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase italic">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Projects</span>
          </h2>

          {/* Desktop Arrows */}
          <div className="flex gap-4 mb-2">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-blue-500 hover:text-blue-500 transition-all"
            >
              <ArrowLeft size={24} />
            </button>

            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black hover:bg-blue-600 hover:text-white transition-all shadow-xl"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* STACKED CARD CONTAINER — IDENTICAL BEHAVIOR */}
        <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
          <div className="relative w-full h-full">

            <AnimatePresence mode="popLayout" initial={false}>
              {projectList.map((project, index) => {
                const offset = index - active;

                if (Math.abs(offset) > 2) return null;

                return (
            <motion.div
  key={project.id}
  onClick={() => setActive(index)}   // just bring card to center
                    initial={false}
                    animate={{
                      x: `calc(-50% + ${offset * spacing}px)`,
                      y: "-50%",
                      scale: offset === 0 ? 1 : 0.85,
                      opacity: Math.abs(offset) > (isMobile ? 1 : 2) ? 0 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                      mass: 0.8,
                    }}
                    className={`absolute top-1/2 left-1/2 h-[400px] md:h-[500px]
                      rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer
                      bg-slate-900 border-4 transform-gpu will-change-transform ${
                        offset === 0
                          ? "border-blue-500/50"
                          : "border-transparent"
                      }`}
                    style={{ width: cardWidth, zIndex: 10 - Math.abs(offset) }}
                  >
                    {/* BACKGROUND IMAGE */}
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-opacity duration-500                         
                        ` }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <h3 className="text-2xl md:text-4xl font-black text-white italic uppercase tracking-tighter">
                        {project.title}
                      </h3>

                      {offset === 0 && (
                    <motion.button
  onClick={(e) => {
    e.stopPropagation(); // prevents card click
    navigate(`/projects/${project.id}`);
  }}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="mt-6 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl"
>
  View Project →
</motion.button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center gap-3 mt-12">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === active ? "bg-blue-500 w-12" : "bg-white/20 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}