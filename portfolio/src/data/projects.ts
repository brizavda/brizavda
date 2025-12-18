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
    title: "Todo App",
    description:
      "A simple and clean todo application with local state management.",
    tech: ["React", "TypeScript"],
    github: "#",
  },
];
