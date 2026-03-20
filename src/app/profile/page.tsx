import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "Professional profile of Srikar Bhargav Durgi — software consultant based in Hyderabad, India.",
};

const skills = {
  Languages: ["Python", "Java", "JavaScript", "PHP", "SQL", "C++"],
  Frameworks: ["Django", "Spring", "Flask", "Laravel", "React", "Node.js"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  Infrastructure: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Nginx"],
  "AI/ML": ["OpenAI", "LLMs", "Agentic AI", "TensorFlow", "n8n"],
};

const experience = [
  {
    role: "Founder & Principal Consultant",
    company: "Pinnaclecode Technologies",
    url: "https://pinnaclecode.tech",
    location: "Hyderabad",
    period: "2017 \u2013 Present",
    bullets: [
      "Founded and evolved a software consultancy, transitioning from an individual contributor to providing strategic advisory and technical resources to global clients.",
      "Occupied varied roles across engagements \u2014 from Senior Developer to Engineering Manager \u2014 ensuring the delivery of scalable and efficient software solutions.",
      "Led end-to-end backend development for an AI-powered call intelligence platform that transforms sales and support conversations into actionable insights.",
      "Optimized API costs of a POS system by 80% and Snowflake costs by 75% through targeted query and integration improvements.",
      "Managed end-to-end project cycles from ideation to deployment, consistently exceeding client expectations and achieving high retention rates.",
    ],
    tech: ["Python", "Django", "GCP", "HubSpot", "Agentic AI", "n8n", "OpenAI"],
  },
  {
    role: "Tech Lead",
    company: "Unirac",
    url: "https://unirac.com",
    location: "Albuquerque, NM",
    period: "2019 \u2013 2024",
    bullets: [
      "Built a 6-person in-house software team in India, including recruitment and technical migration from a 3rd-party contract team.",
      "Led SSO development, introduced caching and monitoring, and built internal performance review tooling.",
      "Trained structural engineers to write Python engineering modules, reducing development time significantly for new products.",
    ],
    tech: ["Django", "React", "MySQL", "Docker", "Nginx"],
  },
  {
    role: "Lead Architect",
    company: "TOCA Football Inc.",
    url: "https://tocafootball.com",
    location: null,
    period: "2021 \u2013 2022",
    bullets: [
      "Developed an integration system that syncs data from various booking platforms to HubSpot CRM for a sports training solution used across multiple facilities.",
      "Built an automated test suite and configured CI/CD pipelines to ensure reliability across deployments.",
      "Created monitoring systems on AWS and GChat to notify on erroneous incidents. Optimized API usage and decreased costs by more than 50%.",
    ],
    tech: ["Python", "Django", "AWS", "React", "Docker", "TDD"],
  },
  {
    role: "Sr. Python Developer",
    company: "HiAuto via Toptal",
    url: "https://hi.auto/",
    location: "Tel-Aviv",
    period: "2021",
    bullets: [
      "Built a scalable audio processing data pipeline using Azure serverless functions.",
      "Developed various APIs to ensure data quality during the transcription process.",
    ],
    tech: ["Python", "Azure", "Docker", "Kubernetes"],
  },
  {
    role: "Sr. Software Developer",
    company: "ESP Solutions Group",
    url: "https://espsolutionsgroup.com/",
    location: "Austin, TX",
    period: "2018 \u2013 2021",
    bullets: [
      "Created SRM collections to validate education data for US state departments.",
      "Oversaw deployment, maintenance, and bug fixes for the SRM application.",
    ],
    tech: ["Java", "Spring", "Hibernate", "AWS"],
  },
  {
    role: "Platform Engineer",
    company: "Media.net",
    url: "https://media.net",
    location: "Mumbai",
    period: "2016 \u2013 2017",
    bullets: [
      "Email open/click tracking system, S3 migration reducing deploys by 60%, and bandit-based template optimization on CTR.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "Redis", "Node.js"],
  },
  {
    role: "Software Developer",
    company: "Housing.com",
    url: "https://housing.com",
    location: "Mumbai",
    period: "2015",
    bullets: [
      "Locality-based price trends API, user profiling modules, and MongoDB to Elasticsearch data pipelines.",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Elasticsearch"],
  },
  {
    role: "Software Developer Intern",
    company: "PayU",
    url: "https://payu.com",
    location: "Gurgaon",
    period: "2015",
    bullets: [
      "Refund process improvements and WebSocket-based payment authorization POC that significantly decreased transaction times.",
    ],
    tech: ["PHP", "JavaScript", "MySQL"],
  },
];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <section className="mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Srikar Bhargav Durgi
        </h1>
        <p className="mt-1 text-lg text-muted">
          Software Consultant &middot; Hyderabad, India
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Technology agnostic with a proven track record of creating new web
          applications from MVP to production. Delivered dashboards to automate
          workflows, trained structural engineers in Python reducing development
          time for new products, and developed payment authorization POCs via
          WebSocket significantly decreasing transaction times.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/srikar-bhargav-durgi-81869773/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.toptal.com/developers/resume/srikar-durgi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Toptal
          </a>
          <a
            href="https://github.com/sdurgi17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-5 space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-medium text-muted">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 border-l-2 border-border pl-6">
          {experience.map((job, i) => (
            <div
              key={i}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-background" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                    {job.location && ` \u2014 ${job.location}`}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-muted">
                  {job.period}
                </span>
              </div>

              <ul className="mt-2 space-y-1">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm leading-relaxed text-muted"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-border px-2 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight">Education</h2>
        <div className="mt-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-semibold">B.Tech in Information Technology</p>
              <p className="text-sm text-muted">
                Indian Institute of Information Technology, Allahabad
              </p>
            </div>
            <span className="shrink-0 text-sm text-muted">2011 &ndash; 2015</span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold tracking-tight">Certifications</h2>
        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="font-semibold">
              Generative AI with Large Language Models
            </p>
            <p className="text-sm text-muted">Coursera</p>
          </div>
          <span className="shrink-0 text-sm text-muted">2024</span>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight">Highlights</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          <li>Secured seat in IIIT Allahabad through AIEEE with 99.4 percentile</li>
          <li>Selected for Amritapuri Regionals ACM ICPC 2014</li>
          <li>
            Finished Basic Mountaineering Course at ABVIMAS &mdash;{" "}
            <Link
              href="/blog/abvimas-bmc-my-journey-into-the-heart-of-mountaineering"
              className="text-accent hover:underline"
            >
              read the blog post
            </Link>
          </li>
          <li>Toptal member since 2020</li>
        </ul>
      </section>
    </div>
  );
}
