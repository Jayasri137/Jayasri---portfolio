import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  { id: "dotetrans", title: "DotEtrans Landing Page", image: "/src/assets/dotetrans/dotetranz.png" },
  { id: "cookdin", title: "Cookdin Admin Panel", image: "/src/assets/cookdin/adminsub.jpeg" },
  { id: "connectmeet", title: "Connect & Meet Admin Panel", image: "/src/assets/connect&meet/adminpanal.png" },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto md:mt-32 px-6 py-16 rounded-3xl"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(23,6,43,0.85), rgba(23,16,43,0.95)),
          url('/codImg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl sm:text-5xl text-white text-center font-bold mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Highlighted Project */}
        <div className="md:col-span-2 flex flex-col items-center">
          <motion.div
            onClick={() => navigate(`/projects/${projects[0].id}`)}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer w-full md:w-2/5 rounded-3xl overflow-hidden shadow-lg"
          >
            <img src={projects[0].image} className="rounded-xl w-full h-[320px]" />
          </motion.div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mt-4">
            {projects[0].title}
          </h3>
        </div>

        {/* Other Projects */}
        {projects.slice(1).map((p) => (
          <div key={p.id} className="flex flex-col items-center">
            <motion.div
              onClick={() => navigate(`/projects/${p.id}`)}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer rounded-3xl overflow-hidden shadow-md w-full"
            >
              <img src={p.image} className="rounded-xl w-full h-[320px]" />
            </motion.div>
            <h3 className="text-white text-lg sm:text-xl font-semibold text-center mt-3">
              {p.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
