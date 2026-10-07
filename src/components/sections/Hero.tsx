import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]"
      />

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-16">
          {/* Text */}
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-primary font-medium mb-4">Hi, my name is</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Also known as{" "}
              <span className="text-primary font-semibold">
                {personalInfo.displayName}
              </span>
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mb-6">
              {personalInfo.tagline}
            </p>
            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8 md:justify-start">
              <MapPin className="h-4 w-4" />
              {personalInfo.location}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link to="/about">
                  About Me
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

          {/* Profile photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-primary/5 blur-xl"
              />
              <img
                src={profilePhoto.url}
                alt={personalInfo.name}
                className="relative h-44 w-44 md:h-64 md:w-64 rounded-full object-cover border-4 border-background shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
