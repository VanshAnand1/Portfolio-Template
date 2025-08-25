import { useState } from "react";

const title = "Title";

const skills = [
  { name: "Skill 1", level: 80, category: "Category 1" },
  { name: "Skill 2", level: 60, category: "Category 2" },
  { name: "Skill 3", level: 85, category: "Category 1" },
  { name: "Skill 4", level: 15, category: "Category 2" },
  { name: "Skill 5", level: 80, category: "Category 1" },
  { name: "Skill 6", level: 70, category: "Category 3" },
  { name: "Skill 7", level: 70, category: "Category 1" },
  { name: "Skill 8", level: 80, category: "Category 3" },
  { name: "Skill 9", level: 20, category: "Category 1" },
  { name: "Skill 10", level: 60, category: "Category 3" },
  { name: "Skill 11", level: 5, category: "Category 1" },
  { name: "Skill 12", level: 60, category: "Category 2" },

  { name: "Skill 13", level: 75, category: "Category 2" },
  { name: "Skill 14", level: 85, category: "Category 1" },
  { name: "Skill 15", level: 55, category: "Category 2" },
  { name: "Skill 16", level: 90, category: "Category 3" },
  { name: "Skill 17", level: 85, category: "Category 1" },
  { name: "Skill 18", level: 30, category: "Category 2" },
];

const categories = ["all", "Category 1", "Category 2", "Category 3"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory == "all" || skill.category == activeCategory
  );

  return (
    <section className="mt-80 md:mt-96 lg:mt-[22rem] scroll-mt-48 md:scroll-mt-64 lg:scroll-mt-72 py-24 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <h2
          id="skills"
          className="text-3xl md:text-4xl font-extrabold mb-10 text-center"
        >
          <span className="bg-[#e5e7eb] bg-clip-text text-transparent">
            {title}
          </span>
        </h2>

        {/* Category chips */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category: string) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={[
                  "px-5 py-2 rounded-full text-sm md:text-base transition-colors duration-300 border",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_6px_24px_rgba(0,0,0,.35)]",
                  active
                    ? "bg-[#8b5cf6] text-[#5f70f5] border-transparent"
                    : "bg-[rgba(255,255,255,.08)] text-[#ddccff] border-[rgba(255,255,255,.14)] hover:bg-[rgba(255,255,255,.14)]",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: { name: string; level: number }) => (
            <div
              key={skill.name}
              className="rounded-xl border bg-[rgba(255,255,255,.06)] border-[rgba(255,255,255,.14)]
                       p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_8px_32px_rgba(0,0,0,.35)]
                       backdrop-blur-md transition-shadow hover:shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_12px_40px_rgba(0,0,0,.45)]"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-[#e5e7eb]">
                  {skill.name}
                </h3>
              </div>

              {/* Progress */}
              <div className="w-full h-2 rounded-full overflow-hidden bg-[rgba(255,255,255,.14)]">
                <div
                  className="h-2 rounded-full transition-[width] duration-700 ease-out
                           shadow-[0_0_0_1px_rgba(139,92,246,.45),0_0_24px_rgba(139,92,246,.35)]"
                  style={{
                    width: `${skill.level}%`,
                    backgroundImage: "linear-gradient(90deg,#8b5cf6,#5f70f5)",
                  }}
                />
              </div>

              <div className="text-right mt-2">
                <span className="text-xs font-medium text-[rgba(229,231,235,.72)]">
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
