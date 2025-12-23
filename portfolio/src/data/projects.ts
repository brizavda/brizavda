export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/brizavda/brizavda",
    demo: "#",
  },
  {
  title: "Task Dashboard",
  description:
    "Interactive task management dashboard with filters, animations and persistent state.",
  tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  github: "https://github.com/brizavda/task-dashboard",
  demo: "https://brizavda.github.io/task-dashboard/",
  },
];
