import React from "react";
import useReveal from "../hooks/useReveal";

const NAVBAR_HEIGHT = 80;
const STACK_OFFSET = 56;
const STACK_HEADING_OFFSET = 0;

const CARD_HEIGHT = 520;

const jobs = [
  {
    company: "Skylink Fibernet Private Limited",
    role: "Website Developer & Programmer",
    period: "Jan 2026 — Present",
    bg: "#00215E",
    stats: [
      { num: "2+", desc: "Production platforms launched" },
      { num: "100%", desc: "End-to-end ownership" },
      { num: "CI/CD", desc: "Managed deployments" },
    ],
    points: [
      "Designed and developed the SkyPlay OTT platform (skyplay.in) end-to-end — UI design, frontend development, and production deployment",
      "Contributed to key sections of the Skylink corporate website (skylink.in), improving content structure, layout, and user experience",
      "Collaborate directly with the Director of Technology and MD to align web development goals with business requirements",
      "Optimise web pages for performance, SEO, and cross-browser compatibility; manage hosting, CI/CD, and ongoing maintenance",
    ],
  },
  {
    company: "Xentrix Hi-Tech Private Limited",
    role: "Software Developer",
    period: "Nov 2024 — Jan 2026",
    bg: "#001845",
    stats: [
      { num: "20%", desc: "Faster data processing" },
      { num: "3+", desc: "Production modules shipped" },
      { num: "JWT", desc: "Secure auth implemented" },
    ],
    points: [
      "Developed and maintained full-stack applications using Next.js and PostgreSQL, improving data processing speed by 20%",
      "Implemented secure JWT authentication and authorization, enhancing data protection and reducing unauthorized access attempts",
      "Collaborated with designers and backend engineers to deliver 3+ production-ready modules within strict deadlines",
      "Integrated RESTful APIs and managed application state effectively to ensure seamless user experiences",
    ],
  },
  {
    company: "Cordix Technology Private Limited",
    role: "Junior Full Stack Developer",
    period: "Aug 2022 — Aug 2024",
    bg: "#003078",
    stats: [
      { num: "15%", desc: "Page load time reduced" },
      { num: "AWS", desc: "EC2, S3, RDS, Lambda" },
      { num: "2 yrs", desc: "React & Node.js work" },
    ],
    points: [
      "Developed and maintained web applications using React.js and Node.js, delivering high-quality code and optimal performance",
      "Improved frontend performance by refactoring React components, reducing page load time by 15%",
      "Deployed and managed web applications on AWS services including EC2, S3, RDS, Lambda, and Cognito",
      "Built RESTful APIs and contributed to backend service development using Express.js",
    ],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header — sits above cards, NOT inside the sticky stack */}
        <p className="text-center font-mono text-sm text-muted mb-3">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3 text-strong">
          Where I've worked.
        </h2>
        <p className="text-center text-muted mb-14 max-w-2xl mx-auto">
          A timeline of teams, products, and the problems I've shipped solutions
          for.
        </p>

        {/* ── Stacking cards ── */}
        {/* ── Stacking cards ── */}
        <div className="relative">
          {jobs.map((job, i) => {
            const stackTop = i * STACK_OFFSET;

            return (
              <div
                key={job.company}
                style={{
                  backgroundColor: job.bg,
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "30px",
                  color: "#fff",
                  overflow: "hidden",

                  position: "sticky",
                  top: `${NAVBAR_HEIGHT + stackTop}px`,
                  zIndex: i + 1,

                  marginBottom: "32px",

                  transformOrigin: "top center",

                  transition: "all 0.5s ease-out",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    height: `${STACK_OFFSET}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 36px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {job.company.split(" ")[0]}
                  </span>

                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "monospace",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {job.period}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "36px 36px 44px" }}>
                  <h3
                    style={{
                      fontSize: "clamp(22px, 3vw, 34px)",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.15,
                      marginBottom: "6px",
                    }}
                  >
                    {job.role}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#93c5fd",
                      marginBottom: "32px",
                    }}
                  >
                    {job.company}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      borderTop: "1px solid rgba(255,255,255,0.15)",
                      borderBottom: "1px solid rgba(255,255,255,0.15)",
                      marginBottom: "32px",
                    }}
                  >
                    {job.stats.map((s, si) => (
                      <div
                        key={s.desc}
                        style={{
                          padding: "18px 0",
                          paddingLeft: si > 0 ? "24px" : "0",
                          paddingRight:
                            si < job.stats.length - 1 ? "24px" : "0",
                          borderRight:
                            si < job.stats.length - 1
                              ? "1px solid rgba(255,255,255,0.15)"
                              : "none",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "24px",
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: "4px",
                          }}
                        >
                          {s.num}
                        </div>

                        <div
                          style={{
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.5)",
                            lineHeight: 1.5,
                          }}
                        >
                          {s.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {job.points.map((p) => (
                      <li
                        key={p}
                        style={{
                          display: "flex",
                          gap: "12px",
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.7,
                        }}
                      >
                        <span
                          style={{
                            color: "#93c5fd",
                            flexShrink: 0,
                            marginTop: "3px",
                          }}
                        >
                          ▸
                        </span>

                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
