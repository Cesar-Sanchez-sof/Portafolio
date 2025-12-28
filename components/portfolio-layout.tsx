import type { ReactNode } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-24">
        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* Header / Sidebar */}
          <header className="lg:sticky lg:top-24 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-0">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Cesar Diego Sanchez Chiroque</h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">
                Practicante en Ingieneria de Sistemas e Inteligencia Artificial
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
                Estudiante de Ingeniería de Computación y Sistemas en la UPAO, apasionado por la automatización
                inteligente y la IA.
              </p>

              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3 active" href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary group-focus-visible:text-primary">
                        Sobre mí
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#competencies">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary group-focus-visible:text-primary">
                        Competencias
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="group flex items-center py-3" href="#education">
                      <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary group-focus-visible:text-primary">
                        Educación
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li>
                <a
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  href="mailto:cdiegosanch8@gmail.com"
                  title="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  href="https://www.linkedin.com/in/cesar-sanchez-aa68593a0"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-0">
            {children}
            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0 mt-24">
              <p>Diseñado y desarrollado profesionalmente. Construido con Next.js y Tailwind CSS. Trujillo, Perú.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
