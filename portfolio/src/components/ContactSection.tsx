import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full max-w-6xl mx-auto px-6 py-24 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100"
      >
        Contact
      </motion.h2>

      <div className="w-16 h-1 bg-rose-500 mx-auto mb-12 rounded-full" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12"
      >
        I’m currently open to new opportunities, collaborations and learning
        experiences. Feel free to reach out!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <a
          href="mailto:barron.reyes.italia@gmail.com"
          className="px-6 py-3 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 transition"
        >
          Email
        </a>

        <a
          href="https://github.com/brizavda"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg border border-rose-400 text-rose-400 font-medium hover:bg-rose-500/10 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/barrón-reyes-italia-zoe-5b05b1283/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-lg border border-rose-400 text-rose-400 font-medium hover:bg-rose-500/10 transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
}

export default ContactSection;
