function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold">
          Briza<span className="text-indigo-600">.</span>
        </span>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Projects</li>
          <li className="hover:text-indigo-600 cursor-pointer">About</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
