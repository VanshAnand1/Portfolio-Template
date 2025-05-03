import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey in Tech</h3>
            <p className="text-muted-foreground">
              As a child, I had always been intrigued by the potential of
              technology, spending hours exploring how games and gadgets worked.
              That early curiosity quickly evolved into a passion for computer
              science, one that only deepened as I began to learn real
              programming languages and apply them to solve problems. Throughout
              high school, I built small tools, games, and websites, each one
              teaching me something new and pushing me further.
            </p>
            <p className="text-muted-foreground justify">
              As I pursue this passion through my formal education at the
              University of Toronto Scarborough, I only become more passionate.
              I am currently experimenting with different Python frameworks,
              like matplotlib, and learning about Object Oriented Programming
              through Java in my Software Design course over the summer. I'm
              always interested in new opportunities, so don't hesitate to reach
              out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    University of Toronto Scarborough Campus<br></br>Honors
                    Bachelor of Science (Co-op)<br></br>Sep 2024 - Apr 2029
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Programming Languages
                  </h4>
                  <p className="text-muted-foreground">
                    Python, C, C++, HTML, CSS, JS, React
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Currently Working On
                  </h4>
                  <p className="text-muted-foreground">
                    Learning Object Oriented Programming through Java
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
