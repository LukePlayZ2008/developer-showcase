import { GraduationCap, Baby, BookOpen, Lightbulb, Wrench, Calendar } from "lucide-react";

const timelineData = [
  {
    year: "2008",
    title: "The Beginning",
    description: "Born in Myanmar, starting a journey of curiosity and growth.",
    icon: Baby,
  },
  {
    year: "2012 – 2018",
    title: "Primary Education",
    description: "Completed Grade 1 through Grade 6 at Basic Education High School (Yay Phyu Village), building a strong academic foundation.",
    icon: BookOpen,
  },
  {
    year: "2019",
    title: "Secondary Education",
    description: "Enrolled in Grade 7 at No. 6 Basic Education High School (Hlaing Thar Yar), beginning the next chapter of formal education.",
    icon: GraduationCap,
  },
  {
    year: "2020 – 2023",
    title: "Independent Learning Period",
    description: "During a time of global and national challenges, I focused on self-directed learning—exploring technology, developing practical skills, and nurturing my passion for building things. This period shaped my resilience, adaptability, and drive to keep growing.",
    icon: Lightbulb,
  },
  {
    year: "2024 – Present",
    title: "Formal Education Resumed",
    description: "Returned to No. 6 Basic Education High School (Hlaing Thar Yar) and completed Grade 8 and 9. Currently studying in Grade 10 with a focus on Economics and Computer Science.",
    icon: GraduationCap,
  },
  {
    year: "2024 – Present",
    title: "Technical Skill Development",
    description: "Gaining hands-on experience in mobile device repair and servicing at Ko Moe Mobile—developing problem-solving skills, technical expertise, and real-world knowledge.",
    icon: Wrench,
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* About Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/profile.png"
              alt="Yé Lin Khant"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* About Content */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              About Me
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm <span className="font-medium text-foreground">Yé Lin Khant</span>, 
              also known as <span className="font-medium text-foreground">Luke</span>. 
              I'm a software developer focused on building clean, modern, and reliable 
              web applications. I enjoy turning ideas into real, usable products and 
              continuously improving my skills.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              My main interests are frontend development, UI design, and learning how 
              real-world systems are built. I'm currently studying in high school with 
              a focus on Economics and Computer Science.
            </p>

            {/* Skills */}
            <div>
              <h2 className="text-lg font-semibold mb-3">
                Skills & Technologies
              </h2>

              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Firebase",
                  "UI / UX Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Roadmap */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Education & Experience Roadmap
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, learning, and resilience—from early education through self-discovery to technical skill development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="absolute left-0 md:left-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md md:-translate-x-1/2 z-10">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>

          {/* End Marker */}
          <div className="absolute left-4 md:left-1/2 -bottom-4 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2" />
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic max-w-xl mx-auto">
            "Every step, whether smooth or challenging, has shaped my path toward becoming a software developer. I'm grateful for the journey and excited for what's ahead."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
