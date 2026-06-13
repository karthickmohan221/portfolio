import React from "react";
import useReveal from "../hooks/useReveal";

const groups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Material-UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Next.js API Routes", "Django"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "NeonDB"],
  },
  {
    title: "Auth & Security",
    items: ["JWT", "OAuth", "AWS Cognito"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS Lambda",
      "AWS S3",
      "AWS RDS",
      "AWS Cognito",
      "AWS SES",
      "Vercel",
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-mono text-sm text-muted mb-3">
          Skills
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3 text-strong">
          Tools of the trade.
        </h2>

        <p className="text-center text-muted max-w-2xl mx-auto mb-14">
          A toolkit shaped by shipping real products — from React UIs to AWS
          infrastructure and everything that connects them.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g) => (
            <div
              key={g.title}
              className="p-6 rounded-xl border border-border-theme bg-elevated
                         hover:border-accent-theme transition"
            >
              <div className="text-xs uppercase tracking-widest
                              text-accent-soft mb-4">
                {g.title}
              </div>

              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-md
                               border border-border-theme text-muted
                               hover:text-accent-soft hover:border-accent-theme
                               transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
