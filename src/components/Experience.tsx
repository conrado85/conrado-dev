
export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative w-full px-margin-mobile lg:px-margin py-24 bg-surface-container-lowest/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="max-w-2xl mb-16">
          <span className="font-label-code-sm text-label-code-sm text-primary tracking-widest uppercase mb-3 inline-block">
            // EXPERIENCIA & DESARROLLO
          </span>

          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Mi trayectoria profesional
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Experiencia en producción industrial y evolución
            hacia el desarrollo de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Columna izquierda */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Producción */}
            <div className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-surface-container-highest text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    factory
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Producción industrial
                </h3>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Experiencia en procesos productivos, operación
                de maquinaria y cumplimiento de procedimientos
                de calidad y seguridad.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {["GMP", "SOP", "5S", "Lean", "SMED", "EHS"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg bg-surface-container-high text-primary font-label-code-sm text-label-code-sm"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Desarrollo web */}
            <div className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-surface-container-highest text-secondary">
                  <span className="material-symbols-outlined text-[24px]">
                    terminal
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Desarrollo web
                </h3>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Desarrollo de proyectos personales y académicos,
                creando funcionalidades frontend y backend,
                componentes reutilizables e interfaces responsive.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Control Parental",
                  "Moccia Pas",
                  "Portfolio Full Stack"
                ].map((project) => (
                  <div
                    key={project}
                    className="flex items-center gap-3 text-on-surface"
                  >
                    <span className="material-symbols-outlined text-secondary">
                      code
                    </span>

                    <span className="font-body-sm text-body-sm">
                      {project}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Columna derecha: Timeline */}
          <div className="lg:col-span-7 bg-surface-container/40 backdrop-blur-xl p-8 rounded-2xl shadow-sm">

            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">
                history_edu
              </span>
              Historial laboral
            </h3>

            <div className="relative pl-6 border-l border-outline-variant space-y-10">

              {/* MANUEL MEZQUITA */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></span>

                <div className="font-label-code-sm text-label-code-sm text-primary mb-1">
                  2024 — 2025
                </div>

                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Operario
                </h4>

                <div className="font-label-ui text-label-ui text-on-surface-variant mb-2">
                  MANUEL MEZQUITA S.A.
                </div>
              </div>

              {/* DEPLAMED */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-secondary"></span>

                <div className="font-label-code-sm text-label-code-sm text-secondary mb-1">
                  2015 — 2023
                </div>

                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Operador Técnico de Inyectoras
                </h4>

                <div className="font-label-ui text-label-ui text-on-surface-variant mb-2">
                  DEPLAMED S.R.L.
                </div>
              </div>

              {/* TRADE FOAM */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-tertiary"></span>

                <div className="font-label-code-sm text-label-code-sm text-tertiary mb-1">
                  2008 — 2014
                </div>

                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Operario de Producción Textil
                </h4>

                <div className="font-label-ui text-label-ui text-on-surface-variant mb-2">
                  TRADE FOAM S.A.
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Industria plástica.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
