import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio-data";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of projects I've worked on. Each project represents a unique challenge and learning experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
