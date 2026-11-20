export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md">
          <a
            className="flex items-center gap-space-sm group"
            data-path="portfolio-alex"
            href="#"
          >
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
              Conrado<span className="text-primary-container">.dev</span>
            </span>
          </a>
        </div>
        <nav
          className="hidden md:flex items-center gap-space-lg"
          data-active-classes="text-primary font-bold"
        >
          <a
            aria-current="page"
            className="transition-colors text-primary font-bold"
            data-path="portfolio-alex"
            href="#proyectos"
          >
            Proyectos
          </a>
          <a
            aria-current="page"
            className="transition-colors text-primary font-bold"
            data-path="portfolio-alex"
            href="#experiencia"
          >
            Experiencia
          </a>
          <a
            aria-current="page"
            className="transition-colors text-primary font-bold"
            data-path="portfolio-alex"
            href="#stack"
          >
            Stack
          </a>
          <a
            aria-current="page"
            className="transition-colors text-primary font-bold"
            data-path="portfolio-alex"
            href="#sobre-mi"
          >
            Sobre Mí
          </a>
          <a
            aria-current="page"
            className="transition-colors text-primary font-bold"
            data-path="portfolio-alex"
            href="#contacto"
          >
            Contacto
          </a>
        </nav>
        <div className="flex items-center gap-space-md">
          <a
            className="inline-flex items-center justify-center px-space-md py-space-xs rounded-lg font-label-ui text-label-ui bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_26px_rgba(56,189,248,0.55)] hover:scale-[1.02] transition-all duration-200"
            href="#contacto"
          >
            Contactar
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
