"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Brain,
  Code,
  Database,
  Zap,
  BookOpen,
  Search,
  Download,
  Eye,
  Award,
  ChevronRight,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react"

// Types of courses
type Category = "ia" | "software" | "infra" | "negocios" | "ciencias" | "humanidades"

interface Course {
  code: string
  name: string
  grade: number | "En progreso"
  credits: number
  category: Category
}

interface SemesterData {
  period: string
  average: string
  approvedCredits: number
  courses: Course[]
}

const ACADEMIC_DATA: SemesterData[] = [
  {
    period: "2026-I (8º Ciclo)",
    average: "15.65",
    approvedCredits: 17,
    courses: [
      { code: "ICSI 677", name: "Internet de las Cosas (IoT)", grade: 16, credits: 4, category: "infra" },
      { code: "ISIA 113", name: "Customer Development", grade: 15, credits: 3, category: "negocios" },
      { code: "ISIA 116", name: "Big Data y Analítica de Datos", grade: 16, credits: 4, category: "ia" },
      { code: "ISIA 117", name: "Proyecto de Investigación", grade: 16, credits: 3, category: "humanidades" },
      { code: "ISIA 118", name: "Gobierno de Datos", grade: 15, credits: 3, category: "ia" },
    ]
  },
  {
    period: "2025-II (7º Ciclo)",
    average: "12.52",
    approvedCredits: 22,
    courses: [
      { code: "ICSI 676", name: "Métodos Cuantitativos para Negocios", grade: 14, credits: 4, category: "negocios" },
      { code: "ISIA 107", name: "Infraestructura como Código (IaC)", grade: 14, credits: 4, category: "infra" },
      { code: "ISIA 110", name: "Machine Learning", grade: 14, credits: 4, category: "ia" },
      { code: "ISIA 111", name: "Percepción Computacional", grade: 12, credits: 3, category: "ia" },
      { code: "ISIA 112", name: "Arquitectura de Sistemas", grade: 13, credits: 4, category: "software" },
      { code: "ISIA 114", name: "Automatización Inteligente de Procesos (IPA)", grade: 15, credits: 3, category: "infra" }
    ]
  },
  {
    period: "2025-I (6º Ciclo)",
    average: "14.16",
    approvedCredits: 24,
    courses: [
      { code: "CIEN 746", name: "Medio Ambiente y Desarrollo Sostenible", grade: 17, credits: 3, category: "humanidades" },
      { code: "HUMA 1185", name: "Metodología de la Investigación Científica", grade: 15, credits: 3, category: "humanidades" },
      { code: "ICSI 546", name: "Deontología Profesional", grade: 16, credits: 2, category: "humanidades" },
      { code: "ISIA 102", name: "Redes y Sistemas Operativos", grade: 14, credits: 4, category: "infra" },
      { code: "ISIA 103", name: "Sistemas Empresariales", grade: 12, credits: 4, category: "infra" },
      { code: "ISIA 108", name: "Inteligencia Artificial, Principios y Técnicas", grade: 14, credits: 4, category: "ia" },
      { code: "ISIA 109", name: "Agile Development", grade: 13, credits: 4, category: "negocios" }
    ]
  },
  {
    period: "2024-II (5º Ciclo)",
    average: "12.84",
    approvedCredits: 25,
    courses: [
      { code: "CIEN 655", name: "Estadística Inferencial", grade: 11, credits: 2, category: "ciencias" },
      { code: "HUMA 1038", name: "Ciudadanía y Derechos Humanos", grade: 13, credits: 3, category: "humanidades" },
      { code: "ICSI 517", name: "Interacción Hombre-Máquina", grade: 16, credits: 4, category: "software" },
      { code: "ICSI 518", name: "Ingeniería de Software I", grade: 11, credits: 4, category: "software" },
      { code: "ICSI 519", name: "Sistemas Operativos", grade: 11, credits: 4, category: "infra" },
      { code: "ICSI 521", name: "Sistemas de Gestión de Base de Datos", grade: 11, credits: 4, category: "software" },
      { code: "ICSI 538", name: "Organización y Gestión de Empresas", grade: 16, credits: 4, category: "negocios" }
    ]
  },
  {
    period: "2024-I (4º Ciclo)",
    average: "12.19",
    approvedCredits: 21,
    courses: [
      { code: "CIEN 651", name: "Estadística Descriptiva", grade: 12, credits: 2, category: "ciencias" },
      { code: "HUMA 1027", name: "Actividad Formativa IV: Vida y Obra de Antenor Orrego", grade: 18, credits: 1, category: "humanidades" },
      { code: "ICSI 512", name: "Paradigmas de Programación", grade: 12, credits: 4, category: "software" },
      { code: "ICSI 513", name: "Ingeniería de Requisitos", grade: 11, credits: 2, category: "software" },
      { code: "ICSI 514", name: "Arquitectura de Computadoras", grade: 11, credits: 4, category: "infra" },
      { code: "ICSI 515", name: "Base de Datos", grade: 13, credits: 4, category: "software" },
      { code: "ICSI 516", name: "Gestión de Procesos de Negocio", grade: 12, credits: 4, category: "negocios" }
    ]
  },
  {
    period: "2023-II (3º Ciclo)",
    average: "15.17",
    approvedCredits: 23,
    courses: [
      { code: "CIEN 648", name: "Física II", grade: 11, credits: 4, category: "ciencias" },
      { code: "CIEN 649", name: "Matemática Discreta", grade: 17, credits: 4, category: "ciencias" },
      { code: "HUMA 1024", name: "Realidad Nacional y Regional", grade: 14, credits: 2, category: "humanidades" },
      { code: "HUMA 1025", name: "Ética y Valores", grade: 17, credits: 2, category: "humanidades" },
      { code: "HUMA 679", name: "Actividad Formativa III: Apreciación de Artes Plásticas", grade: 15, credits: 1, category: "humanidades" },
      { code: "HUMA 903", name: "Filosofía de la Ciencia", grade: 16, credits: 2, category: "humanidades" },
      { code: "ICSI 510", name: "Patrones de Diseño de Software", grade: 17, credits: 4, category: "software" },
      { code: "ICSI 537", name: "Estructura de Datos y Algoritmos", grade: 15, credits: 4, category: "software" }
    ]
  },
  {
    period: "2023-I (2º Ciclo)",
    average: "13.90",
    approvedCredits: 21,
    courses: [
      { code: "CIEN 539", name: "Física I", grade: 12, credits: 4, category: "ciencias" },
      { code: "CIEN 597", name: "Álgebra Lineal y Geometría Descriptiva", grade: 13, credits: 4, category: "ciencias" },
      { code: "CIEN 599", name: "Matemática II", grade: 14, credits: 4, category: "ciencias" },
      { code: "HUMA 1021", name: "Psicología y Desarrollo Humano", grade: 18, credits: 2, category: "humanidades" },
      { code: "HUMA 641", name: "Actividad Formativa II: Apreciación Musical", grade: 16, credits: 1, category: "humanidades" },
      { code: "HUMA 901", name: "Lenguaje II", grade: 12, credits: 2, category: "humanidades" },
      { code: "ICSI 509", name: "Programación Orientada a Objetos", grade: 15, credits: 4, category: "software" }
    ]
  },
  {
    period: "2022-II (1º Ciclo)",
    average: "13.95",
    approvedCredits: 21,
    courses: [
      { code: "CIEN 397", name: "Matemática I", grade: 14, credits: 4, category: "ciencias" },
      { code: "CIEN 532", name: "Física General", grade: 11, credits: 4, category: "ciencias" },
      { code: "HUMA 1012", name: "Actividad Formativa I: IVU y Desarrollo Personal", grade: 15, credits: 1, category: "humanidades" },
      { code: "HUMA 899", name: "Lenguaje I", grade: 13, credits: 4, category: "humanidades" },
      { code: "HUMA 900", name: "Metodología del Aprendizaje Universitario", grade: 15, credits: 2, category: "humanidades" },
      { code: "ICSI 506", name: "Algoritmia y Programación", grade: 17, credits: 4, category: "software" },
      { code: "ICSI 507", name: "Introducción a la Ing. de Sistemas y TI", grade: 14, credits: 2, category: "software" }
    ]
  }
]

