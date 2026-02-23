import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";


const projectData = {
  preschool: {
  title: "Bluestone Preschool Website",
  subtitle: "Institution Website",
  description:
    "Bluestone Preschool is a dynamic institutional website designed to showcase programs, admissions, facilities, and activities. The platform delivers a friendly and engaging experience for parents while maintaining strong performance and responsiveness.",
  goals: [
    "Provide clear information for parents and admissions",
    "Create a warm and engaging preschool brand presence",
    "Develop a responsive and SEO-friendly website",
  ],
  outcome:
    "A fully responsive React-based website with dynamic content management, modern UI, and smooth animations to enhance engagement.",
  tech: [
    "React JS",
    "Tailwind CSS",
    "Framer Motion",
    "Node JS",
    "Express",
    "MySQL",
    "Dynamic Image Fetch",
  ],
  live: "https://bluestoneinternationalpreschool.com/",
  heroImage: "/prescl.png",
  gallery: ["/prescl.png"],
},

goi: {
  title: "Bluestone Group of Institutions Website",
  subtitle: "Multi-Domain Educational Platform",
  description:
    "A centralized platform representing multiple Bluestone verticals including Preschool, Overseas Education, IAS Academy, Techpark, Placements, Elite Sports, Language Hub, and Startups. Each domain is structured with scalable architecture and dynamic data handling.",
  goals: [
    "Represent multiple institutions under one ecosystem",
    "Build scalable architecture for future expansion",
    "Enable domain-wise content management",
  ],
  outcome:
    "A modular React application integrated with backend APIs allowing seamless domain-based data rendering and administration.",
  tech: [
    "React JS",
    "Tailwind CSS",
    "Node JS",
    "Express",
    "MySQL",
    "REST API",
    "Responsive Design",
  ],
  live: "https://bluestonegroupofinstitutions.com/",
  heroImage: "/goi.png",
  gallery: ["/goi.png"],
},

techpark: {
  title: "Bluestone Techpark Website",
  subtitle: "Software Excellence Center Platform",
  description:
    "Bluestone Techpark is a technology-focused platform showcasing training programs, services, and innovation initiatives. Built with modern UI patterns and performance-focused architecture.",
  goals: [
    "Bridge academia and industry exposure",
    "Showcase technical programs dynamically",
    "Deliver high-performance UI with animations",
  ],
  outcome:
    "A visually rich React platform with animation-driven UX and backend-connected data modules.",
  tech: [
    "React JS",
    "Tailwind CSS",
    "Framer Motion",
    "Node JS",
    "Express",
    "MySQL",
  ],
  live: "https://bluestonetechpark.com/",
  heroImage: "/tech.png",
  gallery: ["/tech.png"],
},

sports: {
  title: "Bluestone Elite Sports Website",
  subtitle: "Sports Academy Platform",
  description:
    "A sports-focused website presenting training programs, achievements, and facilities with strong visual storytelling and mobile-first responsiveness.",
  goals: [
    "Promote sports training programs",
    "Highlight achievements and infrastructure",
    "Ensure mobile-first performance",
  ],
  outcome:
    "An engaging and responsive website optimized for accessibility and fast performance.",
  tech: [
    "React JS",
    "Tailwind CSS",
    "Responsive Design",
    "Dynamic Content Integration",
  ],
  live: "https://navajowhite-dragonfly-247965.hostingersite.com/",
  heroImage: "/elitesport.png",
  gallery: ["/elitesport.png"],
},

upsc: {
  title: "Bluestone UPSC Landing Page",
  subtitle: "Campaign Landing Page",
  description:
    "A focused marketing landing page built for UPSC coaching promotion. Designed using HTML, CSS, and backend connectivity for lead capture and database storage.",
  goals: [
    "Generate student leads through campaigns",
    "Build lightweight, high-speed landing experience",
    "Store enquiries into MySQL database",
  ],
  outcome:
    "A fast-loading landing page with backend integration for lead management and analytics tracking.",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
  ],
  live: "https://upsc.bluestoneiasacademy.com/",
  heroImage: "/upsc.png",
  gallery: ["/upsc.png"],
},

