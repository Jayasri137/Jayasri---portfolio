import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaServer } from "react-icons/fa";

const experienceData = [
  {
    role: "React Intern",
    company: "ITBOOMI Innovation, Tiruppur",
    duration: "Aug 2025 – Nov 2025",
    certificate: "Internship Certificate",
    description:
      "Worked as a Frontend React Intern focusing on building scalable UI components and real-world web application features in an agile development environment.",
    responsibilities: [
      "Developed reusable React components using hooks",
      "Integrated REST APIs and handled dynamic data",
      "Collaborated with designers to convert UI into responsive layouts",
      "Improved performance and code readability",
    ],
    learnings: [
      "Strong understanding of React hooks and component lifecycle",
      "Building fully responsive layouts using modern CSS techniques",
      "Handling API states: loading, success, and error",
      "Implementing smooth UI animations for better UX",
    ],
    tech: [
      { icon: <FaReact className="text-[#61DBFB]" />, label: "React JS" },
      { icon: <FaServer className="text-[#FF6C37]" />, label: "REST API" },
      { icon: <FaGitAlt className="text-[#F05032]" />, label: "Git & GitHub" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto md:mt-32 px-6 py-16 rounded-3xl"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(22,6,33,0.74), rgba(22,16,33,0.95)),
          url('/reac.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">
        Experience
      </h2>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative border-l border-white/10 pl-6 space-y-14"
      >
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[34px] top-2 w-5 h-5 rounded-full bg-pink-500 border-2 border-white/30 animate-pulse" />

            {/* Card */}
            <div className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl transition-shadow">
              {/* Title */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-white text-lg sm:text-xl font-medium">
                  {item.role} – {item.company}
                </h3>
                <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300">
                  {item.duration}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mt-3 leading-relaxed">{item.description}</p>

              {/* Responsibilities */}
              <div className="mt-5">
                <h4 className="text-white font-medium mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {item.responsibilities.map((res, idx) => (
                    <li key={idx}>{res}</li>
                  ))}
                </ul>
              </div>

              {/* Key Learnings */}
              <div className="mt-5">
                <h4 className="text-white font-medium mb-2">Key Learnings & Growth</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {item.learnings.map((learn, idx) => (
                    <li key={idx}>{learn}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-5">
                <h4 className="text-white font-medium mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-4">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-gray-200 hover:bg-white/20 hover:scale-105 transition-all cursor-default"
                    >
                      {tech.icon} {tech.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Badge */}
              <div className="mt-6">
                <span className="inline-block text-xs sm:text-sm px-4 py-2 rounded-full bg-orange-500 text-white font-medium">
                  {item.certificate}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
