import { useState } from "react";
import { ConfettiButton } from "./lightswind/confetti-button";
import { Mailbox } from "lucide-react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="mt-40 flex justify-center">
      <div className="text-white">hi</div>
      <ConfettiButton
        icon={<Mailbox className="h-4 w-4" />}
        variant="gradient"
        size="lg"
        animation="glow"
        onClick={handleSubmit}
        confettiOptions={{
          particleCount: 100,
          spread: 70,
        }}
      >
        Get in Touch!
      </ConfettiButton>
    </div>
  );
};
