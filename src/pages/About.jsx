import { motion } from "framer-motion";
import profilePic from "../assets/profile.png";

export default function About() {
  const education = [
    { degree: "MBA", institution: "Kangeyam Group Of Institutions", years: "2022–2024", gpa: "8.37" },
    { degree: "B.Sc. Computer Science", institution: "Nirmala College For Women", years: "2019–2022", gpa: "7.7" },
  ];

  const experience = [
    { role: "React JS Intern", company: "ITBOOMI Innovation", years: "Aug 2025 – Nov 2025", details: "Built React components, integrated APIs, collaborated with UI teams." },
    { role: "Jr. Order Processing", company: "AKR Industries Pvt Ltd", years: "Mar 2024 – Aug 2025", details: "Managed high-volume orders and optimized workflows." },
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto md:mt-32 px-6 md:py-12 sm:px-12 md:px-24 rounded-3xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(23,6,43,0.9), rgba(23,16,43,0.95)), url('/vs code.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top: Profile & Intro */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 mt-16 group relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-3xl opacity-70 group-hover:opacity-90 transition-all"></div>
          <div className="relative p-4 mt-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg hover:scale-105 transition-transform">
            <img
              src={profilePic}
              alt="Jayasri Murugesan"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-75 rounded-3xl object-cover"
            />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 md:mt-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I’m a Frontend Developer specializing in React.js. I build modern, responsive,
            and high-performance web applications that not only look great but also provide smooth user experiences.
            With a strong foundation in JavaScript, HTML, CSS, and modern frameworks, I focus on writing clean,
            maintainable code while staying up-to-date with the latest web technologies.
            <br/><br/>
            Over the years, I have gained experience in both corporate and internship projects, 
            including building landing pages, admin dashboards, and interactive panels. 
            My work emphasizes performance optimization, responsive design, accessibility, and smooth animations, 
            ensuring that applications run flawlessly across devices and platforms.
            {/* <br/><br/>
            I enjoy collaborating with UI/UX designers, backend developers, and other frontend engineers to 
            deliver complete solutions. My approach is problem-solving oriented, meaning I not only implement 
            features but also optimize workflows, improve code quality, and enhance user experience. */}
          </p>
        </motion.div>
      </div>

      {/* Education & Experience Parallel Row */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
          <ul className="space-y-3">
            {education.map((edu, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.03, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-gray-300 transition-all"
              >
                <span className="font-semibold text-white">{edu.degree}</span> – {edu.institution} <br/> ({edu.years}) | GPA: {edu.gpa}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
          <ul className="space-y-3">
            {experience.map((exp, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.03, color: "#fff" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-gray-300 transition-all"
              >
                <span className="font-semibold text-white">{exp.role}</span> – {exp.company} ({exp.years})
                <p className="text-gray-400 text-sm mt-1">{exp.details}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
