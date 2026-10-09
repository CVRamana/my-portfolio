export default function App() {
  const skills = [
    "React Native", "React.js", "TypeScript", "JavaScript",
    "Tailwind CSS", "Redux & Redux Saga", "Java Spring Boot", "Generative AI"
  ];

  const projects = [
    {
      title: "react-native-fast-background-removal",
      description: "An open-source npm package for fast, on-device background removal in React Native applications.",
      type: "NPM Package",
      icon: (
        <svg className="w-5 h-5 text-teal-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: "https://www.npmjs.com/package/react-native-fast-background-removal"
    },
    {
      title: "react-native-aicore-cvramana",
      description: "A specialized npm package integrating Generative AI utilities directly into mobile development workflows.",
      type: "NPM Package",
      icon: (
        <svg className="w-5 h-5 text-teal-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: "https://www.npmjs.com/package/react-native-aicore-cvramana"
    },
    {
      title: "Apna Card",
      description: "A digital business card mobile app built with React Native, featuring on-device background removal and image generation APIs.",
      type: "Mobile App",
      icon: (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: "#"
    },
    {
      title: "Purvanchal Dental Clinic",
      description: "A fast, responsive web application and landing page deployed on Vercel.",
      type: "Web App",
      icon: (
        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
      link: "#"
    },
    {
      title: "IT Mazdoor",
      description: "A YouTube channel dedicated to sharing technical insights, JavaScript quizzes, and developer career experiences.",
      type: "Content Creation",
      icon: (
        <svg className="w-5 h-5 text-teal-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">

        {/* Hero Section */}
        <header className="mb-24 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4 tracking-tight">
            Raman Verma
          </h1>
          <h2 className="text-xl md:text-2xl text-teal-400 font-medium mb-6">
            Frontend Software Engineer
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            With over 7 years of IT experience, I specialize in building high-performance mobile and web applications using React Native and React. Currently at HCLTech working on the Gap Inc. project, I am passionate about UI architecture, open-source development, and integrating Generative AI (Vercel SDK, GitHub Copilot) into modern frontends.
          </p>

          <div className="flex gap-5 mt-8">
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:your-email@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </header>

        {/* Technical Arsenal Section */}
        <section className="mb-24 animate-fade-in-up delay-100">
          <h3 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
            Technical Arsenal
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-teal-300 rounded-full text-sm font-medium hover:border-teal-500/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24 animate-fade-in-up delay-200">
          <h3 className="text-2xl font-semibold text-slate-100 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Featured Work & Open Source
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 hover:bg-slate-900 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-teal-500">
                    {project.icon}
                    <span className="text-xs font-semibold uppercase tracking-wider">{project.type}</span>
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <h4 className="text-lg font-bold text-slate-200 mb-3 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-sm py-8 border-t border-slate-900/80">
          <p>© {new Date().getFullYear()} Raman Verma. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}