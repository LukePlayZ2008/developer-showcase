import { Wrench, Clock } from "lucide-react";
import MaintenanceScene from "@/components/sections/MaintenanceScene";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* 3D Maintenance Scene */}
        <MaintenanceScene />

        {/* Title with icon */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Wrench className="h-6 w-6 text-primary animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Projects Section
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
          <Clock className="h-5 w-5" />
          <p className="text-lg font-medium">Maintenance in Progress</p>
        </div>

        {/* Explanation */}
        <p className="mt-6 text-muted-foreground max-w-md mx-auto leading-relaxed">
          I'm currently working on adding my projects to this section. 
          Exciting work is coming soon — stay tuned for updates!
        </p>

        {/* Progress indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
