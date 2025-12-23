import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Fiseha Lidetu. All rights reserved.
        </p>

        <div className="hidden md:block border-t border-zinc-700 flex-1 mx-6"></div>

        <div className="flex gap-5">
          <a
            href="https://github.com/fish19-12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-400 transition-transform transform hover:scale-110"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/fiseha-lidetu-23610a380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-400 transition-transform transform hover:scale-110"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://t.me/fishoool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-indigo-400 transition-transform transform hover:scale-110"
          >
            <FaTelegramPlane size={20} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-zinc-500 md:hidden">
        Built with React, TailwindCSS & Framer Motion.
      </div>
    </footer>
  );
}
