import React, { useState } from "react";

const PROFILE_IMAGE = "/Profile-Image.jpeg";
const PROFILE_FALLBACK = "/profile.svg";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState(PROFILE_IMAGE);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 sm:pt-32 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Left — intro */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="hero-badge inline-flex items-center px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-wide mb-6">
              • Full Stack Developer •
            </span>

            <h1 className="mb-6 font-bold leading-[1.08] tracking-tight text-strong text-[clamp(36px,6vw,64px)]">
              Hi, I&apos;m <span className="text-accent-theme">Karthick.</span>
            </h1>

            <p className="mb-8 text-base sm:text-lg leading-relaxed text-muted">
              Full Stack Developer focused on building scalable web platforms
              from end to end. I design and ship modern applications — from
              React and Next.js interfaces to Node.js APIs and AWS deployments —
              with a strong focus on performance, usability, and clean
              architecture.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-accent-theme text-white text-sm font-medium hover:bg-accent-soft transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-border-soft text-sm font-medium text-foreground hover:border-accent-theme hover:text-accent-soft transition"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right — profile card */}
          <div className="flex justify-center lg:justify-end">
            <div className="profile-card w-full max-w-[340px] sm:max-w-[360px]">
              <img
                src={imageSrc}
                alt="Karthick M — Full Stack Developer"
                className="profile-card-image"
                onError={() => {
                  if (imageSrc !== PROFILE_FALLBACK)
                    setImageSrc(PROFILE_FALLBACK);
                }}
              />

              <div className="profile-card-top">
                <h2 className="text-2xl sm:text-[28px] font-bold text-white leading-tight">
                  Karthick M
                </h2>
                <p className="text-sm text-white/80 mt-1">
                  Full Stack · Web Developer
                </p>
              </div>

              <div className="profile-card-bar">
                <img
                  src={imageSrc}
                  alt=""
                  aria-hidden="true"
                  className="profile-card-avatar"
                  onError={(e) => {
                    e.currentTarget.src = PROFILE_FALLBACK;
                  }}
                />

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white truncate">
                    @FULL_STACK_DEV
                  </p>
                  <p className="text-xs text-white/70">Available</p>
                </div>

                <a href="#contact" className="profile-card-contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