const CATEGORY_META = {
  ia: { label: "IA & Ciencia de Datos", icon: Brain, color: "text-primary bg-primary/10 border-primary/20" },
  software: { label: "Desarrollo & Arquitectura", icon: Code, color: "text-secondary bg-secondary/10 border-secondary/20" },
  infra: { label: "Infraestructura & Automatización", icon: Zap, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  negocios: { label: "Gestión & Negocios", icon: SlidersHorizontal, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  ciencias: { label: "Ciencias Básicas", icon: Database, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
  humanidades: { label: "Formación & Metodologías", icon: BookOpen, color: "text-rose-500 bg-rose-500/10 border-rose-500/20" }
}

export function AcademicHistory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all")

  // Filter courses based on search term and category
  const getFilteredCourses = () => {
    let results: { course: Course; period: string }[] = []
    ACADEMIC_DATA.forEach((sem) => {
      sem.courses.forEach((course) => {
        const matchesSearch =
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.code.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = activeCategory === "all" || course.category === activeCategory

        if (matchesSearch && matchesCategory) {
          results.push({ course, period: sem.period })
        }
      })
    })
    return results
  }

  const filteredResults = getFilteredCourses()
  const isSearchingOrFiltering = searchTerm !== "" || activeCategory !== "all"

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-card/30 border-primary/20 backdrop-blur-sm">
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Universidad</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-bold text-foreground">UPAO</span>
            </div>
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
              <span>Campus Principal Trujillo</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/30 border-secondary/20 backdrop-blur-sm">
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Créditos Aprobados</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-bold text-foreground">174</span>
            </div>
            <span className="text-xs text-muted-foreground mt-2 block">Ciclos I al VIII</span>
          </CardContent>
        </Card>

        <Card className="bg-card/30 border-amber-500/20 backdrop-blur-sm">
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Ciclo Actual</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-2xl font-bold text-foreground">9º Ciclo</span>
            </div>
            <span className="text-xs text-emerald-500 mt-2 block">Ciclo 2026-II</span>
          </CardContent>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por curso o código (ej. Algoritmia, ISIA)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-card/40 border-border/80 focus:border-primary/50 text-sm"
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-card/40 border-border/80 hover:text-primary hover:border-primary/50 text-sm shrink-0 cursor-pointer">
                <Eye className="h-4 w-4 text-primary" />
                <span>Ver Historial Académico PDF</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[90vh] bg-card border-primary/20 flex flex-col p-4">
              <DialogHeader className="pb-2">
                <DialogTitle className="text-foreground">
                  Histórico Académico Oficial UPAO
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 w-full bg-muted rounded-lg overflow-hidden border border-border">
                <iframe
                  src="/documentos/Historico_Academico.pdf#toolbar=0&navpanes=0"
                  className="w-full h-full"
                  title="Histórico Académico"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
              activeCategory === "all"
                ? "bg-foreground text-background border-foreground"
                : "bg-card/30 text-muted-foreground border-border hover:border-muted-foreground"
            }`}
          >
            Todos
          </button>
          {Object.entries(CATEGORY_META).map(([key, meta]) => {
            const Icon = meta.icon
            const isSelected = activeCategory === key
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key as Category)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  isSelected
                    ? "bg-foreground text-background border-foreground"
                    : `${meta.color} hover:bg-muted-foreground/5`
                }`}
              >
                <Icon className="h-3 w-3" />
                {meta.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Course List Display */}
      {isSearchingOrFiltering ? (
        <Card className="bg-card/20 border-border/50">
          <CardHeader className="py-4">
            <CardTitle className="text-sm font-semibold text-muted-foreground">
              Resultados de la búsqueda ({filteredResults.length} cursos encontrados)
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            {filteredResults.length > 0 ? (
              <div className="divide-y divide-border/30">
                {filteredResults.map(({ course, period }) => {
                  const meta = CATEGORY_META[course.category]
                  const CategoryIcon = meta.icon
                  return (
                    <div key={course.code} className="flex justify-between items-center py-3.5 group hover:bg-muted-foreground/[0.02] px-2 rounded-md transition-colors">
                      <div className="flex gap-3 items-center min-w-0">
                        <div className={`p-2 rounded-lg border ${meta.color} shrink-0`}>
                          <CategoryIcon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors truncate">
                            {course.name}
                          </h4>
                          <div className="flex gap-2 items-center mt-1 text-xs text-muted-foreground">
                            <span className="font-mono text-muted-foreground/80">{course.code}</span>
                            <span>•</span>
                            <span>{course.credits} créditos</span>
                            <span>•</span>
                            <span className="text-muted-foreground/85">{period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${meta.color} border`}>
                          {meta.label}
                        </span>
                        <div className="text-right">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            course.grade === "En progreso"
                              ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                          }`}>
                            {course.grade === "En progreso" ? "Cursando" : "Aprobado"}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-sm text-muted-foreground">
                No se encontraron cursos que coincidan con tu búsqueda.
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        /* Default view: Grouped by Semester in an Accordion */
        <Accordion type="single" collapsible defaultValue="2026-I (8º Ciclo)" className="w-full space-y-3">
          {ACADEMIC_DATA.map((sem) => (
            <AccordionItem
              key={sem.period}
              value={sem.period}
              className="bg-card/20 hover:bg-card/30 border border-border/60 rounded-xl px-4 overflow-hidden transition-all duration-200"
            >
              <AccordionTrigger className="hover:no-underline py-4 text-left">
                <div className="flex justify-between items-center w-full pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{sem.period}</span>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>{sem.courses.length} cursos</span>
                        <span>•</span>
                        <span>{sem.courses.reduce((acc, c) => acc + c.credits, 0)} créditos</span>
                      </div>
                    </div>
                  </div>
                  {sem.period.includes("Progreso") && (
                    <Badge variant="secondary" className="bg-amber-500/10 text-amber-500 border-none font-semibold text-xs animate-pulse">
                      Cursando
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <div className="grid gap-3">
                  {sem.courses.map((course) => {
                    const meta = CATEGORY_META[course.category]
                    const CategoryIcon = meta.icon
                    return (
                      <div
                        key={course.code}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg bg-card/40 border border-border/40 hover:border-primary/30 transition-all duration-200 group"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className={`p-2 rounded-lg border mt-0.5 ${meta.color} shrink-0`}>
                            <CategoryIcon className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors">
                              {course.name}
                            </h4>
                            <div className="flex flex-wrap gap-2 items-center mt-1 text-xs text-muted-foreground">
                              <span className="font-mono">{course.code}</span>
                              <span>•</span>
                              <span>{course.credits} créditos</span>
                              <span>•</span>
                              <span className="font-semibold text-muted-foreground/80">{meta.label}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center mt-3 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-none border-border/20 shrink-0">
                          <span className="text-xs text-muted-foreground sm:hidden font-medium">Estado:</span>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                            course.grade === "En progreso"
                              ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                          }`}>
                            {course.grade === "En progreso" ? "Cursando" : "Aprobado"}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  )
}
