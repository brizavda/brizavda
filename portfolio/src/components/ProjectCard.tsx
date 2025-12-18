import { motion } from "framer-motion";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <motion.div
    variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
        },
    }}
    whileHover={{ y: -6 }}
    className="bg-white dark:bg-[#15151d] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-rose-500 hover:underline"
        >
          GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-rose-500 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
