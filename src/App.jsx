import {
  Linkedin,
  Facebook,
  Github,
  PencilOff,
  CodeXml,
  Wrench,
  Newspaper,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import htmlIcon from "./assets/html.png";
import cssIcon from "./assets/css.png";
import javascriptIcon from "./assets/javascirpt.png";
import typescriptIcon from "./assets/typesciript.png";
import tailwindIcon from "./assets/tailwind.png";
import sassIcon from "./assets/sass.png";
import reactIcon from "./assets/reactjs.png";
import nextjsIcon from "./assets/nextjs.png";
import nodejsIcon from "./assets/nodejs.png";
import expressjsIcon from "./assets/express.png";
import mongodbIcon from "./assets/mongodb.png";
import gitIcon from "./assets/git.png";
import githubIcon from "./assets/github.png";
import chatifyPicture from "./assets/chatify.png";
import eCommercePicture from "./assets/ecommerce.png";
import flixoraPicture from "./assets/flixora.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const App = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen relative bg-slate-50 overflow-hidden">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="
            absolute inset-0 bg-indigo-600/10
            md:w-[55%] md:left-auto md:right-0
            md:[clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)]
          "
        />

        {/* Navbar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-7xl mx-auto flex justify-between items-center py-6 px-6 relative z-10"
        >
          <div className="bg-logo w-12 h-12" />

          <div className="hidden md:flex gap-10 text-slate-600 text-sm tracking-wide">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <motion.p
                key={item}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i * 0.1}
                whileHover={{ color: "#4f46e5", y: -2 }}
                className="cursor-pointer"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] gap-10">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-xl font-medium text-slate-600"
            >
              Hi, I am
            </motion.h3>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-slate-900"
            >
              Mahmoud <span className="text-indigo-600">Refaat</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-6 text-slate-600 max-w-md"
            >
              Front-End Developer focused on scalable, high-performance web
              applications.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex justify-center md:justify-start gap-6 mt-8 text-slate-500"
            >
              {[
                {
                  href: "https://www.linkedin.com/in/mahmoud-refaat07",
                  icon: <Linkedin className="w-6 h-6" />,
                  title: "LinkedIn",
                },
                {
                  href: "https://github.com/Mahmoud-Refaat07",
                  icon: <Github className="w-6 h-6" />,
                  title: "Github",
                },
                {
                  href: "https://facebook.com/ANONYMOUSLY.MRG",
                  icon: <Facebook className="w-6 h-6" />,
                  title: "Facebook",
                },
                {
                  href: "https://drive.google.com/file/d/1qlgX-BZPSTxyquFHwM07Qm1iUSfLcQWN/view?usp=drive_link",
                  icon: <Newspaper className="w-6 h-6" />,
                  title: "Download CV",
                },
              ].map(({ href, icon, title }) => (
                <motion.a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={title}
                  whileHover={{ y: -4, color: "#4f46e5" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side — floating picture */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="my-pic w-52 h-52 md:w-80 md:h-80 rounded-full border border-slate-200 bg-white shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW Section */}
      <section className="w-full bg-slate-900 text-slate-200 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-10 tracking-tight"
          >
            Overview
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="text-slate-400 leading-relaxed max-w-4xl"
          >
            I build modern, scalable, and high-performance web applications
            using React.js and Next.js. I focus on clean UI architecture,
            performance, accessibility, and delivering real business value
            through code.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-16 text-slate-900"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <PencilOff className="w-10 h-10 text-indigo-600 mb-6 mx-auto" />
                ),
                title: "Design",
                desc: "Clean, responsive UI with strong visual hierarchy and UX principles.",
                delay: 0.1,
              },
              {
                icon: (
                  <CodeXml className="w-10 h-10 text-indigo-600 mb-6 mx-auto" />
                ),
                title: "Development",
                desc: "Scalable React & Next.js applications built with performance in mind.",
                delay: 0.3,
              },
              {
                icon: (
                  <Wrench className="w-10 h-10 text-indigo-600 mb-6 mx-auto" />
                ),
                title: "Maintenance",
                desc: "Continuous optimization, updates, and long-term reliability.",
                delay: 0.5,
              },
            ].map(({ icon, title, desc, delay }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={delay}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-8 rounded-xl border border-slate-200 cursor-default"
              >
                {icon}
                <h3 className="font-semibold text-xl text-slate-900 mb-4">
                  {title}
                </h3>
                <p className="text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="w-full bg-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900"
          >
            Skills
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="text-slate-400 mb-16"
          >
            Technologies I work with
          </motion.p>

          <div className="flex justify-center flex-wrap items-center gap-6 max-w-3xl mx-auto">
            {[
              { src: htmlIcon, label: "HTML" },
              { src: cssIcon, label: "CSS" },
              { src: sassIcon, label: "Sass" },
              { src: tailwindIcon, label: "Tailwind" },
              { src: javascriptIcon, label: "JavaScript" },
              { src: typescriptIcon, label: "TypeScript" },
              { src: reactIcon, label: "React" },
              { src: nextjsIcon, label: "Next.js" },
              { src: nodejsIcon, label: "Node.js" },
              { src: expressjsIcon, label: "Express" },
              { src: mongodbIcon, label: "MongoDB" },
              { src: gitIcon, label: "Git" },
              { src: githubIcon, label: "GitHub" },
            ].map(({ src, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.05}
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="w-20 h-20 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-indigo-100 transition-all duration-300">
                  <img
                    src={src}
                    alt={label}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-xs text-slate-400 group-hover:text-indigo-500 transition-colors duration-200 tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-full bg-slate-50 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-4 text-slate-900 text-center"
          >
            Projects
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="text-slate-400 mb-16 text-center"
          >
            A few things I've built
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: chatifyPicture,
                title: "Chat Application",
                desc: "Real-time chat app built with React & Node.js",
                href: "https://chatify-eta-bay.vercel.app",
                tag: "React · Node.js",
              },
              {
                src: eCommercePicture,
                title: "E-Commerce App",
                desc: "Full-featured online store with cart and checkout",
                href: "https://e-commerce-store-smoky-xi.vercel.app",
                tag: "React · Tailwind",
              },
              {
                src: flixoraPicture,
                title: "Movies & TV Shows",
                desc: "Browse and discover movies and TV shows",
                href: "https://movies-app-production-defb.up.railway.app/",
                tag: "Next.js · API",
              },
            ].map(({ src, title, desc, href, tag }, i) => (
              <motion.a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="overflow-hidden h-52">
                  <motion.img
                    src={src}
                    alt={title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Tag */}
                  <span className="text-xs text-indigo-500 font-medium tracking-wide uppercase">
                    {tag}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 text-sm text-slate-500">{desc}</p>

                  {/* Link hint */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-indigo-500 font-medium">
                    View Project
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
