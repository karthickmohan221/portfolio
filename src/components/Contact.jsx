import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref} className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="flex justify-center font-mono text-sm text-muted mb-3">
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-strong">
          Let's build something.
        </h2>

        <p className="text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Open to full-time roles and freelance projects. Whether you have a
          product idea or need to scale an existing one — I'd love to hear from
          you.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:karthickmohan221@gmail.com"
            className="
      inline-flex items-center gap-2
      bg-elevated border border-border-soft
      px-8 py-4 rounded-lg
      text-base text-strong
      hover:border-accent-theme hover:text-accent-soft
      transition
    "
          >
            <Mail size={18} />
            Email Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="
      inline-flex items-center gap-2
      bg-accent-theme text-black
      px-8 py-4 rounded-lg
      font-medium
      hover:opacity-90
      transition
    "
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted mb-14">
          <span className="flex items-center gap-2">
            <Phone size={15} />
            +91 63839 05441
          </span>

          <span className="flex items-center gap-2">
            <MapPin size={15} />
            Coimbatore, Tamil Nadu — 643202
          </span>
        </div>

        <div className="flex justify-center gap-4">
          {[
            {
              icon: Github,
              href: "https://github.com/karthickmohan221",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/karthick-mohan-387670246",
              label: "LinkedIn",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="
                w-11 h-11 flex items-center justify-center
                rounded-lg border border-border-soft
                text-muted
                hover:text-accent-soft hover:border-accent-theme
                hover:-translate-y-0.5
                transition
              "
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <footer className="mt-16 pt-10 text-center text-xs text-subtle font-mono">
          Built by Karthick M — © {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  );
}
