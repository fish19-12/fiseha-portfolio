import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/4 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-120px] right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-white"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <motion.div
                className="bg-zinc-800 rounded-3xl shadow-2xl overflow-hidden cursor-pointer flex flex-col hover:shadow-indigo-600/30 transition-all relative group"
                whileHover={{ scale: 1.03 }}
              >
                {/* Project Image */}
                <motion.div
                  className="relative w-full aspect-[16/9] md:aspect-[4/3] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500"
                  />
                  {/* Overlay for hover title */}
                  <motion.div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {p.title}
                    </h3>
                  </motion.div>
                </motion.div>

                {/* Animated Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="text-xl md:text-2xl font-bold text-white mt-4 mb-2 px-5"
                >
                  {p.title}
                </motion.h3>

                {/* Description + tech badges + buttons */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-zinc-400 mb-3 flex-1">{p.description}</p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-800 mb-3">
                    {p.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 whitespace-nowrap"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 md:flex-row flex-col mt-auto">
                    {p.deployed && (
                      <a
                        href={p.deployed}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-800 hover:text-white transition"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Floating accent circle */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-500/30 rounded-full blur-xl -z-10 animate-pulse-slow"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
