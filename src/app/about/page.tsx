import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Srikar Durgi — backend-heavy software consultant.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      <div className="mt-8 space-y-6 leading-relaxed text-muted">
        <p>
          I&apos;m Srikar Durgi, a backend-heavy software consultant. I build
          systems, solve hard problems, and jump across technologies as the
          situation demands.
        </p>
        <p>
          My work spans distributed systems, API design, cloud infrastructure,
          and data pipelines. I care about building things that are reliable,
          maintainable, and actually solve the problem at hand.
        </p>
        <p>
          When I&apos;m not writing code, I&apos;m usually reading about systems
          design, exploring new tools, or thinking about how to make complex
          things simpler.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Get in Touch</h2>
        <p className="mt-4 text-muted">
          Interested in working together? Reach out via{" "}
          <a
            href="https://www.linkedin.com/in/srikar-bhargav-durgi-81869773/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://x.com/sdurgi17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            X/Twitter
          </a>
          , or check out my profile on{" "}
          <a
            href="https://www.toptal.com/developers/resume/srikar-durgi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Toptal
          </a>
          .
        </p>
      </section>
    </div>
  );
}
