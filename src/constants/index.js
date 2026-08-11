import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  hydrafoxLogo,
  rentacar,
  collabTodo,
  nbx,
  atsResumeBuilder,
  casawood,
} from "../assets";

// Official Tech Logos (Devicon & VectorLogos SVG URLs for precise technology branding)
const nextjsIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
const expressIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
const postgresqlIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
const firebaseIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg";
const postmanIcon = "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg";
const vercelIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg";
const netlifyIcon = "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg";
const jwtIcon = "https://jwt.io/img/pic_logo.svg";
const geminiIcon = "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a611345.svg";
const restApiIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React, Next.js, Node.js, and modern databases.",
    icon: web,
  },
  {
    title: "Frontend Engineering",
    description: "Crafting fast, responsive, and accessible user interfaces with React, TypeScript & Tailwind CSS.",
    icon: mobile,
  },
  {
    title: "Backend & REST APIs",
    description: "Architecting secure RESTful microservices, authentication systems, and database schemas.",
    icon: backend,
  },
  {
    title: "AI & API Integrations",
    description: "Integrating LLMs (Google Gemini), third-party APIs, and modern cloud services into applications.",
    icon: creator,
  },
];

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced", icon: reactjs },
      { name: "Next.js", level: "Advanced", icon: nextjsIcon },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: javascript },
      { name: "TypeScript", level: "Intermediate", icon: typescript },
      { name: "Tailwind CSS", level: "Advanced", icon: tailwind },
      { name: "HTML5", level: "Advanced", icon: html },
      { name: "CSS3", level: "Advanced", icon: css },
      { name: "Redux Toolkit", level: "Intermediate", icon: redux },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced", icon: nodejs },
      { name: "Express.js", level: "Advanced", icon: expressIcon },
      { name: "REST APIs", level: "Advanced", icon: restApiIcon },
      { name: "JWT Auth", level: "Intermediate", icon: jwtIcon },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: mongodb },
      { name: "PostgreSQL", level: "Intermediate", icon: postgresqlIcon },
      { name: "Firebase", level: "Intermediate", icon: firebaseIcon },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: git },
      { name: "Postman", level: "Advanced", icon: postmanIcon },
      { name: "Docker", level: "Intermediate", icon: docker },
      { name: "Vercel", level: "Advanced", icon: vercelIcon },
      { name: "Netlify", level: "Advanced", icon: netlifyIcon },
      { name: "Figma", level: "Intermediate", icon: figma },
    ],
  },
  {
    category: "AI",
    skills: [
      { name: "Google Gemini API", level: "Advanced", icon: geminiIcon },
      { name: "Prompt Engineering", level: "Advanced", icon: geminiIcon },
      { name: "AI Web Integrations", level: "Advanced", icon: geminiIcon },
    ],
  },
];

const technologies = [
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjsIcon },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Figma", icon: figma },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Hydrafox Designs",
    icon: hydrafoxLogo,
    iconBg: "#0188E3",
    date: "Jan 2025 - Present",
    points: [
      "Delivered production-ready full-stack websites and client applications using the MERN stack (MongoDB, Express, React, Node.js).",
      "Designed reusable React & Tailwind CSS components backed by modular Node.js microservices and RESTful API endpoints.",
      "Implemented JWT authentication, contact form processing, and smooth UI transitions to maximize user engagement.",
      "Translated client designs from Figma and Adobe XD into responsive, search-optimized web applications.",
    ],
  },
  {
    title: "SEO & Full Stack Developer",
    company_name: "Client & Freelance Projects",
    icon: backend,
    iconBg: "#151030",
    date: "Aug 2024 - Present",
    points: [
      "Optimized web applications for search performance using semantic HTML structure, dynamic metadata, and sitemap generation.",
      "Implemented technical SEO best practices in React/Next.js apps, achieving high Lighthouse scores across Performance, SEO, and Accessibility.",
      "Integrated analytics tracking, conversion funnels, and dynamic lead-capture systems for business clients.",
      "Combined frontend design with backend API integration to deliver complete end-to-end web products.",
    ],
  },
];

