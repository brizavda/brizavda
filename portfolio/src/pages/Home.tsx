import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f0f14] transition-colors duration-300">

        <Navbar />

        <main id="home" className="min-h-screen flex items-center pt-20">
            <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-6xl mx-auto px-6 text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-gray-100"
                >
                    Hi, I'm <span className="text-rose-500">Brizavda</span>{" "}
                    <motion.span
                    animate={{ rotate: [0, 15, -10, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 3 }}
                    className="inline-block"
                    >
                    👋
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10"
                >
                    Developer who loves building clean, beautiful and user-friendly
                    web interfaces with modern technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-4"
                >
                    <button className="px-7 py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition hover:shadow-[0_0_25px_rgba(244,63,94,0.4)]">
                    View Projects
                    </button>
                    <button className="px-7 py-3 border border-rose-400 text-rose-400 rounded-lg font-medium hover:bg-rose-500/10 dark:hover:bg-gray-800 transition">
                    Contact Me
                    </button>
                </motion.div>
            </motion.section>
        </main>
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
    </div>
  );
}

export default Home;
