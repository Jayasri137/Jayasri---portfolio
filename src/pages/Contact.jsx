import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactItems = [
    {
      href: "mailto:jayasrimurugesan137@gmail.com",
      icon: <Mail className="text-red-500" />,
      label: "Email",
    },
    {
      href: "tel:+917708703137",
      icon: <Phone className="text-green-500" />,
      label: "Phone",
    },
    {
      href: "https://www.linkedin.com/in/jayasri7",
      icon: <Linkedin className="text-blue-600" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Jayasri137",
      icon: <Github className=" text-black" />,
      label: "GitHub",
    },
    {
      href: "https://wa.me/917708703137",
      icon: <MessageCircle className="text-green-400" />,
      label: "WhatsApp",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto md:mt-32 mb-12 md:mb-32 px-6 rounded-3xl"
     style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(22,6,33,0.88), rgba(22,16,33,0.95)),
          url('/image.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Let’s Work Together
        </h2>
        <p className="text-gray-300 mb-10 max-w-xl mx-auto">
          I’m open to full-time roles, internships, freelance projects, and collaborations. Feel free to reach out through any platform below.
        </p>

        {/* Contact Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {contactItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.1 }}
              className="flex flex-col items-center gap-2 text-gray-300 transition"
            >
              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 backdrop-blur-sm transition flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-sm">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 20px rgba(255,255,255,0.2)",
          }}
          href="mailto:jayasrimurugesan137@gmail.com"
          className="inline-block px-8 py-3 bg-white/90 text-black rounded-xl font-medium transition-all backdrop-blur-sm"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}