const educationData = [
  {
    degree: "Bachelor of Software Engineering (BS SE)",
    institution: "Usman Institute of Technology — Karachi",
    period: "2023 – 2027 (Expected)",
    description:
      "Gaining rigorous training in Software Engineering principles, Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Architecture, and Web Engineering.",
    highlights: [
      "Core coursework: Data Structures, OOP, Software Architecture, Database Systems, Web Engineering",
      "Active participant in tech hackathons including the ReImagine Hackathon",
      "Hands-on full-stack software development alongside academic curriculum",
    ],
  },
];

const whyWorkWithMeData = [
  {
    title: "Full-Stack Thinking",
    description: "I manage the entire application lifecycle — from responsive UI design to backend API creation, database architecture, authentication, and cloud deployment.",
    icon: "⚡",
  },
  {
    title: "Real-World Focus",
    description: "I prioritize building functional applications that solve actual user problems (AI ATS scoring, real-time collaboration, e-commerce) over basic UI clones.",
    icon: "🎯",
  },
  {
    title: "Modern Tech Stack",
    description: "I stay on the cutting edge using React 19, Next.js, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and AI API integrations.",
    icon: "🚀",
  },
  {
    title: "Engineering Rigor",
    description: "I write clean, modular, and maintainable code with strong git practices, performance optimization, SEO standards, and responsive accessibility.",
    icon: "🛠️",
  },
];

