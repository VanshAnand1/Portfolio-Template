import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function FooterComponent() {
  return (
    <footer className="relative mt-24">
      {/* Gradient glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ddccff]/10 to-transparent" />
        <div className="absolute -top-24 right-[-20%] h-64 w-64 rounded-full bg-[#ddccff]/15 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-64 w-64 rounded-full bg-[#ddccff]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / bio */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.05)] backdrop-blur">
            <div className="mb-3 text-2xl font-bold tracking-tight">
              <span className="text-white">Vansh</span>
              <span className="text-[#ddccff]"> Anand</span>
            </div>
            <p className="text-sm text-neutral-300">
              I craft thoughtful interfaces and playful interactions. Always
              learning, always shipping.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/VanshAnand1"
                aria-label="GitHub"
                className="grid size-9 place-items-center rounded-full border border-[#ddccff]/50 text-[#ddccff] hover:bg-[#ddccff] hover:text-black transition"
              >
                <Github className="size-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/vanshanand1/"
                aria-label="LinkedIn"
                className="grid size-9 place-items-center rounded-full border border-[#ddccff]/50 text-[#ddccff] hover:bg-[#ddccff] hover:text-black transition"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="mailto:vanshanandutsc@gmail.com?subject=Hello%20from%20vansh.dev"
                aria-label="Email"
                className="grid size-9 place-items-center rounded-full border border-[#ddccff]/50 text-[#ddccff] hover:bg-[#ddccff] hover:text-black transition"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Explore</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a
                href="#about"
                className="text-neutral-300 hover:text-[#ddccff] transition"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-neutral-300 hover:text-[#ddccff] transition"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-neutral-300 hover:text-[#ddccff] transition"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-neutral-300 hover:text-[#ddccff] transition"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact / CTA */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Let’s work together
            </h3>
            <p className="text-sm text-neutral-300">
              Have a project or an idea? I’d love to hear about it.
            </p>
            <a
              href="mailto:vanshanandutsc@gmail.com?subject=Project%20inquiry"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#ddccff] px-4 py-2 text-sm font-medium text-black bg-[#ddccff] hover:bg-[#cbb3ff] transition"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </a>

            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-300">
              <MapPin className="size-4 text-[#ddccff]" />
              Toronto, Canada
            </div>
          </div>

          {/* Tiny updates / tags */}
          <div className="rounded-2xl border border-white/10 bg-neutral-900/30 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              What I’m into
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Three.js",
                "Tailwind",
                "UI Motion",
                "DX",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#ddccff]/40 bg-[#ddccff]/10 px-3 py-1 text-xs text-[#ddccff]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <blockquote className="mt-6 border-l-2 border-[#ddccff]/50 pl-3 text-sm text-neutral-300">
              “Make it simple, but significant.”
            </blockquote>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-sm text-neutral-400 flex flex-col gap-4 items-center justify-between md:flex-row">
          <p>© {new Date().getFullYear()} Vansh Anand. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-[#ddccff] transition">
              Privacy
            </a>
            <a href="#" className="hover:text-[#ddccff] transition">
              Terms
            </a>
            <a href="#" className="hover:text-[#ddccff] transition">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
