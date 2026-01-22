const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
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
            I’m <span className="font-medium text-foreground">Yé Lin Khant</span>, 
            also known as <span className="font-medium text-foreground">Luke</span>. 
            I’m a software developer focused on building clean, modern, and reliable 
            web applications. I enjoy turning ideas into real, usable products and 
            continuously improving my skills.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            My main interests are frontend development, UI design, and learning how 
            real-world systems are built. I’m currently studying in high school with 
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
  );
};

export default About;