const projects = [
  {
    id: "ats-resume-builder",
    name: "AI-Powered ATS Resume Builder",
    tagline: "AI-driven resume optimization & ATS compatibility analysis",
    description:
      "An intelligent platform that analyzes candidate resumes against job descriptions, evaluates ATS compatibility, and uses Google Gemini AI to generate impact-focused bullet points and keyword enhancements.",
    featured: true,
    category: "AI",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "gemini-api", color: "orange-text-gradient" },
    ],
    image: atsResumeBuilder,
    source_code_link: "https://github.com/Bilal-Ahmed35/AI-Powered_ATS-Resume-Builder",
    live_website_link: "https://ai-powered-ats-resume-builder-three.vercel.app/",
    case_study_link: "/projects/ats-resume-builder",
    keyFeatures: [
      "AI resume content analysis powered by Google Gemini 3.5 Flash",
      "Job-description matching & real-time ATS compatibility scoring",
      "Automated bullet point generation and action-verb enhancement",
      "Instant PDF preview and print-ready document export",
      "Responsive stateful dashboard built with React 18 & TypeScript",
    ],
    problem:
      "Job seekers struggle to optimize their resumes for automated Applicant Tracking Systems (ATS), resulting in rejected applications despite strong candidate qualifications.",
    solution:
      "Built a web application leveraging LLM APIs (Google Gemini) to analyze resume text against specific target job descriptions, delivering instant scoring breakdown and contextual recommendations.",
    architecture:
      "React Frontend (Vite + TypeScript) → Gemini AI Prompt Pipeline → Dynamic Scoring Engine → PDF Layout Renderer",
    challenges: [
      "Crafting deterministic prompts to receive structured JSON feedback from LLMs for scoring calculations",
      "Managing complex nested resume state without compromising frontend rendering performance",
      "Ensuring precise CSS print layout styling for seamless single-page and two-page PDF exports",
    ],
  },
  {
    id: "casawood",
    name: "Casawood — Luxury E-Commerce Platform",
    tagline: "Full-stack e-commerce experience for handcrafted wooden furniture",
    description:
      "A modern luxury e-commerce application featuring interactive product catalog filtering, persistent cart state management, Firebase user authentication, and Vercel serverless order processing.",
    featured: true,
    category: "Full Stack",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
    ],
    image: casawood,
    source_code_link: "https://github.com/Bilal-Ahmed35/Casawood",
    live_website_link: "https://casawood.vercel.app/",
    case_study_link: "/projects/casawood",
    keyFeatures: [
      "Interactive multi-attribute product filtering and instant search",
      "Persistent cart state synchronization with LocalStorage backup",
      "Secure user authentication and profile management via Firebase",
      "Vercel serverless endpoint processing for checkout orders",
      "Modern luxury UI with smooth micro-interactions & image optimization",
    ],
    problem:
      "Bespoke furniture retailers require elegant digital storefronts that match their physical product quality while delivering fast browsing and frictionless checkout.",
    solution:
      "Designed and developed a custom React & TypeScript storefront with modular catalog components, instant category filtering, and serverless order handling.",
    architecture:
      "React + TypeScript Frontend → Firebase Authentication → LocalStorage Cart State → Vercel Serverless Functions",
    challenges: [
      "Maintaining high image performance and fast LCP across high-resolution product photography",
      "Structuring clean state management for shopping cart items with options and dynamic quantities",
    ],
  },
  {
    id: "collab-todo",
    name: "Collab Todo — Real-Time Task Manager",
    tagline: "Collaborative task workspace for team productivity",
    description:
      "A full-stack collaborative task management application enabling multiple users to organize, assign, and track task items in real time with a clean React and Tailwind CSS UI.",
    featured: true,
    category: "Full Stack",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
    ],
    image: collabTodo,
    source_code_link: "https://github.com/Bilal-Ahmed35/Collaborative-frontend",
    live_website_link: "https://collaborative-frontend-ten.vercel.app/",
    case_study_link: "/projects/collab-todo",
    keyFeatures: [
      "Multi-user task creation, editing, and status updates",
      "RESTful API backend built with Express.js and Node.js",
      "MongoDB database modeling with Mongoose schemas",
      "Secure user registration and session management",
      "Clean responsive Kanban/List view built with Tailwind CSS",
    ],
    problem:
      "Small teams need simple, clutter-free task management tools that allow instant shared task updates without steep learning curves.",
    solution:
      "Created a lightweight MERN application with modular REST API endpoints and responsive frontend views for team task tracking.",
    architecture:
      "React Frontend → Express REST API → MongoDB Atlas Database → JWT Auth Middleware",
    challenges: [
      "Handling concurrent task updates and backend validation gracefully",
      "Building clean reusable UI components for modal forms and status tags",
    ],
  },
  {
    id: "rent-a-car",
    name: "Rent a Car Platform",
    tagline: "On-demand car rental booking web app",
    description:
      "A modern car rental web application where users can explore vehicle fleets, view specs and pricing, calculate rental periods, and submit reservation requests.",
    featured: false,
    category: "Full Stack",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: rentacar,
    source_code_link: "https://github.com/Bilal-Ahmed35/Rent-A-Car-FrontEnd",
    live_website_link: "https://rents-a-cars.vercel.app/",
    case_study_link: "/projects/rent-a-car",
    keyFeatures: [
      "Dynamic vehicle showcase with category filtering",
      "Interactive rental calculator based on date ranges",
      "Booking inquiry submission workflow",
      "Mobile-optimized responsive grid layout",
    ],
    problem: "Car rental businesses need clean digital reservation portals to capture customer inquiries online.",
    solution: "Developed an intuitive vehicle listing platform with detailed modals and booking request workflows.",
    architecture: "React Frontend → Firebase/Node API → Responsive UI",
    challenges: ["Ensuring smooth image carousel transitions on mobile devices"],
  },
  {
    id: "nbx-capitals",
    name: "NBX Real Estate & Capital Investment",
    tagline: "Real estate investment portal & landing page",
    description:
      "A commercial real estate web portal designed for NBX Capitals, allowing investors to explore property portfolios, review financial projections, and connect with investment advisors.",
    featured: false,
    category: "Frontend",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html/css", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: nbx,
    source_code_link: "https://github.com/Bilal-Ahmed35/NBX-Capital-Investment",
    live_website_link: "https://nbx-capitals-investments.netlify.app/",
    case_study_link: "/projects/nbx-capitals",
    keyFeatures: [
      "High-conversion investment portfolio presentation",
      "Property details showcase with responsive media galleries",
      "Lead generation contact form with backend submission tracking",
    ],
    problem: "Investment firm needed a modern, trustworthy web presence to present real estate investment opportunities.",
    solution: "Built a fast, search-engine optimized web portal featuring clear value propositions and lead capture.",
    architecture: "Frontend Web Stack → Firebase Integration → Netlify Hosting",
    challenges: ["Optimizing asset loading for quick mobile engagement"],
  },
];

export {
  services,
  skillCategories,
  technologies,
  experiences,
  educationData,
  whyWorkWithMeData,
  projects,
};
