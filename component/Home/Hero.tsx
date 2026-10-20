"use client";
import { useState } from "react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-white">
      {/* Navbar */}
      <header className="relative z-50 border-b border-white/[0.08]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-tight"
            aria-label="Rusho home"
          >
            rusho<span className="text-[#F26419]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors duration-200 hover:text-[#F26419]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#F26419] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#ff7b36] hover:shadow-[0_0_25px_rgba(242,100,25,0.25)] md:inline-flex"
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-[#F26419] md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile / Tablet Dropdown */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#101014] px-5 py-5 shadow-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-[#F26419]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#F26419] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ff7b36]"
              >
                Let's Talk <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative isolate flex min-h-[calc(100vh-81px)] items-center"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#F26419]/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-orange-500/[0.06] blur-[100px]"
        />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Availability badge */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-300 sm:text-sm">
                Available for new projects
              </span>
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#F26419]">
              Web Designer & Developer
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Hey, I'm{" "}
              <span className="text-[#F26419]">Rusho.</span>
              <br />
              I craft digital
              <br className="hidden sm:block" /> experiences that{" "}
              <span className="text-zinc-500">stand out.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              I design and build modern, responsive websites that combine
              thoughtful UI, clean code, and meaningful user experiences.
              Let's turn your ideas into something exceptional.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F26419] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff7b36] hover:shadow-[0_12px_35px_rgba(242,100,25,0.2)]"
              >
                Let's Work Together
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition duration-300 hover:border-[#F26419] hover:text-[#F26419]"
              >
                View My Work
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                Find me on
              </span>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 transition hover:text-[#F26419]"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 transition hover:text-[#F26419]"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Right Profile Visual */}
          <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            <div className="relative mx-auto aspect-[4/5] max-h-[570px] w-full max-w-[420px]">
              {/* Decorative frame */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rotate-6 rounded-[2rem] border border-[#F26419]/30"
              />

              {/* Photo container */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#18181B] shadow-2xl shadow-black/40">
                <img
                  src="/rusho.jpg"
                  alt="Rusho — Web Designer and Frontend Developer"
                  className="h-full w-full object-cover object-center"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/90 via-transparent to-transparent" />

                {/* Name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#F26419]">
                    Designer. Developer.
                  </p>
                  <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Building the web.
                  </p>
                </div>
              </div>

              {/* Floating skill card */}
              <div className="absolute -left-3 top-10 rounded-2xl border border-white/10 bg-[#151518]/95 p-3 shadow-xl backdrop-blur-md sm:-left-8 sm:p-4">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                  My focus
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  UI/UX + Development
                </p>
              </div>

              {/* Floating technology card */}
              <div className="absolute -bottom-5 -right-2 rounded-2xl border border-white/10 bg-[#151518]/95 p-4 shadow-xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F26419]/15 text-lg font-bold text-[#F26419]">
                    {"</>"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Clean Code
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      Responsive by design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
