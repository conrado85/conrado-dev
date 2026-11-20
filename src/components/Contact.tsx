'use client'

import type { FormEvent } from 'react'

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    window.alert('¡Gracias! Tu mensaje ha sido enviado correctamente.')
  }

  return (
    <section
          className="relative w-full px-margin-mobile lg:px-margin py-24 max-w-7xl mx-auto scroll-mt-20"
          id="contacto"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="font-label-code-sm text-label-code-sm text-primary-container tracking-widest uppercase mb-3 inline-block"
            >
              {'// ¿TIENES UN PROYECTO EN MENTE?'}
            </span>
            <h2
              className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4"
            >
              Hablemos y Creemos Algo Increíble Juntos
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tanto si requieres un MVP de alto impacto, una auditoría de
              arquitectura o un colaborador senior a tiempo completo, estaré
              encantado de analizar tu visión.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div
              className="lg:col-span-7 bg-surface-container/70 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between"
            >
              <form
                className="space-y-6"
                id="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block font-label-ui text-label-ui text-on-surface mb-2"
                      htmlFor="name"
                      >Nombre completo</label
                    >
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                      id="name"
                      name="name"
                      placeholder="ej. Carlos Mendoza"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block font-label-ui text-label-ui text-on-surface mb-2"
                      htmlFor="email"
                      >Correo electrónico</label
                    >
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                      id="email"
                      name="email"
                      placeholder="carlos@empresa.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block font-label-ui text-label-ui text-on-surface mb-2"
                    htmlFor="subject"
                    >Asunto</label
                  >
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                    id="subject"
                    name="subject"
                    placeholder="ej. Desarrollo de plataforma SaaS escalable"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block font-label-ui text-label-ui text-on-surface mb-2"
                    htmlFor="message"
                    >Mensaje</label
                  >
                  <textarea
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest/80 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-none"
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre el alcance del proyecto, timeline y objetivos principales..."
                    required
                    rows={5}
                  />
                </div>
                <button
                  className="w-full inline-flex items-center justify-center gap-space-sm px-8 py-4 rounded-xl font-label-ui text-label-ui bg-primary-container text-on-primary-container shadow-[0_0_24px_rgba(56,189,248,0.4)] hover:shadow-[0_0_36px_rgba(56,189,248,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  type="submit"
                >
                  <span>Enviar mensaje</span>
                  <span className="material-symbols-outlined text-[18px]"
                    >send</span
                  >
                </button>
              </form>
            </div>
             {/* Tarjeta Lateral de Datos Directos  */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div
                className="bg-surface-container/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl  grow leading-relaxed flex flex-col justify-between"
              >
                <div>
                  <h3
                    className="font-headline-sm text-headline-sm text-on-surface mb-4"
                  >
                    Información de Contacto
                  </h3>
                  <p
                    className="font-body-sm text-body-sm text-on-surface-variant mb-8 leading-relaxed"
                  >
                    Siempre abierto a discutir nuevos proyectos, oportunidades
                    de consultoría y retos de ingeniería de gran escala.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary-container shrink-0"
                      >
                        <span className="material-symbols-outlined text-[22px]"
                          >mail</span
                        >
                      </div>
                      <div>
                        <div
                          className="font-label-ui text-label-ui text-on-surface-variant"
                        >
                          Correo Electrónico
                        </div>
                        <a
                          className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                          href="mailto:alex@alexdeveloper.com"
                        >
                          alex@alexdeveloper.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary shrink-0"
                      >
                        <span className="material-symbols-outlined text-[22px]"
                          >location_on</span
                        >
                      </div>
                      <div>
                        <div
                          className="font-label-ui text-label-ui text-on-surface-variant"
                        >
                          Ubicación
                        </div>
                        <div className="font-body-md text-body-md text-on-surface">
                          Madrid, España • Remoto Global
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-tertiary shrink-0"
                      >
                        <span className="material-symbols-outlined text-[22px]"
                          >schedule</span
                        >
                      </div>
                      <div>
                        <div
                          className="font-label-ui text-label-ui text-on-surface-variant"
                        >
                          Tiempo de Respuesta
                        </div>
                        <div className="font-body-md text-body-md text-on-surface">
                          Respuesta en menos de 24 horas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-8 pt-6 border-t border-surface-container-highest/60 flex items-center justify-between"
                >
                  <span
                    className="font-label-code-sm text-label-code-sm text-secondary"
                  >
                    GMT+1 (Madrid Timezone)
                  </span>
                  <span
                    className="font-label-code-sm text-label-code-sm text-on-surface-variant"
                  >
                    100% Confidencialidad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
