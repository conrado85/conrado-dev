import React from "react";

export default function Projects() {
  return (
    <section
      className="relative w-full px-margin-mobile lg:px-margin py-24 max-w-7xl mx-auto scroll-mt-20"
      id="proyectos"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-label-code-sm text-label-code-sm text-secondary tracking-widest uppercase mb-3 inline-block">
            // PORTFOLIO SELECCIONADO
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Proyectos Destacados con Impacto Real
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Casos de estudio enfocados en rendimiento crítico, resiliencia ante
          alto tráfico y retorno comercial concreto.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Proyecto 1: CloudMetrics  */}
        <article className="bg-surface-container/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl flex flex-col group transition-all duration-300">
          <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="A modern SaaS telemetry dark dashboard UI mockup showcasing glowing cyan real-time graphs, server latency bar charts, active session counters, and deep slate frosted glass panels with glowing data visualizations."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6jCreGODzOU5AXEn0ASVmw3ZOlXgEHHv_t0Q7XfHXkqmZIlQreugHwVdkx3azrAJnEJk2QNkWTPrbcqkREiT7IYGnjTLog6PdPlwB-2S317_3dgUYnjVVjEAXSmuVzFKkonA4RJrO4Y4VsBzbuj-T9ZOvdrClT6sVYdPKLGGLjXKzBKaa2gijRrqDxw9I_WghEKi1R1y89G4-VTlApb7gC1WP359PVzHMemtvyI0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container/90 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-label-code-sm text-label-code-sm text-on-surface">
                SaaS Analytics
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col grow leading-relaxed ">
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-3">
              CloudMetrics — Plataforma SaaS de Analítica en Tiempo Real
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 grow  leading-relaxed">
              Arquitectura serverless de alta concurrencia capaz de procesar más
              de 2M eventos diarios con latencia submilisegundo y tableros
              interactivos reactivos.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                Next.js 14
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                TypeScript
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                Go / Node.js
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                PostgreSQL
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                AWS
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 bg-surface-container-high/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 px-6 md:px-8 py-4">
              <a
                className="inline-flex items-center gap-1 font-label-ui text-label-ui text-primary hover:text-primary-container transition-colors"
                href="#"
              >
                <span>Demo en vivo</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_outward
                </span>
              </a>
              <a
                className="inline-flex items-center gap-1 font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                <span>GitHub Repo</span>
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
              </a>
            </div>
          </div>
        </article>
        {/* Proyecto 2: NexusPay  */}
        <article className="bg-surface-container/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl flex flex-col group transition-all duration-300">
          <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="High-end B2B fintech payment gateway interface in dark mode featuring encrypted checkout cards, currency balance meters, automated invoice reconciliation, and webhook activity feeds rendered in deep slate and electric cyan accents."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBYiG2Qa9KDYLjDLqbXQS8xAVT68-qWZz6BYYbjfq20Ym-ymsqVLITTY94Y6LLjZDbsE31YzvRnf6I3f4taLwMiCBADL0ayHnTDDBKpfGwiOt7lgmf5jZ_KCeu7sBi8Y1Ota6JB4eJRNZXl9oDT-CuQsQxEd4NUijXI7nexydzXmfPS8Ue3903mA_SLqj3RgqKQ7Dr_SGGJ4QQa6EID8v7L-E8sAO--4wi1b699AU"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container/90 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-code-sm text-label-code-sm text-on-surface">
                Fintech &amp; Payments
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col grow leading-relaxed ">
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-3">
              NexusPay — Gateway de Pagos &amp; Facturación B2B
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 grow leading-relaxed ">
              Integración segura de pasarelas de pago recurrentes con
              reconciliación automática de cobros, webhooks idempotentes y
              cumplimiento PCI-DSS nivel 1.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                React
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                Python/Django
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                Redis
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                Stripe API
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                Docker
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 bg-surface-container-high/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 px-6 md:px-8 py-4">
              <a
                className="inline-flex items-center gap-1 font-label-ui text-label-ui text-primary hover:text-primary-container transition-colors"
                href="#"
              >
                <span>Demo en vivo</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_outward
                </span>
              </a>
              <a
                className="inline-flex items-center gap-1 font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                <span>GitHub Repo</span>
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
              </a>
            </div>
          </div>
        </article>
        {/* Proyecto 3: DevSync */}
        <article className="bg-surface-container/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl flex flex-col group transition-all duration-300">
          <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Collaborative technical documentation code editor interface in dark mode showing multi-user cursor presences, markdown preview split pane, interactive API playground, and git version history in a sleek slate UI."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdEBUfBfpnU3tJvFOCXEinQ7vrgiiT39R2KzYrqV34F591dHbBukt-S7pM8I3awXcUzFq7XY8Ni9QhcxFleJKx5pKQ-QCBvtzooJQxTGcT2FxQdku49u_oWxcefrC8LK3XJCyT8oVXOgvSHuzFykBLKSdCNAkV0CGe2lGyS22zD0iJb1ioDjOwFAy10TjSpEI0TgUcxWSb_9RWII28iENDtqDyNrSLXU0AVc7oGeQ"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container/90 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-label-code-sm text-label-code-sm text-on-surface">
                Developer Tooling
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col grow leading-relaxed ">
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors mb-3">
              DevSync — Espacio Colaborativo de Documentación
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 grow leading-relaxed ">
              Editor colaborativo tipo Notion para equipos de ingeniería con
              sincronización CRDT en tiempo real, playground interactivo de APIs
              y soporte offline-first.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                TypeScript
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                WebSockets
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                Node.js
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                MongoDB
              </span>
              <span className="font-label-code-sm text-label-code-sm px-2.5 py-1 rounded bg-surface-container-highest text-secondary-fixed">
                AWS S3
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 bg-surface-container-high/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 px-6 md:px-8 py-4">
              <a
                className="inline-flex items-center gap-1 font-label-ui text-label-ui text-primary hover:text-primary-container transition-colors"
                href="#"
              >
                <span>Demo en vivo</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_outward
                </span>
              </a>
              <a
                className="inline-flex items-center gap-1 font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                <span>GitHub Repo</span>
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
