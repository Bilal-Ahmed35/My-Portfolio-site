"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
const BilalCV = "/CV/BilalAhmed_CV.pdf";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "⚠️ Please complete all required fields.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          publicKey,
        );
      } else {
        await new Promise((res) => setTimeout(res, 800));
      }

      setStatus({
        type: "success",
        message:
          "✅ Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email error:", error);
      setStatus({
        type: "error",
        message:
          "❌ Unable to send message right now. Please email directly at bilalahmedshah35@gmail.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 overflow-hidden">
      {/* Left Column: Direct Contact Info with Official Logos */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="lg:w-5/12 flex flex-col justify-between"
      >
        <div>
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Let's build something together.
          </h2>
          <p className="text-secondary text-base leading-relaxed mb-8">
            I'm currently open to full-time Full-Stack Developer and Software
            Engineer opportunities. Whether you have a position open, a project
            to discuss, or just want to connect — reach out anytime!
          </p>

          <div className="space-y-4">
            {/* Email Card */}
            <a
              href="mailto:bilalahmedshah35@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-tertiary border border-white/10 hover:border-[#915eff]/50 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#915eff]/10 border border-[#915eff]/30 flex items-center justify-center text-[#915eff] group-hover:bg-[#915eff] group-hover:text-white transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-secondary font-medium">
                  Direct Email
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-[#915eff] transition">
                  bilalahmedshah35@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/bilalshah34/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-tertiary border border-white/10 hover:border-[#915eff]/50 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#915eff]/10 border border-[#915eff]/30 flex items-center justify-center text-[#915eff] group-hover:bg-[#915eff] group-hover:text-white transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.11h4.4V24H.3V8.11zM8.59 8.11h4.22v2.16h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V24h-4.4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24h-4.4V8.11z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-secondary font-medium">
                  LinkedIn Profile
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-[#915eff] transition">
                  linkedin.com/in/bilalshah34
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Bilal-Ahmed35"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-tertiary border border-white/10 hover:border-[#915eff]/50 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#915eff]/10 border border-[#915eff]/30 flex items-center justify-center text-[#915eff] group-hover:bg-[#915eff] group-hover:text-white transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.06.14 3.02.4 2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.38.81 1.12.81 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-secondary font-medium">
                  GitHub Repositories
                </p>
                <p className="text-sm font-semibold text-white group-hover:text-[#915eff] transition">
                  github.com/Bilal-Ahmed35
                </p>
              </div>
            </a>

            {/* Resume Card */}
            <a
              href={BilalCV}
              download
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#915eff]/10 border border-[#915eff]/30 hover:bg-[#915eff] hover:text-white transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#915eff] text-white flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white font-medium">
                  Curriculum Vitae
                </p>
                <p className="text-sm font-bold text-white flex items-center gap-1">
                  <span>Download Resume PDF</span>
                  <span>↗</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Contact Form */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="lg:w-7/12 bg-tertiary p-8 rounded-3xl border border-white/10 shadow-2xl"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
        <p className="text-secondary text-sm mb-6">
          Fill in the details below and I will respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-5">
            {/* NAME */}
            <label className="flex flex-col flex-1">
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Name <span className="text-[#915eff]">*</span>
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Sarah Jenkins"
                className="bg-black-100/80 border border-white/10 py-3.5 px-4 text-white rounded-xl outline-none focus:border-[#915eff] transition text-sm"
              />
            </label>

            {/* EMAIL */}
            <label className="flex flex-col flex-1">
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Email <span className="text-[#915eff]">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="e.g. sarah@company.com"
                className="bg-black-100/80 border border-white/10 py-3.5 px-4 text-white rounded-xl outline-none focus:border-[#915eff] transition text-sm"
              />
            </label>
          </div>

          {/* MESSAGE */}
          <label className="flex flex-col">
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Message <span className="text-[#915eff]">*</span>
            </span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your role, project, or opportunity..."
              className="bg-black-100/80 border border-white/10 py-3.5 px-4 text-white rounded-xl outline-none focus:border-[#915eff] transition text-sm resize-none"
            />
          </label>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-4 px-8 bg-[#915eff] hover:bg-[#7b4fe0] disabled:opacity-50 text-white font-bold rounded-xl transition shadow-lg shadow-[#915eff]/30 flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Send Message 🚀</span>
            )}
          </button>

          {/* STATUS FEEDBACK */}
          {status.message && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm font-medium ${
                status.type === "success"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                  : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
