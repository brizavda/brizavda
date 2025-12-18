import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold dark:text-white">
          Briza<span className="text-rose-500">.</span>
        </span>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li className="hover:text-rose-500 cursor-pointer">Home</li>
            <li className="hover:text-rose-500 cursor-pointer">Projects</li>
            <li className="hover:text-rose-500 cursor-pointer">About</li>
            <li className="hover:text-rose-500 cursor-pointer">Contact</li>
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
