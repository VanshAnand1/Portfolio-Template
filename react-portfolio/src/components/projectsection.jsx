import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sorting Algorithm Visualizer",
    description:
      "A matplotlib application to visualize the sorting done by a number of algorithms",
    image: "/Portfolio/projects/AlgorithmVisualizer.png",
    tags: ["Python", "matplotlib", "numpy", "VS Code"],
    demoUrl: "#",
    githubUrl: "https://github.com/VanshAnand1/Sorting-Algorithm-Visualizer",
  },
  {
    id: 2,
    title: "BetterWeb Chrome Extension",
    description:
      "A chrome extension designed to make navigating the digital world accessible for all",
    image: "/Portfolio/projects/BetterWebHorizontal.png",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "VS Code",
      "Google Cloud Computing",
      "Chrome Extensions API",
      "Cohere API",
    ],
    demoUrl: "https://youtu.be/ETRiH4Qm9WE",
    githubUrl: "https://github.com/VanshAnand1/Better-Web--Chrome-Extension",
  },
  {
    id: 3,
    title: "TicTacToe",
    description: "A simple and intuitive TicTacToe Game",
    image: "/Portfolio/projects/TicTacToe.png",
    tags: ["HTML", "CSS", "Javascript", "Vercel", "VS Code"],
    demoUrl: "#",
    githubUrl: "https://github.com/VanshAnand1/Tic-Tac-Toe",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, you can find the rest on my
          linked github below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/VanshAnand1?tab=repositories"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