crm: {
  title: "Bluestone Group CRM System",
  subtitle: "Multi-Role Lead Management Platform",
  description:
    "A centralized CRM developed to manage leads across all Bluestone domains. The system supports hierarchical roles such as Super Admin, Domain Admin, and Users (Staff/Junior Executives).",
  goals: [
    "Manage leads across multiple domains in one system",
    "Provide role-based access control",
    "Allow domain-specific administration",
    "Track candidate status and workflow updates",
  ],
  outcome:
    "A scalable CRM where Super Admin oversees all domains, Domain Admins manage their vertical, and Users update candidate progress — functioning like multiple branches under a single tree structure.",
  tech: [
    "React JS",
    "Tailwind CSS",
    "Node JS",
    "Express",
    "MySQL",
    "Role-Based Authentication",
    "REST APIs",
  ],
  live: "#",
  heroImage: "/crm.png",
  gallery: ["/crm.png"],
},
  dotetrans: {
    title: "DotEtrans Landing Page",
    subtitle: "Corporate Website / Landing Page",
    description:
      "DotEtrans is a corporate logistics and transportation website built to establish a strong digital presence and communicate trust, reliability, and efficiency. The landing page highlights key services, business strengths, and brand identity through a clean layout, modern typography, and smooth motion effects.",
    goals: [
      "Establish a strong corporate digital identity",
      "Present logistics services clearly to enterprise clients",
      "Ensure high performance and SEO-friendly structure",
    ],
    outcome:
      "The final product is a fast, responsive, and visually polished corporate website that strengthens brand credibility and delivers a smooth user experience across all devices.",
    tech: [
      "React JS",
      "Styled Components",
      "Framer Motion",
      "Vite",
      "React Router DOM",
      "Hooks",
    ],
    live: "https://dotetrans.com",
    heroImage: "/dotetranz.png",
    gallery: [
      "/3.png",
      "/1.png",
      "/2.png",
    ],
  },
  cookdin: {
    title: "Cookdin Admin Panel",
    subtitle: "Admin Dashboard",
    description:
      "Cookdin Admin Panel is a comprehensive dashboard for managing products, orders, and users with full CRUD operations and API integration.",
    goals: [
      "Simplify admin workflows",
      "Enable real-time data management",
      "Create a scalable dashboard architecture",
    ],
    outcome:
      "A clean and efficient admin interface that allows administrators to manage the platform with speed and accuracy.",
    tech: ["React JS", "Tailwind CSS", "REST API", "Hooks"],
    live: "#",
    heroImage: "/adminsub.jpeg",
    gallery: ["/adminsettings.jpeg"],
  },
  connectmeet: {
    title: "Connect & Meet Panel",
    subtitle: "Meeting Management System",
    description:
      "Connect & Meet is an admin panel for managing meetings, users, and schedules with a responsive and intuitive interface.",
    goals: [
      "Centralize meeting management",
      "Improve scheduling efficiency",
      "Maintain responsive UI across devices",
    ],
    outcome:
      "A reliable meeting management system with smooth performance and scalable structure.",
    tech: ["React JS", "Tailwind CSS", "API Integration", "Hooks"],
    live: "#",
    heroImage: "/adminpanal.png",
    gallery: [""],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <p className="text-center text-white mt-32 text-xl">
        Project not found
      </p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto mt-32 px-6 text-white">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 md:mb-16"
      >
        <img
          src={project.heroImage}
          alt={project.title}
          className="rounded-3xl w-full max-h-[450px] object-fill mb-6 shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
        <p className="text-gray-400 mt-2">{project.subtitle}</p>
      </motion.div>

      {/* Content + Gallery */}
      <div className="flex flex-col lg:flex-row gap-14 mb-16">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </motion.div>

          <motion.div
  variants={itemVariants}
  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
>
  <div className="bg-white/5 p-4 rounded-xl">
    <p className="text-xs text-gray-400">Category</p>
    <p className="font-semibold">{project.subtitle}</p>
  </div>

  <div className="bg-white/5 p-4 rounded-xl">
    <p className="text-xs text-gray-400">Architecture</p>
    <p className="font-semibold">Full Stack</p>
  </div>

  <div className="bg-white/5 p-4 rounded-xl">
    <p className="text-xs text-gray-400">Type</p>
    <p className="font-semibold">Production Project</p>
  </div>
</motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.goals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
            <p className="text-gray-300">{project.outcome}</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {project.live && project.live !== "#" && (
            <motion.a
              variants={itemVariants}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium"
            >
              Visit Live Website
            </motion.a>
          )}
        </motion.div>

        {/* RIGHT GALLERY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col gap-6 mt-8 lg:mt-0"
        >
          <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 gap-6">
            {project.gallery.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Screenshot ${idx + 1}`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl w-full object-cover shadow-md"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <Link
        to="/"
        className="text-blue-400 hover:underline inline-block mt-6"
      >
        ← Back to Home
      </Link>
    </section>
  );
}
