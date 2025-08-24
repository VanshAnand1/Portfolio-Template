import { useState } from "react";
import { ConfettiButton } from "./lightswind/confetti-button";
import { Mailbox } from "lucide-react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState<string>("");

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

      // Helpful while testing:
      // const text = await res.text(); console.log("Apps Script response:", res.status, text);

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
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-3xl font-bold text-[#ddccff] mb-8 text-center">
        Get in Touch!
      </h2>

      <form
        onSubmit={handleSubmit}
        name="submit-to-google-sheet"
        className="w-full max-w-md space-y-6 p-8 rounded-2xl shadow-lg"
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
            confettiOptions={{ particleCount: 100, spread: 70 }}
          >
            Get in Touch!
          </ConfettiButton>
        </div>

        {!!msg && (
          <p className="text-center text-[#ddccff] text-sm" role="status">
            {msg}
          </p>
        )}
      </form>
    </div>
  );
};
