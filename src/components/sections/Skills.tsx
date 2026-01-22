import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio-data";

const Skills = () => {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-foreground mb-8">Skills & Technologies</h2>
      
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill.name}
                  </Badge>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
