import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import { personalInfo } from "@/data/portfolio-data";

const About = () => {
  return (
    <div className="py-12">
      {/* About Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Profile Image Placeholder */}
          <div className="aspect-square max-w-md mx-auto md:mx-0 rounded-2xl bg-muted overflow-hidden">
            <img
              src="/placeholder.svg"
              alt={personalInfo.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />
    </div>
  );
};

export default About;
