import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiPostman, SiMysql } from "react-icons/si";
import { VscChromeRestore } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-[#61DBFB]" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-[#F0DB4F]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#3C873A]" /> },
    { name: "Express.js", icon: <FaNodeJs className="text-[#68A063]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#00758F]" /> },
    { name: "REST APIs", icon: <FaDatabase className="text-[#FF6C37]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34C26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#264de4]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  ];

  const tools = [
    { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
    { name: "Figma", icon: <SiFigma className="text-[#7d1ef2]" /> },
    { name: "Chrome DevTools", icon: <VscChromeRestore className="text-[#ac5487]" /> },
    { name: "VS Code", icon: <VscChromeRestore className="text-[#007ACC]" /> },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto mt-20 md:mt-32 px-6 py-16 rounded-3xl"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(23,6,43,0.85), rgba(23,16,43,0.95)),
          url('/fragrance.avif')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-10 leading-[0.95] tracking-tighter uppercase italic">
        MY{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          EXPERTISE
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500"
        >
          <h3 className="text-xl font-semibold text-pink-500 mb-6">
            // Technical Skills
          </h3>

          <ul className="grid grid-cols-1 gap-3 text-gray-300">
            {skills.map((skill) => (
              <motion.li
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                {skill.icon}
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500"
        >
          <h3 className="text-xl font-semibold text-blue-500 mb-6">
            ⚛ Professional Summary
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Full-Stack Developer with hands-on experience building scalable 
            web applications, centralized CRM systems, and dynamic admin panels. 
            Skilled in React.js, Node.js, Express.js, and MySQL with strong 
            understanding of REST APIs, authentication (JWT), and role-based 
            access control (RBAC). Passionate about writing clean, maintainable 
            code and delivering business-focused solutions.
          </p>
        </motion.div>

        {/* Tools & Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-500"
        >
          <h3 className="text-xl font-semibold text-orange-500 mb-6">
            🛠 Tools & Workflow
          </h3>

          <ul className="space-y-3 text-gray-300">
            {tools.map((tool) => (
              <motion.li
                key={tool.name}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                {tool.icon}
                {tool.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}