export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A high-throughput event processing pipeline built with Go and Kafka. Handles millions of events per day with sub-second latency.",
    tech: ["Go", "Kafka", "PostgreSQL", "Docker"],
    repo: "https://github.com/srikardurgi/project-alpha",
  },
  {
    title: "Project Beta",
    description:
      "REST API framework with built-in authentication, rate limiting, and observability. Designed for rapid backend prototyping.",
    tech: ["Python", "FastAPI", "Redis", "Prometheus"],
    repo: "https://github.com/srikardurgi/project-beta",
    demo: "https://project-beta.example.com",
  },
  {
    title: "Project Gamma",
    description:
      "CLI tool for managing cloud infrastructure across multiple providers. Terraform-inspired but with a simpler mental model.",
    tech: ["Rust", "AWS", "GCP", "Terraform"],
    repo: "https://github.com/srikardurgi/project-gamma",
  },
];
