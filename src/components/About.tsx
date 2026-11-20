import React from "react";

export default function About() {
  return (
    <section
      className="relative w-full px-margin-mobile lg:px-margin py-24 bg-surface-container-lowest/80 scroll-mt-20"
      id="sobre-mi"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="font-label-code-sm text-label-code-sm text-primary tracking-widest uppercase mb-3 inline-block">
            // TRAYECTORIA &amp; FILOSOFÍA
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Ingeniería de Software con Enfoque de Negocio
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Filosofía & Pilares  */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Creo firmemente que la excelencia técnica solo tiene valor cuando
              resuelve problemas comerciales auténticos. Mi aproximación combina
              pensamiento sistémico con atención obsesiva al detalle en la
              experiencia de uso final.
            </p>
            {/* 3 Pilares */}
            <div className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-surface-container-highest text-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  architecture
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Arquitectura Centrada en el Usuario
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Diseño APIs e interfaces que eliminan la fricción, anticipan
                  errores y aseguran respuestas en milisegundos sin comprometer
                  la seguridad.
                </p>
              </div>
            </div>
            <div className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-surface-container-highest text-secondary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  automation
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Cultura DevOps &amp; Automatización
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pipelines automatizados, contenedores inmutables y monitoreo
                  proactivo para que los despliegues a producción sean
                  rutinarios y predecibles.
                </p>
              </div>
            </div>
            <div className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-surface-container-highest text-tertiary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  verified
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Calidad de Código y Mantenibilidad
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Estructura modular orientada a dominio (DDD), tipado estricto
                  y pruebas automatizadas que facilitan la incorporación ágil de
                  nuevos ingenieros.
                </p>
              </div>
            </div>
          </div>
          {/* Columna Derecha: Timeline  */}
          <div className="lg:col-span-6 bg-surface-container/40 backdrop-blur-xl p-8 rounded-2xl shadow-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[22px]">
                history_edu
              </span>
              <span>Historial Profesional</span>
            </h3>
            <div className="relative pl-6 space-y-10">
              {/* Timeline Item 1  */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></span>
                <div className="font-label-code-sm text-label-code-sm text-primary mb-1">
                  2022 — Presente
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Senior Full Stack Engineer
                </h4>
                <div className="font-label-ui text-label-ui text-on-surface-variant mb-2">
                  TechCorp Solutions
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Liderazgo técnico en la migración de un monolito heredado a
                  una arquitectura de microservicios en AWS. Modernización
                  integral del frontend con Next.js reduciendo el TBT en un 64%.
                </p>
              </div>
              {/* Timeline Item 2  */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-secondary"></span>
                <div className="font-label-code-sm text-label-code-sm text-secondary mb-1">
                  2020 — 2022
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Full Stack Developer
                </h4>
                <div className="font-label-ui text-label-ui text-on-surface-variant mb-2">
                  InnovaLabs
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Construcción de aplicaciones web interactivas para clientes de
                  comercio electrónico y banca digital. Implementación de
                  pruebas end-to-end con Cypress y pipelines CI/CD en GitHub
                  Actions.
                </p>
              </div>
              {/* Timeline Item 3  */}
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-tertiary"></span>
                <div className="font-label-code-sm text-label-code-sm text-tertiary mb-1">
                  2018 — 2020
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  Frontend Engineer
                </h4>
                <div className="font-label-ui text-label-ui text-on-surface-variant mb-2">
                  Digital Studio
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Diseño de sistemas de diseño atómicos (Design Systems) y
                  desarrollo de SPAs altamente dinámicas en React y TypeScript
                  con estándares estrictos de accesibilidad WCAG AA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
