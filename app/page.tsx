import { PortfolioLayout } from "@/components/portfolio-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Code, Database, Zap, ExternalLink } from "lucide-react"

export default function Page() {
  return (
    <PortfolioLayout>
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Sobre mí</h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Soy un estudiante de Ingeniería de Computación y Sistemas en la{" "}
            <span className="text-foreground font-medium">UPAO</span>, con una visión innovadora enfocada en la
            intersección de la <span className="text-secondary font-medium">Inteligencia Artificial</span> y la
            Ingeniería de Software.
          </p>
          <p>
            Mi enfoque se centra en la creación de soluciones escalables y la automatización de procesos mediante
            tecnologías de vanguardia. Actualmente, cuento con disponibilidad inmediata para roles de practicante en
            Trujillo o de forma remota.
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
              Modelos de Deep Learning, CNNs, Aprendizaje por Refuerzo y Percepción Computacional. Especializado en
              aplicaciones prácticas de visión por computadora.
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
              Arquitectura de sistemas, Patrones de diseño, Metodologías Ágiles (Scrum) e Infraestructura como Código
              (IaC).
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all group">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Database className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Backend & Data</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Dominio de Laravel (PHP), PostgreSQL con enfoque en escalabilidad, y procesamiento distribuido con
              Spark/Kafka.
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-secondary/20 hover:border-secondary/50 transition-all group">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-lg">Automatización Inteligente</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Modelado BPMN en Bizagi, flujos complejos en n8n e implementación de Intelligent Process Automation (IPA).
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Skills Técnicos</h3>
          <div className="flex flex-wrap gap-2">
            {["Power BI", "Excel Avanzado", "n8n", "Bizagi", "PostgreSQL", "Laravel", "Python", "Docker"].map(
              (skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary/10 text-secondary border-none px-3 py-1">
                  {skill}
                </Badge>
              ),
            )}
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
                  <div>
                    <span className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base">
                      Ingeniería de Computación y Sistemas · UPAO
                    </span>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  Formación integral en desarrollo de software, algoritmos avanzados y gestión de infraestructura
                  tecnológica.
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
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Certificación: Desarrollo con IA · BIG School
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  La inteligencia artificial no ha llegado para reemplazar a los desarrolladores, sino para potenciarlos, transformando su rol de un "picacódigo" manual a un arquitecto y orquestador estratégico de sistemas inteligentes.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>
    </PortfolioLayout>
  )
}
