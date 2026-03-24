import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "Professional profile of Srikar Bhargav Durgi — AI & software consultant based in Hyderabad, India.",
};

const skills = {
  "AI/ML": ["OpenAI", "Claude API", "LLMs", "Agentic AI", "RAG", "Prompt Engineering", "LangChain", "TensorFlow", "n8n", "Vector Databases"],
  Languages: ["Python", "Java", "JavaScript", "PHP", "SQL", "C++"],
  Frameworks: ["Django", "Spring", "Flask", "Laravel", "React", "Node.js"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  Infrastructure: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Nginx"],
};

const experience = [
  {
    role: "Founder & Principal Consultant",
    company: "Pinnaclecode Technologies",
    url: "https://pinnaclecode.tech",
    location: "Hyderabad",
    period: "2017 \u2013 Present",
    bullets: [
      "Founded a software consultancy focused on AI integration, automation, and full-stack development \u2014 serving global clients across the US, Israel, and India.",
      "Served as Senior Developer, Engineering Manager, and AI Solutions Architect across engagements \u2014 scoping, building, and deploying AI-augmented software tailored to each client\u2019s domain.",
      "Led end-to-end backend development for an AI-powered call intelligence platform that transforms sales and support conversations into actionable insights using LLMs and agentic workflows.",
      "Optimized API costs of a POS system by 80% and Snowflake costs by 75% through targeted query refactoring, caching strategies, and integration improvements.",
      "Built automation pipelines using n8n and OpenAI to streamline client onboarding, lead scoring, and CRM data enrichment for HubSpot-based sales teams.",
      "Advised clients on AI adoption strategy \u2014 evaluating LLM provider options, identifying high-ROI automation opportunities, and designing integration architectures for existing tech stacks.",
      "Managed end-to-end AI and software project cycles from ideation to deployment, consistently exceeding client expectations and achieving high retention rates across multi-year engagements.",
    ],
    tech: ["Python", "Django", "GCP", "HubSpot", "Agentic AI", "n8n", "OpenAI", "LLMs", "RAG", "Prompt Engineering"],
  },
  {
    role: "Tech Lead",
    company: "Unirac",
    url: "https://unirac.com",
    location: "Albuquerque, NM",
    period: "2019 \u2013 2023",
    bullets: [
      "Built and managed a 6-person in-house software engineering team in India, handling recruitment, onboarding, and the full technical migration from a 3rd-party contract team to an internal operation.",
      "Led the development of SSO integration across multiple internal tools, introduced Redis-based caching layers, and set up monitoring and alerting to improve system reliability.",
      "Designed and built internal performance review tooling used by engineering management to track goals, feedback cycles, and team productivity.",
      "Trained structural engineers to write Python-based engineering modules for solar racking products, reducing development time for new product lines by over 40%.",
      "Owned the full DevOps lifecycle including Docker-based deployments, Nginx configuration, and CI/CD pipeline management for the engineering platform.",
    ],
    tech: ["Django", "React", "MySQL", "Docker", "Nginx", "Redis"],
  },
  {
    role: "Lead Architect",
    company: "TOCA Football Inc.",
    url: "https://tocafootball.com",
    location: "Remote",
    period: "2021 \u2013 Present",
    bullets: [
      "Architected and built a multi-platform integration system that syncs booking and customer data from various scheduling platforms into HubSpot CRM, powering marketing automation for a sports training company operating across multiple US facilities.",
      "Designed and implemented a comprehensive automated test suite with CI/CD pipelines on AWS, ensuring reliable deployments across staging and production environments.",
      "Created real-time monitoring and alerting systems on AWS CloudWatch and Google Chat to detect and notify the team of data sync failures, API errors, and anomalous incidents.",
      "Optimized third-party API usage patterns and implemented intelligent rate limiting and caching, decreasing external API costs by more than 50%.",
    ],
    tech: ["Python", "Django", "AWS", "React", "Docker", "HubSpot", "TDD"],
  },
  {
    role: "Sr. Python Developer",
    company: "HiAuto via Toptal",
    url: "https://hi.auto/",
    location: "Tel-Aviv",
    period: "2021",
    bullets: [
      "Built a scalable ML data pipeline using Azure serverless functions to handle real-time audio transcription for an AI-powered voice ordering platform, feeding downstream speech-to-text models.",
      "Developed data validation and QA APIs to ensure transcription accuracy and flag anomalies before downstream ML model training and inference.",
      "Collaborated with a distributed team to integrate the pipeline into the existing microservices architecture running on Kubernetes.",
    ],
    tech: ["Python", "Azure", "Docker", "Kubernetes", "ML Pipelines", "Serverless"],
  },
  {
    role: "Sr. Software Developer",
    company: "ESP Solutions Group",
    url: "https://espsolutionsgroup.com/",
    location: "Austin, TX",
    period: "2018 \u2013 2021",
    bullets: [
      "Developed and maintained SRM (Student Record Management) collections used by US state education departments to validate, aggregate, and report on student enrollment and performance data.",
      "Owned deployment pipelines, production maintenance, and bug triage for the SRM platform, ensuring high availability during critical state reporting windows.",
      "Built new data validation rules and reporting modules using Java and Spring, integrating with existing Hibernate-based ORM layers and AWS infrastructure.",
    ],
    tech: ["Java", "Spring", "Hibernate", "AWS"],
  },
  {
    role: "Platform Engineer",
    company: "Media.net (Directi)",
    url: "https://media.net",
    location: "Mumbai",
    period: "2016 \u2013 2017",
    bullets: [
      "Built a full email open and click tracking system from scratch, providing real-time analytics on campaign engagement for the ad-tech platform\u2019s publisher communications.",
      "Led a migration of static assets and templates to S3-based deployments, reducing deployment cycles by 60% and decoupling frontend releases from backend deploys.",
      "Implemented a multi-armed bandit algorithm (applied ML) for email template optimization, dynamically selecting the highest-performing templates based on click-through rate to maximize engagement.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "Redis", "Node.js", "AWS S3"],
  },
  {
    role: "Software Developer",
    company: "Housing.com",
    url: "https://housing.com",
    location: "Mumbai",
    period: "2015",
    bullets: [
      "Developed a locality-based price trends API that aggregated and visualized real estate pricing data across neighborhoods, powering key consumer-facing features on India\u2019s leading property platform.",
      "Built user profiling and recommendation modules using behavioral signals and search patterns to personalize property listings \u2014 an early application of ML-driven personalization at scale.",
      "Designed and implemented data pipelines to migrate and sync data from MongoDB to Elasticsearch, enabling fast full-text search and geo-spatial queries across millions of property listings.",
    ],
    tech: ["Python", "Django", "PostgreSQL", "MongoDB", "Elasticsearch"],
  },
  {
    role: "Software Developer Intern",
    company: "PayU",
    url: "https://payu.com",
    location: "Gurgaon",
    period: "2015",
    bullets: [
      "Improved the payment refund processing workflow, reducing manual intervention and speeding up refund resolution times for merchants on the PayU payment gateway.",
      "Built a WebSocket-based real-time payment authorization proof-of-concept that significantly decreased transaction confirmation times compared to the existing polling-based approach.",
    ],
    tech: ["PHP", "JavaScript", "MySQL", "WebSockets"],
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
          AI &amp; Software Consultant &middot; Hyderabad, India
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Software consultant specializing in AI integration and intelligent
          automation for business operations. Built AI-powered call intelligence
          platforms using LLMs and agentic workflows, designed automation
          pipelines with OpenAI and n8n for CRM enrichment and lead scoring, and
          delivered scalable data pipelines for ML-driven products. 10+ years
          building production systems across Python, Django, AWS, GCP, and Azure
          &mdash; now focused on helping companies operationalize AI.
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
          <li>Built AI-powered call intelligence platform processing thousands of sales conversations using LLMs</li>
          <li>Designed and deployed OpenAI + n8n automation pipelines for CRM enrichment and lead scoring</li>
          <li>Toptal member since 2020 (Top 3% of developers)</li>
          <li>IIIT Allahabad alumnus &mdash; ACM ICPC regionalist</li>
          <li>
            Finished Basic Mountaineering Course at ABVIMAS &mdash;{" "}
            <Link
              href="/blog/abvimas-bmc-my-journey-into-the-heart-of-mountaineering"
              className="text-accent hover:underline"
            >
              read the blog post
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
