import React from 'react';
import CountUp from 'react-countup';
import useReveal from '../hooks/useReveal';

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '%', label: 'Faster Data Processing' },
  { value: 15, suffix: '%', label: 'Reduced Page Load Time' },
  { value: 5, suffix: '+', label: 'Production Apps Shipped' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="uppercase tracking-[0.2em] text-xs text-muted font-mono mb-3">
          About
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold mb-12 reveal text-strong">
          Results-driven, end-to-end.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="text-muted text-base leading-8 reveal">
            <p className="mb-5">
              I'm a Full Stack Developer based in Coimbatore, Tamil Nadu,
              building and deploying scalable web applications across
              healthcare, e-learning, networking, and entertainment domains.
            </p>

            <p className="mb-5">
              Skilled in{' '}
              <span className="text-strong font-semibold">React.js</span>,{' '}
              <span className="text-strong font-semibold">Next.js</span>,{' '}
              <span className="text-strong font-semibold">Node.js</span> and{' '}
              <span className="text-strong font-semibold">AWS</span>, with a
              track record of improving application performance — including a
              20% increase in data processing efficiency and a 15% reduction in
              page load time.
            </p>

            <p>
              I focus on delivering production-ready platforms with secure
              authentication, clean architecture, and optimized user
              experiences — from first commit to live deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-6 border border-border-theme rounded-xl bg-elevated hover:bg-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-accent-theme mb-2">
                  <CountUp
                    end={s.value}
                    duration={2.5}
                    suffix={s.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>

                <div className="text-xs text-muted leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}