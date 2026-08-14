"use client"

import { PortfolioLayout } from "@/components/portfolio-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Code, Database, Zap, ExternalLink, Eye } from "lucide-react"
import { AcademicHistory } from "@/components/academic-history"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Page() {
  return (
    <PortfolioLayout>
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Sobre mí</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Soy un estudiante de Ingeniería de Sistemas e Inteligencia Artificial en la{" "}
            <span className="text-foreground font-medium">UPAO</span>, con una alta capacidad de adaptación para
            desempeñarme en diversas áreas de mi carrera, tales como la <span className="text-secondary font-medium">Ciencia de Datos</span>,
            la <span className="text-secondary font-medium">Inteligencia Artificial</span>, la <span className="text-secondary font-medium">Ingeniería de Software</span> y la <span className="text-secondary font-medium">Gestión de Proyectos Tecnológicos</span>.
          </p>
          <p>
            Mi enfoque se orienta al diseño y desarrollo de soluciones tecnológicas integrales que optimicen procesos y aporten valor a la organización. Actualmente, cuento con disponibilidad inmediata para roles de practicante en Trujillo o de forma remota.
          </p>
          <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-white">
            <a href="https://wa.me/51907905925">Contactar Ahora</a>
          </Button>
        </div>
      </section>

      <section id="competencies" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Competencias</h2>
        </div>
        <div className="grid gap-6">
          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all group">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Brain className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">IA & Machine Learning</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Diseño e implementación de modelos de Machine Learning, Percepción Computacional (visión artificial) y algoritmos de IA. Formación alineada con los principios y técnicas de Inteligencia Artificial de la UPAO.
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-secondary/20 hover:border-secondary/50 transition-all group">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                <Code className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Ingeniería de Software</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Arquitectura de Sistemas, Patrones de Diseño, Ingeniería de Requisitos y metodologías ágiles de desarrollo como Agile Development (Scrum).
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all group">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Backend & Data Science</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Gestión avanzada de bases de datos relacionales (PostgreSQL/SGBD) y desarrollo backend en Laravel, integrando conocimientos de Gobierno de Datos y Big Data & Analítica.
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-secondary/20 hover:border-secondary/50 transition-all group">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Automatización & IoT</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Optimización y automatización de flujos complejos mediante n8n e Intelligent Process Automation (IPA). Modelado de procesos (BPMN) en Bizagi e integración de dispositivos con Internet de las Cosas (IoT).
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Skills Técnicos</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Laravel (PHP)",
              "PostgreSQL",
              "n8n (IPA)",
              "Bizagi (BPMN)",
              "Docker (IaC)",
              "Internet de las Cosas (IoT)",
              "Big Data",
              "Gobierno de Datos",
              "Agile (Scrum)",
              "Power BI",
              "Excel Avanzado",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-secondary/10 text-secondary border-none px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
            Educación & Certificación
          </h2>
        </div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                2021 — Presente
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <Dialog>
                    <DialogTrigger asChild>
                      <span
                        className="inline-flex items-center gap-2 font-medium leading-tight text-foreground hover:text-primary group/link text-base cursor-pointer text-left"
                      >
                        Ingeniería de Computación y Sistemas · UPAO
                        <Eye className="h-4 w-4 text-primary shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                      </span>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[90vh] bg-card border-primary/20 flex flex-col p-4">
                      <DialogHeader className="pb-2">
                        <DialogTitle className="text-foreground">
                          Nueva Malla Curricular: Ing. de Sistemas e Inteligencia Artificial
                        </DialogTitle>
                        <DialogDescription>
                          Detalles de la carrera y el plan de estudios actualizado (Solo Vista Previa)
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1 w-full bg-muted rounded-lg overflow-hidden border border-border">
                        <iframe
                          src="/documentos/Estudia_Ingenieria_Sistemas_e_IA.pdf#toolbar=0&navpanes=0"
                          className="w-full h-full"
                          title="Plan de Estudios UPAO"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  Formación integral en desarrollo de software, algoritmos avanzados y gestión de infraestructura tecnológica.
                </p>
                <p className="mt-2 text-xs italic text-muted-foreground/80 leading-relaxed">
                  (La carrera se inició bajo el plan de estudios de Ingeniería de Computación y Sistemas, pero a inicios del año 2025 la UPAO actualizó la malla curricular y denominación oficial a <strong>Ingeniería de Sistemas e Inteligencia Artificial</strong>).
                </p>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                2025
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <Dialog>
                    <DialogTrigger asChild>
                      <span
                        className="inline-flex items-center gap-2 font-medium leading-tight text-foreground hover:text-primary group/link text-base cursor-pointer text-left"
                      >
                        Certificación: Desarrollo con IA · BIG School
                        <Eye className="h-4 w-4 text-primary shrink-0 opacity-70 group-hover/link:opacity-100 transition-opacity" />
                      </span>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[90vh] bg-card border-primary/20 flex flex-col p-4">
                      <DialogHeader className="pb-2">
                        <DialogTitle className="text-foreground">
                          Certificación: Desarrollo con IA - BIG School
                        </DialogTitle>
                        <DialogDescription>
                          Curso de iniciación al desarrollo con IA (Solo Vista Previa)
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex-1 w-full bg-muted rounded-lg overflow-hidden border border-border">
                        <iframe
                          src="/documentos/Certificado_Desarrollo_IA.pdf#toolbar=0&navpanes=0"
                          className="w-full h-full"
                          title="Certificado de Desarrollo con IA"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  La inteligencia artificial no ha llegado para reemplazar a los desarrolladores, sino para potenciarlos, transformando su rol de un "picacódigo" manual a un arquitecto y orquestador estratégico de sistemas inteligentes.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      <section id="academic" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
            Historial Académico
          </h2>
        </div>
        <AcademicHistory />
      </section>
    </PortfolioLayout>
  )
}
