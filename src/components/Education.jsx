import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import useReveal from '../hooks/useReveal';

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-mono text-sm text-muted mb-3">
          Education
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-strong">
          Education & certifications.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-5 p-7 rounded-xl border border-border-theme bg-elevated hover:border-accent-theme transition">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-lg text-accent-soft flex-shrink-0"
              style={{ backgroundColor: 'var(--accent-soft)' }}
            >
              <GraduationCap size={22} />
            </div>

            <div>
              <div className="text-xs font-mono text-accent-soft mb-1">
                Jun 2018 — Jul 2022
              </div>

              <h3 className="text-lg font-semibold mb-1 text-strong">
                Bachelor of Engineering
              </h3>

              <p className="text-sm text-muted">
                Sri Ramakrishna Institute of Technology
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-7 rounded-xl border border-border-theme bg-elevated hover:border-accent-theme transition">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-lg text-accent-soft flex-shrink-0"
              style={{ backgroundColor: 'var(--accent-soft)' }}
            >
              <Award size={22} />
            </div>

            <div>
              <div className="text-xs font-mono text-accent-soft mb-1">
                Coursera
              </div>

              <h3 className="text-lg font-semibold mb-1 text-strong">
                Web Development in React.js
              </h3>

              <p className="text-sm text-muted">
                ReactJS Developer Certification
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
