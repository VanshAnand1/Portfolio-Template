import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", level: 80, category: "programming" },
  { name: "JavaScript", level: 60, category: "programming" },
  { name: "C", level: 85, category: "programming" },
  { name: "C++", level: 15, category: "programming" },
  { name: "HTML", level: 80, category: "programming" },
  { name: "CSS", level: 70, category: "programming" },
  { name: "Java", level: 5, category: "programming" },
  { name: "React", level: 70, category: "programming" },
  { name: "TypeScript", level: 20, category: "programming" },
  { name: "Tailwind CSS", level: 60, category: "programming" },
  { name: "Django", level: 5, category: "programming" },
  { name: "OOP", level: 60, category: "programming" },

  { name: "Git/Github", level: 75, category: "tools" },
  { name: "matplotlib", level: 85, category: "tools" },
  { name: "Pygame", level: 55, category: "tools" },
  { name: "Figma", level: 90, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "PyCharm", level: 30, category: "tools" },
];

const categories = ["all", "programming", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory == "all" || skill.category == activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 roundede-full origin-left animate-[grow_1.5s_ease_out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
