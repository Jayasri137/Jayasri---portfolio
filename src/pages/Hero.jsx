import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 sm:px-12 md:px-24 text-white"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(33,6,53,0.85), rgba(22,16,33,0.95)),
          url('/image.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
      >
        Jayasri Murugesan
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-gray-300 text-sm sm:text-xl md:text-2xl"
      >
        Junior Front-End Developer | React.js
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, staggerChildren: 0.2 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-xl font-medium transition-all shadow-lg"
        >
          View Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
          href="/Jayasri_Murugesan_Resume.pdf"
          download
          className="px-6 py-3 border border-white/30 rounded-xl transition-all shadow-sm"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, staggerChildren: 0.2 }}
        className="mt-6 flex gap-6"
      >
        {[
          { icon: <Github size={28} />, link: "https://github.com/Jayasri137" },
          { icon: <Linkedin size={28} />, link: "https://linkedin.com/in/Jayasri137" },
          { icon: <Mail size={28} />, link: "mailto:jayasrimurugesan137@gmail.com" },
        ].map(({ icon, link }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 transition-colors"
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
