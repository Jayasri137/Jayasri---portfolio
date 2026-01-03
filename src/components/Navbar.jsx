import { useState, useEffect } from "react";

const sections = ["home", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // mobile menu state

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 sm:px-6 lg:px-0">
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center gap-6 px-8 py-3 rounded-full bg-white/5 backdrop-blur border border-white/10 shadow-lg transition-all duration-300">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className={`text-sm uppercase tracking-wide transition-all duration-300 ${
              active === sec
                ? "text-white font-semibold scale-110"
                : "text-gray-400 hover:text-white hover:scale-105"
            }`}
          >
            {sec}
          </a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex justify-between items-center bg-white/5 backdrop-blur border border-white/10 px-4 py-3 rounded-full shadow-lg">
        <span className="text-white font-semibold uppercase tracking-wide">Menu</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="sm:hidden mt-2 flex flex-col gap-4 bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 shadow-lg animate-fade-in">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setIsOpen(false)}
              className={`text-sm uppercase tracking-wide transition-all duration-300 ${
                active === sec
                  ? "text-white font-semibold scale-105"
                  : "text-gray-400 hover:text-white hover:scale-105"
              }`}
            >
              {sec}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
