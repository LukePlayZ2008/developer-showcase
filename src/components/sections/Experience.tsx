import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/portfolio-data";

const Experience = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-foreground mb-8">Experience & Education</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                {item.type === "work" ? (
                  <Briefcase className="h-4 w-4" />
                ) : (
                  <GraduationCap className="h-4 w-4" />
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium">{item.organization}</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
