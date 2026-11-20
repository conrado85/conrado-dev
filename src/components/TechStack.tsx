import React from "react";

export default function TechStack() {
  return (
    <section
      className="relative w-full px-margin-mobile lg:px-margin py-20 bg-surface-container-lowest/70 scroll-mt-20"
      id="stack"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-14">
          <span className="font-label-code-sm text-label-code-sm text-primary tracking-widest uppercase mb-3 inline-block">
            // HABILIDADES &amp; HERRAMIENTAS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
            Stack Tecnológico de Vanguardia
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Ecosistema moderno, tipado estricto y herramientas probadas en
            producción diseñadas para garantizar rendimiento, mantenibilidad y
            escalabilidad horizontal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {/* Card 1: Frontend */}
          <div className="bg-surface-container/60 backdrop-blur-xl p-8 rounded-2xl shadow-sm hover:shadow-xl hover:bg-surface-container-high/80 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container shadow-sm">
                <span className="material-symbols-outlined text-[26px]">
                  devices
                </span>
              </div>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1 rounded-full bg-surface-container-highest text-primary">
                UI / UX Core
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
              Frontend Engineering
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6  grow leading-relaxed">
              Arquitecturas cliente reactivas y server-side rendering optimizado
              para Web Vitals impecables y flujos de usuario instantáneos.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                React / Next.js 14
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                TypeScript
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                Tailwind CSS
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                Redux Toolkit / Zustand
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                WebSockets
              </span>
            </div>
          </div>
          {/* Card 2: Backend */}
          <div className="bg-surface-container/60 backdrop-blur-xl p-8 rounded-2xl shadow-sm hover:shadow-xl hover:bg-surface-container-high/80 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[26px]">
                  dns
                </span>
              </div>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1 rounded-full bg-surface-container-highest text-secondary">
                APIs &amp; Microservicios
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
              Backend &amp; Sistemas
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6  grow leading-relaxed">
              Servicios concurrentes resilientes, diseño de contratos API
              rigurosos y procesamiento asíncrono con arquitecturas orientadas a
              eventos.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                Node.js / Express
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                Python / Django
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                GraphQL
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                RESTful APIs
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                gRPC / Microservicios
              </span>
            </div>
          </div>
          {/* Card 3: Databases / DevOps */}
          <div className="bg-surface-container/60 backdrop-blur-xl p-8 rounded-2xl shadow-sm hover:shadow-xl hover:bg-surface-container-high/80 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary shadow-sm">
                <span className="material-symbols-outlined text-[26px]">
                  cloud_sync
                </span>
              </div>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1 rounded-full bg-surface-container-highest text-tertiary">
                Cloud &amp; DevOps
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
              Bases de Datos &amp; Cloud
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6  grow leading-relaxed">
              Modelado relacional y NoSQL, estrategias de caching en memoria,
              orquestación de contenedores y despliegues sin tiempo de
              inactividad.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                PostgreSQL
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                Redis (In-memory)
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                Docker &amp; K8s
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                AWS (S3, Lambda, EC2)
              </span>
              <span className="font-label-code-sm text-label-code-sm px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface">
                CI/CD GitHub Actions
              </span>
            </div>
          </div>
        </div>

        <div className="w-full bg-surface-container/40 backdrop-blur-md rounded-2xl p-6 flex flex-wrap items-center justify-center gap-3 md:gap-6 shadow-sm">
          <span className="font-label-code-sm text-label-code-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            Clean Code
          </span>
          <span className="text-surface-bright hidden md:inline">•</span>
          <span className="font-label-code-sm text-label-code-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            Arquitectura Escalable
          </span>
          <span className="text-surface-bright hidden md:inline">•</span>
          <span className="font-label-code-sm text-label-code-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            APIs RESTful
          </span>
          <span className="text-surface-bright hidden md:inline">•</span>
          <span className="font-label-code-sm text-label-code-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            CI/CD Automatizado
          </span>
          <span className="text-surface-bright hidden md:inline">•</span>
          <span className="font-label-code-sm text-label-code-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            Optimización de Rendimiento
          </span>
          <span className="text-surface-bright hidden md:inline">•</span>
          <span className="font-label-code-sm text-label-code-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            TDD &amp; Testing
          </span>
          <span className="text-surface-bright hidden md:inline">•</span>
          <span className="font-label-code-sm text-label-code-sm text-on-surface-variant flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            Seguridad Web (OWASP)
          </span>
        </div>
      </div>
    </section>
  );
}
