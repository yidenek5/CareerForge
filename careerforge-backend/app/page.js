
const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova",
    location: "Addis Ababa",
    type: "Full-time",
    skills: ["React", "JavaScript", "CSS"],
    match: "92%",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Backend Developer",
    company: "CloudWorks",
    location: "Remote",
    type: "Remote",
    skills: ["Node.js", "API", "Database"],
    match: "86%",
    color: "bg-violet-100 text-violet-700",
  },
  {
    title: "Full-Stack Developer",
    company: "Innovate Labs",
    location: "Addis Ababa",
    type: "Internship",
    skills: ["React", "Next.js", "SQL"],
    match: "89%",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-extrabold tracking-tight">
            Career<span className="text-blue-600">Forge</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#jobs" className="hover:text-blue-600">Find Jobs</a>
            <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
            <a href="#about" className="hover:text-blue-600">About</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#signin" className="hidden text-sm font-semibold sm:inline">
              Sign in
            </a>
            <a
              href="#jobs"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <span>✦</span>
            Find opportunities that fit your skills
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Find your fit.
            <br />
            Build your <span className="text-blue-600">future.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Discover jobs that match your skills, explore new career paths,
            and take the next step toward your future.
          </p>

          {/* Search form — visual layout for now */}
          <form
            action="#jobs"
            className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50 sm:flex-row"
          >
            <input
              type="search"
              name="role"
              placeholder="Job title or skill"
              aria-label="Job title or skill"
              className="min-w-0 flex-1 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            />
            <div className="hidden w-px bg-slate-200 sm:block" />
            <input
              type="search"
              name="location"
              placeholder="City or remote"
              aria-label="City or remote"
              className="min-w-0 flex-1 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Search Jobs
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-500">
            Popular skills: React · Python · UI/UX · SQL
          </p>
        </div>

        {/* Small statistics */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 border-t border-slate-200 pt-8 text-center">
          <div>
            <p className="text-2xl font-extrabold sm:text-3xl">500+</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">Opportunities</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold sm:text-3xl">100+</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">Companies</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-blue-600 sm:text-3xl">AI</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">Skill matching</p>
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section id="jobs" className="border-t border-slate-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Handpicked for you
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
                Featured opportunities
              </h2>
              <p className="mt-2 text-slate-600">
                Explore roles that could be your next big step.
              </p>
            </div>
            <a href="#jobs" className="font-semibold text-blue-600 hover:text-blue-700">
              Explore all jobs →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-extrabold ${job.color}`}>
                    {job.company.charAt(0)}
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    {job.match} match
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold">{job.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{job.company}</p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span>📍 {job.location}</span>
                  <span>·</span>
                  <span>{job.type}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="#about"
                  className="mt-6 block rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold transition hover:border-blue-600 hover:text-blue-600"
                >
                  View opportunity →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Your next opportunity starts here
          </h2>
          <p className="mt-3 text-slate-600">
            A simpler way to move forward in your career.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { number: "01", title: "Discover", text: "Explore opportunities that interest you." },
            { number: "02", title: "Match", text: "Compare job requirements with your skills." },
            { number: "03", title: "Apply", text: "Find promising roles and take your next step." },
          ].map((step) => (
            <div key={step.number} className="rounded-2xl bg-white p-6">
              <p className="text-sm font-extrabold text-blue-600">{step.number}</p>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-extrabold">
            Career<span className="text-blue-600">Forge</span>
          </p>
          <p className="text-sm text-slate-500">
            Find your fit. Build your future.
          </p>
          <p className="text-sm text-slate-500">© 2026 CareerForge</p>
        </div>
      </footer>
    </main>
  );
}
