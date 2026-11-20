
export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.04)] py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="flex flex-col items-center md:items-start gap-space-xs">
          <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high/60 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-label-code-sm text-label-code-sm text-secondary-fixed">
              Disponible para nuevos proyectos
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
            © 2025 Alex.dev. Arquitectura Full Stack e interfaces de alto
            impacto.
          </p>
        </div>
        <div className="flex items-center gap-space-lg">
          <a
            aria-label="GitHub Profile"
            className="p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center"
            href="https://github.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
          </a>
          <a
            aria-label="LinkedIn Profile"
            className="p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">work</span>
          </a>
          <a
            aria-label="Twitter / X Profile"
            className="p-space-sm rounded-lg bg-surface-container/60 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center"
            href="https://twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">
              public
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
