export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-6 py-8 text-sm text-neutral-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} Kevynn Delgado</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/delgadokp92"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kevynndelgado/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:delgadokp92@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}