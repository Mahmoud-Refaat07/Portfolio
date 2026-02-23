import { Linkedin, Facebook, Github } from "lucide-react";

const App = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen relative bg-neutral-50 overflow-hidden">
        {/* Black Background */}
        <div
          className="
            absolute inset-0 bg-cyan-950
            md:w-[55%] md:left-auto md:right-0
            md:[clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)]
          "
        ></div>

        {/* Navbar */}
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-6 relative z-10">
          <div className="bg-logo w-10 h-10  rounded-sm"></div>

          <div className="hidden md:flex gap-10 text-neutral-200 text-sm tracking-wide">
            <p className="hover:text-white transition cursor-pointer">About</p>
            <p className="hover:text-white transition cursor-pointer">Skills</p>
            <p className="hover:text-white transition cursor-pointer">
              Projects
            </p>
            <p className="hover:text-white transition cursor-pointer">
              Contact
            </p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] gap-10">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium text-neutral-700">
              Hi, I am
            </h3>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
              Mahmoud Refaat
            </h2>

            <p className="mt-6 text-neutral-600 max-w-md mx-auto md:mx-0">
              Front-End Developer focused on building scalable and
              high-performance web applications.
            </p>

            <div className="flex justify-center md:justify-start gap-6 mt-8 text-neutral-500">
              <Linkedin className="w-6 h-6 hover:text-neutral-900 transition cursor-pointer" />
              <Github className="w-6 h-6 hover:text-neutral-900 transition cursor-pointer" />
              <Facebook className="w-6 h-6 hover:text-neutral-900 transition cursor-pointer" />
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="my-pic w-52 h-52 md:w-80 md:h-80 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-cyan-950 text-neutral-200 py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10 tracking-tight">
            IT BERRIES
          </h2>

          <p className="text-neutral-400 leading-relaxed max-w-4xl">
            I am a Front-End Developer with a strong focus on building modern,
            scalable, and high-performance web applications using React.js and
            Next.js. I create clean, responsive, and user-centered interfaces
            that deliver smooth and engaging user experiences across all
            devices. I work extensively with Tailwind CSS and Sass to design
            flexible, well-structured, and maintainable UI systems while paying
            close attention to UI/UX details, performance optimization, and
            accessibility best practices.
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="bg-logo w-100 h-100 rounded-full"></div>
        </div>
      </section>
    </>
  );
};

export default App;
