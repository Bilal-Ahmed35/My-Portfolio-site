"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { projects } from "../constants";

const ProjectDetail = ({ projectId: propProjectId }) => {
  const params = useParams();
  const projectId = propProjectId || params?.projectId;
  const router = useRouter();

  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050816] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-secondary mb-8">The project case study you are looking for does not exist.</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-[#915eff] text-white font-semibold hover:bg-[#7b4fe0] transition"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Find next project for bottom navigation
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-[#915eff] selection:text-white">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#050816]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-secondary hover:text-white text-sm font-medium transition cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </button>

          <div className="flex items-center gap-3">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-xs font-semibold transition"
              >
                GitHub Repository
              </a>
            )}
            {project.live_website_link && (
              <a
                href={project.live_website_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#915eff] hover:bg-[#7b4fe0] text-xs font-semibold transition shadow-md shadow-[#915eff]/30"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Case Study Banner Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#915eff] bg-[#915eff]/10 rounded-full border border-[#915eff]/30">
              Case Study
            </span>
            <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-tertiary rounded-full border border-white/10">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            {project.name}
          </h1>
          <p className="text-xl text-secondary max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="px-3 py-1 text-xs font-medium bg-[#151030] text-gray-300 rounded-md border border-white/5"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Project Main Image / Mockup */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-tertiary shadow-2xl mb-16">
          <img
            src={typeof project.image === "string" ? project.image : project.image?.src || project.image}
            alt={`${project.name} showcase`}
            className="w-full h-auto object-cover max-h-[550px]"
          />
        </div>

        {/* Overview & Problem & Solution Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-tertiary/60 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-[#915eff] rounded-full inline-block"></span>
                Project Overview
              </h2>
              <p className="text-secondary text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Problem & Solution */}
            {project.problem && (
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-tertiary/40 border border-red-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center gap-2">
                    <span>⚠️</span> The Problem
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-tertiary/40 border border-emerald-500/20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2">
                    <span>💡</span> The Solution
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </section>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <section className="bg-tertiary/60 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#915eff] rounded-full inline-block"></span>
                  Key Features & Capabilities
                </h2>
                <ul className="space-y-4">
                  {project.keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#915eff] font-bold mt-1">✓</span>
                      <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technical Challenges */}
            {project.challenges && (
              <section className="bg-tertiary/60 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-[#915eff] rounded-full inline-block"></span>
                  Technical Challenges & Engineering Decisions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black-100/60 border border-white/5 flex items-start gap-3"
                    >
                      <span className="px-2 py-1 bg-[#915eff]/20 text-[#915eff] rounded text-xs font-bold">
                        0{idx + 1}
                      </span>
                      <p className="text-secondary text-sm leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Details Box */}
            <div className="bg-tertiary border border-white/10 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
                Project Metadata
              </h3>

              <div>
                <p className="text-xs uppercase tracking-wider text-secondary font-medium">Role</p>
                <p className="text-sm font-semibold text-white mt-1">Lead Full-Stack Developer</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-secondary font-medium">Category</p>
                <p className="text-sm font-semibold text-white mt-1">{project.category}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-secondary font-medium">Core Stack</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((t) => (
                    <span key={t.name} className="px-2.5 py-1 text-xs bg-black-100 text-white rounded font-mono">
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              {project.architecture && (
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-secondary font-medium mb-2">High-Level Flow</p>
                  <p className="text-xs font-mono text-gray-300 bg-black-100 p-3 rounded-lg border border-white/5 leading-relaxed">
                    {project.architecture}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 space-y-3">
                {project.live_website_link && (
                  <a
                    href={project.live_website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#915eff] hover:bg-[#7b4fe0] text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-[#915eff]/20"
                  >
                    <span>Launch Live App</span>
                    <span>↗</span>
                  </a>
                )}
                {project.source_code_link && (
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
                  >
                    <span>View GitHub Source</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Footer Bar */}
        <div className="border-t border-white/10 pt-12 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="text-secondary hover:text-white font-medium text-sm transition flex items-center gap-2"
          >
            ← Back to All Projects
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group px-6 py-4 rounded-2xl bg-tertiary border border-white/10 hover:border-[#915eff]/50 flex items-center gap-4 transition"
          >
            <div className="text-right">
              <p className="text-xs text-secondary font-medium">Next Case Study</p>
              <p className="text-base font-bold text-white group-hover:text-[#915eff] transition">
                {nextProject.name}
              </p>
            </div>
            <span className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#915eff] text-white flex items-center justify-center transition">
              →
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
