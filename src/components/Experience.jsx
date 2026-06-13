import React from 'react';
import useReveal from '../hooks/useReveal';

const jobs = [
  {
    company: 'Skylink Fibernet Private Limited',
    role: 'Website Developer & Programmer',
    period: 'Jan 2026 — Present',
    points: [
      'Designed and developed the SkyPlay OTT platform (skyplay.in) end-to-end — UI design, frontend development, and production deployment',
      'Contributed to key sections of the Skylink corporate website (skylink.in), improving content structure, layout, and user experience',
      'Collaborate directly with the Director of Technology and MD to align web development goals with business requirements',
      'Optimise web pages for performance, SEO, and cross-browser compatibility; manage hosting, CI/CD, and ongoing maintenance',
    ],
  },
  {
    company: 'Xentrix Hi-Tech Private Limited',
    role: 'Software Developer',
    period: 'Nov 2024 — Jan 2026',
    points: [
      'Developed and maintained full-stack applications using Next.js and PostgreSQL, improving data processing speed by 20%',
      'Implemented secure JWT authentication and authorization, enhancing data protection and reducing unauthorized access attempts',
      'Collaborated with designers and backend engineers to deliver 3+ production-ready modules within strict deadlines',
      'Integrated RESTful APIs and managed application state effectively to ensure seamless user experiences',
    ],
  },
  {
    company: 'Cordix Technology Private Limited',
    role: 'Junior Full Stack Developer',
    period: 'Aug 2022 — Aug 2024',
    points: [
      'Developed and maintained web applications using React.js and Node.js, delivering high-quality code and optimal performance',
      'Improved frontend performance by refactoring React components, reducing page load time by 15%',
      'Deployed and managed web applications on AWS services including EC2, S3, RDS, Lambda, and Cognito',
      'Built RESTful APIs and contributed to backend service development using Express.js',
    ],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-mono text-sm text-muted mb-3">
          Experience
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3 text-strong">
          Where I've worked.
        </h2>

        <p className="text-center text-muted mb-14 max-w-2xl mx-auto">
          A timeline of teams, products, and the problems I've shipped solutions for.
        </p>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border-theme hidden sm:block" />

          <div className="space-y-12">
            {jobs.map((job) => (
              <div key={job.company} className="relative flex gap-8">
                <div className="flex-shrink-0 pt-1 hidden sm:block">
                  <div
                    className="w-4 h-4 rounded-full bg-page border-2 border-accent-theme"
                    style={{ boxShadow: '0 0 0 4px var(--accent-glow)' }}
                  />
                </div>

                <div className="flex-1">
                  <div className="text-xs font-mono text-accent-soft tracking-wide mb-1">
                    {job.period}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-1 text-strong">
                    {job.role}
                  </h3>

                  <div className="text-muted font-medium mb-4">
                    {job.company}
                  </div>

                  <ul className="space-y-2">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 text-muted text-sm leading-relaxed"
                      >
                        <span className="text-accent-soft flex-shrink-0">
                          ▸
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
