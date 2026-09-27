import Image from "next/image";
import { featuredProjects, isExternalProjectLink, projectImage } from "@/data/portfolio";

export function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-[1120px] px-6 py-16 md:py-20">
      <h2 className="font-serif text-[2rem] font-medium leading-tight tracking-[-0.02em] text-cream md:text-[2.35rem]">
        Featured Projects
      </h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Explore our portfolio of innovative solutions and successful implementations.
      </p>
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => {
          const external = isExternalProjectLink(project.link);
          return (
            <article key={project.id}>
              <a
                href={project.link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black/20">
                  <Image
                    src={projectImage(project)}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-cream">{project.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-3 inline-flex items-center gap-1 text-[13px] text-cream/90 transition group-hover:text-[#d86555]">
                  View project
                  <span aria-hidden>→</span>
                </span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
