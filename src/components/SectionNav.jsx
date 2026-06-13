import React, { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeId),
  );
  const activeLabel = sections[activeIndex]?.label ?? "Home";
  const indicatorTop = (activeIndex / (sections.length - 1)) * 100;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="section-nav hidden xl:block" aria-label="Page sections">
      <div className="section-nav-rail">
        <div className="section-nav-line" aria-hidden="true" />

        <div
          className="section-nav-active"
          style={{ top: `${indicatorTop}%` }}
          aria-hidden="true"
        >
          {/* ONLY TEXT FIXED HERE */}
          <p
            key={activeId}
            className="section-nav-label"
            style={{
              writingMode: "horizontal-tb",
              transform: "none",
              whiteSpace: "nowrap",
              fontSize: "14px", // 👈 increase size here
              fontWeight: 600, // optional (makes it clearer)
            }}
          >
            {activeLabel}
          </p>

          <span className="section-nav-indicator" />
        </div>

        {sections.map((section, index) => {
          const top = (index / (sections.length - 1)) * 100;

          return (
            <button
              key={section.id}
              type="button"
              className="section-nav-hit"
              style={{ top: `${top}%` }}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Go to ${section.label}`}
              aria-current={section.id === activeId ? "true" : undefined}
            />
          );
        })}
      </div>
    </aside>
  );
}
