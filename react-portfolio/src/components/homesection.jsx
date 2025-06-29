import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const HomeSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10"></div>
      <div>
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bolb tracking-tight">
            <span className="opacity-0 animate-fade-in">Hello! I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Vansh
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 ml-2">
              Anand
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a second year Computer Science (SE) student at the University of
            Toronto Scarborough Campus.<br></br>I enjoy learning new skills and
            innovating with different technologies. <br></br> I am currently
            learning about{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Object Oriented Programming
            </span>
            .
          </p>
          <div>
            <a
              href="#projects"
              className="pt-2 cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              View My Work
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span
              className={cn(
                "text-sm text-muted-foreground mb-2 transition-opacity duration-500",
                isScrolled ? "opacity-0" : "opacity-100"
              )}
            >
              Scroll
            </span>
            <ArrowDown
              className={cn(
                "h-5 w-5 text-primary transition-opacity duration-500",
                isScrolled ? "opacity-0" : "opacity-100"
              )}
            />
          </div>
        </section>
      </div>
    </section>
  );
};
