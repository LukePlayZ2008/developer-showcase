import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio-data";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">Some of my recent work</p>
        </div>
        <Button asChild variant="ghost" className="hidden sm:flex">
          <Link to="/projects">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Button asChild>
          <Link to="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
