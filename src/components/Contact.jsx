import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mf4qiry",
        "template_o71r2jq",
        formRef.current,
        "ySNTkzvx-Z4sPxXCy"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-zinc-900 text-white overflow-hidden"
    >
   
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px]" />
        <div className="absolute -bottom-28 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold">Get In Touch</h2>
          <p className="text-zinc-400 text-lg">
            Have a project in mind or just want to say hi? Fill out the form and
            I’ll get back to you as soon as possible.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center gap-3">
              <FiMail className="text-indigo-500 text-2xl" />
              <span>fisehalidetu12@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-indigo-500 text-2xl" />
              <span>+251 919 458 210</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-indigo-500 text-2xl" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </motion.div>

        
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-800 p-10 rounded-3xl shadow-xl flex flex-col gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
          />

          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="p-4 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
          />

          <button
            type="submit"
            className="px-8 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
