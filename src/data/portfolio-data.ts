// Personal Information
export const personalInfo = {
  name: "Your Name",
  title: "Software Developer",
  tagline: "Building modern web applications with clean code and thoughtful design",
  email: "email@example.com",
  bio: "I'm a passionate software developer with experience building web applications using modern technologies. I love creating intuitive user experiences and writing clean, maintainable code. When I'm not coding, you can find me exploring new technologies and contributing to open-source projects.",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    telegram: "https://t.me/username",
  },
};

// Skills organized by category
export const skills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

// Projects data
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration. Features a responsive design and intuitive shopping experience.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/taskapp",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts using data from multiple APIs. Includes location search and favorites.",
    image: "/placeholder.svg",
    technologies: ["React", "API Integration", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/weather",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and clean design.",
    image: "/placeholder.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "A content management system for blogs with markdown support, categories, and SEO optimization features.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/blog",
    featured: false,
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time messaging application with private and group chat functionality, file sharing, and message history.",
    image: "/placeholder.svg",
    technologies: ["React", "Socket.io", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/chat",
    featured: false,
  },
];

// Experience and Education
export const experience = [
  {
    id: 1,
    title: "Software Developer",
    organization: "Tech Company",
    period: "2022 - Present",
    description:
      "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    type: "work",
  },
  {
    id: 2,
    title: "Junior Developer",
    organization: "Startup Inc",
    period: "2020 - 2022",
    description:
      "Built frontend components and integrated REST APIs. Participated in code reviews and agile development processes.",
    type: "work",
  },
  {
    id: 3,
    title: "Bachelor's in Computer Science",
    organization: "University Name",
    period: "2016 - 2020",
    description:
      "Studied computer science fundamentals, algorithms, data structures, and software engineering principles.",
    type: "education",
  },
];

// Navigation links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
