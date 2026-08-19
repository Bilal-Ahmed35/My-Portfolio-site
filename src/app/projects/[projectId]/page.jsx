import ProjectDetail from "../../../components/ProjectDetail";
import { projects } from "../../../constants";

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { projectId } = await params;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return {
      title: "Project Not Found | Bilal Ahmed",
    };
  }

  const imageUrl =
    typeof project.image === "string"
      ? project.image
      : project.image?.src || "";

  return {
    title: `${project.name} | Bilal Ahmed Case Study`,
    description: project.description,

    alternates: {
      canonical: `/projects/${projectId}`,
    },

    openGraph: {
      type: "article",
      title: `${project.name} | Bilal Ahmed Case Study`,
      description: project.description,
      url: `https://bilalahmed35.vercel.app/projects/${projectId}`,
      images: [
        {
          url: imageUrl,
          alt: project.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Bilal Ahmed Case Study`,
      description: project.description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { projectId } = await params;
  return <ProjectDetail projectId={projectId} />;
}
