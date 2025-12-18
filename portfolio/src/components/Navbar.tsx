import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#0f0f14]/80 backdrop-blur transition-colors">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold dark:text-white">
          Briza<span className="text-rose-500">.</span>
        </span>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li
            onClick={() => document.getElementById("home")?.scrollIntoView()}
            className="hover:text-rose-500 cursor-pointer"
            >
            Home
            </li>

            <li
            onClick={() => document.getElementById("projects")?.scrollIntoView()}
            className="hover:text-rose-500 cursor-pointer"
            >
            Projects
            </li>

            <li
            onClick={() => document.getElementById("about")?.scrollIntoView()}
            className="hover:text-rose-500 cursor-pointer"
            >
            About
            </li>

            <li
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
            className="hover:text-rose-500 cursor-pointer"
            >
            Contact
            </li>
          </ul>

          <button
            onClick={toggleTheme}
            className="text-xl transition hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌸" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
