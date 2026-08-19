import "./globals.css";
import "react-vertical-timeline-component/style.min.css";

export const metadata = {
  title: "Bilal Ahmed | Full-Stack Developer",
  description:
    "Full-Stack Developer building modern web applications with React, Next.js, Node.js, Express, MongoDB, PostgreSQL & AI integrations. Software Engineering student at UIT.",
  keywords:
    "Bilal Ahmed, Full-Stack Developer, Software Engineer, React Developer, Next.js Developer, Node.js Developer, MERN Stack, Web Application Developer, Pakistan",
  authors: [{ name: "Bilal Ahmed" }],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://bilalahmed35.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://bilalahmed35.vercel.app/",
    title: "Bilal Ahmed | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web applications with React, Next.js, Node.js, MongoDB & AI features.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bilal Ahmed Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Ahmed | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web applications with React, Next.js, Node.js, MongoDB & AI features.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bilal Ahmed",
              jobTitle: "Full-Stack Developer",
              url: "https://bilalahmed35.vercel.app/",
              sameAs: [
                "https://github.com/Bilal-Ahmed35",
                "https://www.linkedin.com/in/bilalshah34/",
              ],
              knowsAbout: [
                "Full-Stack Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "REST APIs",
                "AI API Integration",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Usman Institute of Technology",
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#050816] text-white antialiased">{children}</body>
    </html>
  );
}
