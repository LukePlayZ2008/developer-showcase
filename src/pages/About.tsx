import { Download, MapPin } from "lucide-react";
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
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <span className="text-8xl font-bold text-primary/40">
                {personalInfo.displayName.charAt(0)}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">About Me</h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm <span className="font-semibold text-foreground">{personalInfo.name}</span>, 
              but you can call me <span className="font-semibold text-primary">{personalInfo.displayName}</span>. 
              I'm a {personalInfo.title.toLowerCase()} from {personalInfo.location}, 
              passionate about creating clean and efficient web solutions.
            </p>
            <Button variant="outline" disabled>
              <Download className="mr-2 h-4 w-4" />
              Resume Coming Soon
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
