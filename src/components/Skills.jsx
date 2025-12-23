import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaClipboardList,
  FaDocker,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiJest,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: 95, icon: <FaHtml5 /> },
      { name: "CSS / Tailwind", level: 90, icon: <FaCss3Alt /> },
      { name: "JavaScript", level: 92, icon: <FaJsSquare /> },
      { name: "TypeScript", level: 85, icon: <SiTypescript /> },
      { name: "React.js", level: 88, icon: <FaReact /> },
      { name: "Next.js", level: 80, icon: <SiNextdotjs /> },
      {
        name: "State Management (Redux / Zustand)",
        level: 80,
        icon: <SiRedux />,
      },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, icon: <FaNodeJs /> },
      { name: "Express.js", level: 80, icon: <FaServer /> },
      { name: "MongoDB ", level: 80, icon: <FaDatabase /> },
      { name: "GraphQL & REST API ", level: 80, icon: <SiGraphql /> },

      { name: "Docker & Deployment", level: 70, icon: <FaDocker /> },
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 90, icon: <FaGitAlt /> },
      { name: "Figma / UI Design", level: 70, icon: <FaFigma /> },
      { name: "Postman / API Testing", level: 80, icon: <FaClipboardList /> },
      { name: "CI/CD / Vercel / Render", level: 85, icon: <FaServer /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] right-1/4 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px]" />
        <div className="absolute bottom-[-120px] left-1/3 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-white text-center"
        >
          My Professional Skills
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.category}
              whileHover={{ scale: 1.03 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-zinc-800 hover:shadow-indigo-600/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2 text-indigo-400 font-medium">
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-zinc-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        whileHover={{
                          boxShadow: "0 0 10px rgba(99,102,241,0.7)",
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Power statement CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-4">
            Leveraging this diverse skill set, I craft scalable, secure, and
            high-performance web applications. Every project is built to deliver
            real business impact and exceptional user experiences.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition"
          >
            Explore My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
