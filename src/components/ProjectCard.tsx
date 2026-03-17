import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg border border-border p-5 transition-colors hover:border-accent/50 hover:bg-border/30">
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-border px-2.5 py-0.5 text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4 text-sm">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:underline"
          >
            Source
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:underline"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
