import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FiDownload } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTelegram } from "react-icons/si";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

export default function Hero() {
  const badges = [
    { icon: <FaReact />, label: "React", x: -120, y: -60 },
    { icon: <FaNodeJs />, label: "Node.js", x: 100, y: -40 },
    { icon: <FaCss3Alt />, label: "Tailwind", x: -50, y: 120 },
    { icon: <SiExpress />, label: "Express", x: 80, y: 80 },
    { icon: <SiMongodb />, label: "MongoDB", x: -100, y: 100 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
      <Particles
        className="absolute inset-0 -z-20"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#6366f1" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: { min: 2, max: 5 } },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outMode: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="relative max-w-6xl w-full flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col text-center sm:text-left items-center sm:items-start"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            Available for work
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] mb-4 sm:mb-6 text-white">
            Hi <span className="inline-block animate-wave">👋</span>, I’m{" "}
            <span className="text-indigo-500">Fiseha Lidetu</span>
            <br />
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer – Building Scalable Web Apps",
                  "React & Node.js Expert – Modern UI/UX Focused",
                  "Delivering Reliable, High-Performance Solutions",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="text-zinc-400 text-lg max-w-md mb-6 sm:mb-8 leading-relaxed">
            I craft fast, responsive, and secure web applications tailored to
            client needs. Leveraging modern technologies like{" "}
            <span className="text-indigo-400 font-semibold">
              React, Node.js, Express, MongoDB, and Tailwind CSS
            </span>
            , I deliver scalable solutions that enhance user experience,
            optimize performance, and accelerate business growth.
          </p>

          <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
            >
              Explore Projects
            </a>
            <a
              href="/Fish_Resume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-zinc-700 flex items-center gap-2 hover:bg-zinc-800 transition"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="flex gap-6 mt-2 text-xl text-zinc-400 justify-center sm:justify-start">
            <a
              href="https://github.com/fish19-12"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/fiseha-lidetu-23610a380"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/fishoool"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <SiTelegram />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center sm:justify-end flex-1"
        >
          <div className="relative w-48 sm:w-64 md:w-72 lg:w-80">
            <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-2xl -z-10" />
            <img
              src={profile}
              alt="Profile"
              className="relative w-full h-auto md:h-96 object-cover rounded-3xl border border-zinc-800 shadow-2xl"
            />

            {badges.map((badge, index) => (
              <motion.div
                key={badge.label}
                whileHover={{ scale: 1.2 }}
                animate={{
                  y: [0, badge.y, 0],
                  x: [0, badge.x, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 6 + index,
                  ease: "easeInOut",
                }}
                className="absolute z-30 flex items-center gap-2 px-3 py-2 bg-zinc-900/80 backdrop-blur-md rounded-full shadow-lg text-white text-sm"
                style={{
                  top: "50%",
                  left: "50%",
                  translateX: "-50%",
                  translateY: "-50%",
                }}
              >
                {badge.icon}
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
