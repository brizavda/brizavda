import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
      >
        About Me
      </motion.h2>
      
      <div className="w-16 h-1 bg-rose-500 mx-auto mb-12 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto text-center"
      >

        <p className="text-gray-600 dark:text-gray-400 mb-6">
        I am a Computer Engineering student with hands-on experience in both frontend
        and backend development. I enjoy building complete web solutions, from clean
        and intuitive user interfaces to reliable backend logic and data handling.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-10">
        I have worked with modern web technologies such as React, TypeScript and CSS
        on the frontend, and languages like Python, Java and SQL on the backend.
        Through academic and professional projects I have gained experience working with cloud platforms, databases
        and collaborative development environments.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React",
            "TypeScript",
            "JavaScript",
            "Python",
            "Java",
            "SQL",
            "Tailwind CSS",
            "Framer Motion",
            "AWS",
            "Git",
            ].map((tech) => (
            <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
            >
                {tech}
            </span>
            ))}
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
