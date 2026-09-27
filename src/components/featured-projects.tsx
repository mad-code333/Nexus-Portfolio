import Image from "next/image";
import { featuredProjects, isExternalProjectLink, projectImage } from "@/data/portfolio";

export function FeaturedProjects() {
  const reel = [...featuredProjects, ...featuredProjects];

  return (
    <section id="projects" className="overflow-hidden py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <h2 className="font-serif text-[2rem] font-medium leading-tight tracking-[-0.02em] text-cream md:text-[2.35rem]">
          Featured Projects
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Explore our portfolio of innovative solutions and successful implementations.
        </p>
      </div>
      <div className="feature-reel mt-10">
        <div className="feature-track flex w-max gap-5 md:gap-6">
          {reel.map((project, index) => {
            const external = isExternalProjectLink(project.link);
            return (
              <a
                key={`${project.id}-${index}`}
                href={project.link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={project.title}
                className="relative block h-[240px] w-[82vw] shrink-0 overflow-hidden rounded-2xl bg-black/20 sm:h-[340px] sm:w-[560px] lg:h-[440px] lg:w-[760px]"
              >
                <Image
                  src={projectImage(project)}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 82vw, 760px"
                  className="object-cover"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
