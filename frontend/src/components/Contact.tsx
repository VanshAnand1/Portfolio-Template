import { useState } from "react";
import { ConfettiButton } from "./lightswind/confetti-button";
import { Mailbox } from "lucide-react";

const LinkedIn = "";
const GitHub = "";
const LeetCode = "";

const defaultParticleCount = 100;
const defaultParticleSpread = 70;

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState<string>("");
  const [particleCount, setParticleCount] = useState(defaultParticleCount);
  const [spread, setSpread] = useState(defaultParticleSpread);
  const [popupOpen, setPopupOpen] = useState(false);

  const scriptURL = import.meta.env.VITE_SCRIPT_URL as string | undefined;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!scriptURL) {
      setMsg("Form is misconfigured. Missing VITE_SCRIPT_URL.");
      console.error("Missing VITE_SCRIPT_URL");
      return;
    }

    const form = e.currentTarget;

    const fd = new FormData(form);
    const body = new URLSearchParams();
    fd.forEach((value, key) => body.append(key, String(value)));

    try {
      const res = await fetch(scriptURL, {
        method: "POST",
        body,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setMsg("Message Sent!");
      setTimeout(() => setMsg(""), 3000);
      setName("");
      setEmail("");
      setMessage("");
      form.reset();
    } catch (error: unknown) {
      if (error instanceof Error) console.error("Error!", error.message);
      else console.error("Unexpected error:", error);
      setMsg("Something went wrong. Please try again.");
      setTimeout(() => setMsg(""), 4000);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#ddccff] mb-8 text-center">
          Get in Touch!
        </h2>
        <section className="text-[#ddccff]">
          Reach me through my{" "}
          <a href={LinkedIn} target="_blank">
            LinkedIn
          </a>
        </section>
        <section className="text-[#ddccff]">
          Check out my{" "}
          <a href={GitHub} target="_blank">
            GitHub
          </a>{" "}
          and{" "}
          <a href={LeetCode} target="_blank">
            LeetCode
          </a>
        </section>
        <section className="text-[#ddccff]">
          Send me an email at{" "}
          <a href="" className="underline hover:text-white transition">
            your.email.here@gmail.com
          </a>
        </section>
        <section className="text-[#ddccff]">
          Or fill out the form below to automatically send me a message!
        </section>
      </div>

      <form
        onSubmit={handleSubmit}
        name="submit-to-google-sheet"
        className="w-full max-w-md space-y-6 p-8 rounded-2xl shadow-none border-0 outline-none"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-white font-medium">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-[#ddccff] text-white placeholder-[#ddccff]/60 focus:outline-none focus:ring-2 focus:ring-[#ddccff]"
            placeholder="Your Name..."
            type="text"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-white font-medium">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-[#ddccff] text-white placeholder-[#ddccff]/60 focus:outline-none focus:ring-2 focus:ring-[#ddccff]"
            placeholder="your.email@domain.com"
            type="email"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-white font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-[#ddccff] text-white placeholder-[#ddccff]/60 focus:outline-none focus:ring-2 focus:ring-[#ddccff]"
            placeholder="Your message..."
          />
        </div>

        <div className="flex justify-center">
          {/* Make the button submit the form */}
          <ConfettiButton
            icon={<Mailbox className="h-4 w-4" />}
            variant="gradient"
            size="lg"
            animation="glow"
            type="submit"
            confettiOptions={{
              particleCount: particleCount,
              spread: spread,
            }}
          >
            Send Message
          </ConfettiButton>
        </div>

        {!!msg && (
          <p className="text-center text-[#ddccff] text-sm" role="status">
            {msg}
          </p>
        )}
      </form>
      <p className="text-white text-sm">
        <button
          type="button"
          onClick={() => setPopupOpen(true)}
          className="text-sm underline decoration-[#ddccff] underline-offset-2 hover:text-[#ddccff] transition px-1"
        >
          psst...
        </button>
      </p>
      {popupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setPopupOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-neutral-900 p-6 shadow-xl text-white">
            <h3 className="text-2xl font-bold text-[#ddccff] mb-6 text-center">
              Edit the Confetti Settings!
            </h3>

            {/* Particle Count */}
            <div className="mb-6">
              <label
                htmlFor="particle"
                className="block mb-2 font-medium text-[#ddccff]"
              >
                Particle Count (50–500): <span>{particleCount}</span>
              </label>
              <input
                id="particle"
                type="range"
                min={50}
                max={500}
                step={1}
                value={particleCount}
                onChange={(e) => setParticleCount(Number(e.target.value))}
                className="w-full accent-[#ddccff]"
              />
            </div>

            {/* Spread */}
            <div className="mb-8">
              <label
                htmlFor="spread"
                className="block mb-2 font-medium text-[#ddccff]"
              >
                Spread (20–180): <span>{spread}</span>
              </label>
              <input
                id="spread"
                type="range"
                min={20}
                max={180}
                step={1}
                value={spread}
                onChange={(e) => setSpread(Number(e.target.value))}
                className="w-full accent-[#ddccff]"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setPopupOpen(false)}
                className="px-4 py-2 rounded-lg border border-[#ddccff]/60 text-white hover:bg-white/5 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
