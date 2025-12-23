import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaRocket } from "react-icons/fa";

const principles = [
  {
    icon: <FaCode />,
    title: "Clean & Maintainable Code",
    text: "I write scalable, readable, and production-ready code that follows best practices, ensuring your projects grow efficiently without technical debt.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Modern Technology Stack",
    text: "Leveraging React, Tailwind CSS, Node.js, and modern tools, I build reliable, maintainable, and future-proof web applications.",
  },
  {
    icon: <FaRocket />,
    title: "Performance & UX Focused",
    text: "I prioritize fast load times, smooth interactions, and intuitive user experiences across devices, keeping your users engaged.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-200px] top-1/4 w-[520px] h-[520px] bg-indigo-500/20 blur-[140px] animate-pulse-slow" />
        <div className="absolute right-[-180px] bottom-1/3 w-[420px] h-[420px] bg-purple-500/20 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="text-indigo-400 font-medium mb-4 tracking-wide text-sm md:text-base">
            About Me
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug text-white">
            Building <span className="text-indigo-500">high-performance</span>{" "}
            and scalable web solutions
          </h2>

          <p className="text-zinc-300 text-lg md:text-xl mb-4 leading-relaxed">
            I’m a Full-Stack Developer dedicated to delivering modern, robust,
            and production-ready web applications. I transform complex ideas
            into intuitive and impactful digital products that delight users and
            drive business growth.
          </p>

          <p className="text-zinc-400 text-lg md:text-lg leading-relaxed">
            My work combines solid engineering, thoughtful UI/UX design, and
            performance optimization to ensure every project is maintainable,
            efficient, and future-proof.
          </p>
        </motion.div>

        {/* Right: Principles / floating cards */}
        <div className="relative grid gap-6 md:mt-0 mt-10">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="relative rounded-2xl p-6 border border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex gap-4 shadow-lg hover:shadow-indigo-600/30 transition-all"
            >
              <div className="text-indigo-500 text-3xl mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
              {/* Floating effect */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-500/30 rounded-full blur-xl -z-10 animate-pulse-slow"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
