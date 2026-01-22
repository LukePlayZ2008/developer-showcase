import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl">
        <p className="text-primary font-medium mb-4">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          {personalInfo.tagline}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link to="/projects">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
