import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiPostman } from "react-icons/si";
import { VscChromeRestore, VscCodeReview } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-[#61DBFB]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F0DB4F]" /> },
    { name: "HTML", icon: <FaHtml5 className="text-[#E34C26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#264de4]" /> },
    { name: "Styled Components", icon: <FaBootstrap className="text-[#38b246]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
  ];

  const tools = [
    { name: "Figma", icon: <SiFigma className="text-[#7d1ef2]" /> },
    { name: "GitHub", icon: <FaGitAlt className="text-[#bdf12f]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Chrome DevTools", icon: <VscChromeRestore className="text-[#ac5487]" /> },
    { name: "Visual Studio Code", icon: <VscCodeReview className="text-[#007ACC]" /> },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto mt-20 md:mt-32 px-6 py-16 bg-[#0a0a0a] relative rounded-3xl"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(23,6,43,0.85), rgba(23,16,43,0.95)),
          url('/fragrance.avif')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">My Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1f1f1f]/50 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold text-pink-500 mb-4 flex items-center gap-2">
            <span className="text-white">//</span> Skills
          </h3>
          <ul className="space-y-3 text-gray-300">
            {skills.map((skill, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center gap-2 text-gray-300"
              >
                {skill.icon} {skill.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1f1f1f]/50 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold text-blue-500 mb-4 flex items-center gap-2">
            <span className="text-white">⚛</span> Development
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Passionate Frontend Developer | Completed React JS Internship and worked on live projects including 
            responsive web apps, admin dashboards, and landing pages. Hands-on experience with building UI components, integrating APIs, and deploying real-world applications.
          </p>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#1f1f1f]/50 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center gap-2">
            <span className="text-white">🛠</span> Tools
          </h3>
          <ul className="space-y-3 text-gray-300">
            {tools.map((tool, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center gap-2 text-gray-300"
              >
                {tool.icon} {tool.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
