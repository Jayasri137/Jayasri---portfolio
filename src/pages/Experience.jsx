import { motion } from "framer-motion";
import { FaReact, FaGitAlt, FaServer } from "react-icons/fa";

const experienceData = [
  {
    role: "Junior Software Developer",
    company: "Bluestone Tech Park, Coimbatore",
    duration: "Dec 2024 – Present",
    certificate: "Full-Time Role",
    description:
      "Leading full-stack development of scalable internal and public-facing platforms for Bluestone Group, delivering enterprise-grade business applications, admin systems, and a centralized CRM ecosystem.",

    responsibilities: [
      "Architected and deployed multiple production-grade websites across Bluestone verticals",
      "Developed full-stack applications using React.js, Node.js, Express.js, and MySQL",
      "Designed reusable UI architecture with dynamic API-driven modules",
      "Built custom admin panels for admissions, enquiries, and content management",
      "Implemented authentication, authorization, and secure REST APIs",
    ],

    learnings: [
      "Designed scalable multi-domain systems under a unified architecture",
      "Implemented Role-Based Access Control (RBAC) using JWT authentication",
      "Managed real-time lead lifecycle tracking workflows",
      "Optimized performance for production-ready deployments",
      "Collaborated directly with stakeholders to translate business needs into software solutions",
    ],

    platforms: [
      "International Preschool Website – Admission & enquiry management",
      "UPSC Landing Page – Campaign-based lead generation",
      "Bluestone Group Main Website – Multi-domain institutional platform",
      "Bluestone Tech Park – Corporate website with dynamic services",
      "Bluestone Elite Sports – Program & registration management",
    ],

    crm: {
      title: "Bluestone Group CRM System",
      description:
        "Developed a centralized multi-domain CRM managing leads across Preschool, Overseas, IAS Academy, Tech Park, Placements, Elite Sports, Language Hub, and Startup verticals.",
      hierarchy: [
        "Super Admin – Monitors all domain activities",
        "Domain Admin – Manages leads within their vertical",
        "Users (Staff/Juniors) – Update candidate lifecycle & status",
      ],
      techNote:
        "Built using JWT authentication, REST APIs, and MySQL with a scalable multi-branch architecture under a unified system.",
    },

    tech: [
      { icon: <FaReact className="text-[#61DBFB]" />, label: "React JS" },
      { icon: <FaServer className="text-[#FF6C37]" />, label: "Node + Express" },
      { icon: <FaGitAlt className="text-[#F05032]" />, label: "MySQL + Git" },
    ],
  },
  {
    role: "React Intern",
    company: "ITBOOMI Innovation, Tiruppur",
    duration: "Aug 2025 – Nov 2025",
    certificate: "Internship Certificate",
    description:
      "Worked as a Frontend React Intern focusing on building scalable UI components and real-world application features within an agile development environment.",

    responsibilities: [
      "Developed reusable React components using hooks",
      "Integrated REST APIs and managed dynamic data rendering",
      "Collaborated with UI/UX designers to build responsive layouts",
      "Improved application performance and code maintainability",
    ],

    learnings: [
      "Strong understanding of React hooks and component lifecycle",
      "Built fully responsive layouts using modern CSS techniques",
      "Handled API states: loading, success, and error scenarios",
      "Implemented smooth animations to enhance user experience",
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
      <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-6 italic">
        MY{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Experience
        </span>
      </h2>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative border-l border-white/10 pl-6 space-y-14"
      >
        {experienceData.map((item) => (
          <motion.div
            key={item.role}
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[34px] top-2 w-5 h-5 rounded-full bg-pink-500 border-2 border-white/30 animate-pulse" />

            {/* Card */}
            <div className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              
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
              <p className="text-gray-400 mt-3 leading-relaxed">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="mt-5">
                <h4 className="text-white font-medium mb-2">
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {item.responsibilities.map((res) => (
                    <li key={res}>{res}</li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className="mt-5">
                <h4 className="text-white font-medium mb-2">
                  Key Learnings & Growth
                </h4>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {item.learnings.map((learn) => (
                    <li key={learn}>{learn}</li>
                  ))}
                </ul>
              </div>

              {/* Platforms - Only if exists */}
              {item.platforms && (
                <div className="mt-6">
                  <h4 className="text-white font-medium mb-2">
                    Platforms Delivered
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {item.platforms.map((platform) => (
                      <li key={platform}>{platform}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CRM Section - Only if exists */}
              {item.crm && (
                <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">
                    {item.crm.title}
                  </h4>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.crm.description}
                  </p>

                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-3">
                    {item.crm.hierarchy.map((level) => (
                      <li key={level}>{level}</li>
                    ))}
                  </ul>

                  <p className="text-gray-400 text-sm mt-3 italic">
                    {item.crm.techNote}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mt-5">
                <h4 className="text-white font-medium mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-4">
                  {item.tech.map((tech) => (
                    <span
                      key={tech.label}
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