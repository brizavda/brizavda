import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 flex items-center">
        <section className="w-full max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-600">Brizavda</span> 👋
            </h1>

            <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Developer focused on building clean, responsive and user-friendly
            web interfaces using modern technologies.
            </p>

            <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                View Projects
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition">
                Contact Me
            </button>
            </div>
        </section>
      </main>

    </>
  );
}

export default Home;
