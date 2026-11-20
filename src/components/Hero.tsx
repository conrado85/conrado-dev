import React from 'react'

export default function Hero() {
  return (
     <section
          className="relative w-full overflow-hidden px-margin-mobile lg:px-margin pt-12 pb-24 md:pt-20 md:pb-32 max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-700px h-450px bg-primary-container/10 blur-[130px] rounded-full pointer-events-none -z-10"
          ></div>
         
          <div
            className="inline-flex items-center gap-space-sm px-4 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-md mb-8 group hover:bg-surface-container-highest transition-all duration-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"
              ></span>
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"
              ></span>
            </span>
            <span
              className="font-label-code-sm text-label-code-sm text-secondary tracking-wide"
            >
              Disponible para nuevos desafíos • Remoto &amp; On-site
            </span>
          </div>
         
          <h1
            className="font-headline-xl text-headline-xl text-on-surface max-w-4xl tracking-tight leading-tight mb-6"
          >
            Desarrollador Full Stack &amp; Arquitecto de Software
            <span
              className="block mt-2 bg-linear-to-t from-primary via-primary-container to-secondary bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]"
            >
              Soluciones Escalables de Alto Rendimiento
            </span>
          </h1>
         
          <p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed"
          >
            Diseño y desarrollo plataformas web robustas de extremo a extremo,
            combinando interfaces ultra-fluidas con microservicios resilientes y
            bases de datos de baja latencia.
          </p>
          
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-3.5 rounded-xl font-label-ui text-label-ui bg-primary-container text-on-primary-container shadow-[0_0_24px_rgba(56,189,248,0.45)] hover:shadow-[0_0_36px_rgba(56,189,248,0.7)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
              href="#proyectos"
            >
              <span>Ver proyectos</span>
              <span className="material-symbols-outlined text-[18px]"
                >arrow_forward</span
              >
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-8 py-3.5 rounded-xl font-label-ui text-label-ui bg-surface-container/80 text-on-surface hover:bg-surface-container-high hover:text-primary transition-all duration-200 backdrop-blur-md shadow-sm"
              download=""
              href="#"
            >
              <span className="material-symbols-outlined text-[18px]"
                >download</span
              >
              <span>Descargar CV</span>
            </a>
          </div>
         
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl pt-6"
          >
            <div
              className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center group hover:bg-surface-container-high transition-colors"
            >
              <div
                className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mb-1"
              >
                5+
              </div>
              <div className="font-label-ui text-label-ui text-on-surface-variant">
                Años de Experiencia
              </div>
            </div>
            <div
              className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center group hover:bg-surface-container-high transition-colors"
            >
              <div
                className="font-headline-lg text-headline-lg text-secondary tracking-tight font-bold mb-1"
              >
                30+
              </div>
              <div className="font-label-ui text-label-ui text-on-surface-variant">
                Proyectos Desplegados
              </div>
            </div>
            <div
              className="bg-surface-container/60 backdrop-blur-xl p-6 rounded-2xl shadow-sm text-center flex flex-col items-center justify-center group hover:bg-surface-container-high transition-colors"
            >
              <div
                className="font-headline-lg text-headline-lg text-primary-container tracking-tight font-bold mb-1"
              >
                99.9%
              </div>
              <div className="font-label-ui text-label-ui text-on-surface-variant">
                Uptime &amp; Score Lighthouse
              </div>
            </div>
          </div>
        </section>
  )
}
