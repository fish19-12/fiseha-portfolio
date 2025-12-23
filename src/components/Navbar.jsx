import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiCode, FiGrid, FiMail } from "react-icons/fi";

const items = [
  { id: "home", icon: FiHome },
  { id: "about", icon: FiUser },
  { id: "skills", icon: FiCode },
  { id: "projects", icon: FiGrid },
  { id: "contact", icon: FiMail },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [showMobileTop, setShowMobileTop] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(docHeight > 0 ? current / docHeight : 0);

      // mobile top hide/show
      setShowMobileTop(current < lastScroll || current < 72);
      lastScroll = current;

      const spyY = current + window.innerHeight * 0.45;

      for (const { id } of items) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (
          spyY >= section.offsetTop &&
          spyY < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
          break;
        }
      }

      if (current < 50) setActive("home");
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll handler (Home fix)
  const scrollTo = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3">
        <span className="font-semibold text-indigo-400">Fiseha Lidetu</span>

        <div className="ml-auto flex gap-8 text-sm">
          {items.map(({ id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative capitalize transition-colors ${
                active === id ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {id}
              {active === id && (
                <motion.span
                  layoutId="desktop-active"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-white/70"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={{ y: showMobileTop ? 0 : -64 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-xl"
      >
        {/* scroll progress line */}
        <motion.div
          className="h-[1px] bg-white/40"
          style={{ scaleX: progress, transformOrigin: "left" }}
        />

        <div className="px-4 py-3 flex flex-col leading-tight">
          <span className="text-sm font-medium text-white/90">
            Fiseha Lidetu
          </span>
          <span className="text-[11px] text-white/50 tracking-wide">
            Portfolio
          </span>
        </div>
      </motion.div>

      {/* ================= Mobile Bottom Navbar ================= */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-12 px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
          {items.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative flex items-center justify-center"
            >
              <Icon
                className={`text-[17px] transition-colors ${
                  active === id ? "text-white" : "text-white/50"
                }`}
              />

              {active === id && (
                <motion.span
                  layoutId="mobile-active"
                  className="absolute -bottom-2 h-[1.5px] w-5 rounded bg-white/70"
                />
              )}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
