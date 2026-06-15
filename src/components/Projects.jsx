import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const projects = [
  {
    title: 'SkyPlay — OTT & Entertainment Platform',
    desc: 'Designed and developed the complete SkyPlay website for Skylink Fibernet — streaming plans, content showcase, and subscription flows — built from scratch to production with Next.js and Tailwind CSS, ensuring fast load times, full mobile responsiveness, and strong SEO.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
    link: 'https://www.skyplay.in',
    linkLabel: 'skyplay.in',
  },
  {
    title: 'HealthClaim Validator',
    desc: 'A full-stack web application to authenticate and validate insurance claims against patient medical records, improving claim accuracy and reducing manual review time. Implements secure document upload, record matching logic, and role-based access control for healthcare staff.',
    tags: ['React', 'Node.js', 'Healthcare', 'RBAC'],
  },
  {
    title: 'Skill Hunt — Online Learning Platform',
    desc: 'A cross-platform learning solution for web (React.js) and mobile (React Native), enabling users to discover and enrol in skill-building courses. Includes course listing, progress tracking, and JWT-based authentication.',
    tags: ['React.js', 'React Native', 'JWT'],
  },
  {
    title: 'Real-Time Messaging Application',
    desc: 'A real-time chat app featuring user authentication, instant messaging, and full message history using WebSockets and JWT-based auth. Built with a React.js frontend and Node.js/Express backend, with MongoDB for message persistence.',
    tags: ['React.js', 'Node.js', 'WebSockets', 'MongoDB'],
  },
  {
    title: 'TinyLink — URL Shortener',
    desc: 'A full-stack URL shortener built with Next.js and NeonDB (PostgreSQL), with custom slugs, redirect tracking, and a clean Tailwind CSS UI. Deployed on Vercel with serverless API routes for scalable, fast link resolution.',
    tags: ['Next.js', 'NeonDB', 'Vercel'],
    link: 'https://tinylink-wheat-nine.vercel.app',
    linkLabel: 'Live demo',
  },
  {
    title: 'Skylink Corporate Website — Contributions',
    desc: 'Contributed to specific sections of the Skylink Fibernet corporate website — UI enhancements, layout improvements, content updates, and cross-browser compatibility fixes.',
    tags: ['React', 'UI/UX'],
    link: 'https://www.skylink.in',
    linkLabel: 'skylink.in',
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-mono text-sm text-muted mb-3">
          Projects
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-3 text-strong">
          Things I've built.
        </h2>

        <p className="text-center text-muted max-w-2xl mx-auto mb-14">
          A selection of production apps and personal projects across different
          domains and stacks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col p-6 rounded-xl border border-border-theme bg-elevated
                         hover:border-accent-theme transition"
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <h3 className="text-lg font-semibold leading-snug text-strong">
                  {p.title}
                </h3>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={p.title}
                    className="w-9 h-9 flex items-center justify-center rounded-lg
                               border border-border-theme text-muted
                               hover:text-accent-soft hover:border-accent-theme
                               transition flex-shrink-0"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-accent-soft
                               border border-border-theme rounded-md px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto text-sm text-muted hover:text-accent-soft
                             flex items-center gap-1 transition"
                >
                  {p.linkLabel}
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/karthickmohan221"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                       border border-border-theme text-foreground
                       hover:border-accent-theme hover:text-accent-soft
                       transition"
          >
            <Github size={16} />
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
