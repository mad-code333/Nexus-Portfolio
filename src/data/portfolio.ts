import catalog from "./projects.json";

export type ProjectCategory = (typeof catalog.categories)[number]["id"];

export type PortfolioProject = {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  features: string;
  impact: string;
};

export const categories = catalog.categories;
export const projects = catalog.projects as PortfolioProject[];

const byId = new Map(projects.map((project) => [project.id, project]));

export const featuredProjects = catalog.featured.map((id) => {
  const project = byId.get(id);
  if (!project) throw new Error(`Missing featured project ${id}`);
  return project;
});

export function getProject(id: string) {
  return byId.get(id);
}

export function projectImage(project: PortfolioProject) {
  return `/projects/${project.image}`;
}

export function isExternalProjectLink(link: string) {
  return link.startsWith("http://") || link.startsWith("https://");
}
