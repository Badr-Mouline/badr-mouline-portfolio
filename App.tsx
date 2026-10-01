import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  ContactRound as Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Terminal,
  X,
} from "lucide-react"

const cvUrl = `${import.meta.env.BASE_URL}assets/Badr-Mouline-CV.pdf`
const email = "badr.mouline@umontreal.ca"
const linkedIn = "https://www.linkedin.com/in/badr-mouline/"
const navigation = ["About", "Projects", "Experience", "Skills", "Education"]

const projects = [
  {
    id: "01",
    name: "MaVille",
    subtitle: "A smarter way to connect a city.",
    category: "Software",
    icon: Code2,
    description:
      "A Java-based smart city app connecting residents, city agents, and contractors around Montreal’s roadworks.",
    tags: ["Java", "REST API", "JUnit", "Maven"],
    details: [
      "Modeled the system with UML and C4 architecture, integrating the Montreal Open Data API for real-time roadwork tracking and citizen notifications.",
      "Built tests with JUnit and Mockito, measured coverage with JaCoCo, and followed an Agile development lifecycle using Git and GitHub.",
    ],
  },
  {
    id: "02",
    name: "Space Y vs. SpaceX",
    subtitle: "Turning launch data into insight.",
    category: "Data & AI",
    icon: Sparkles,
    description:
      "An IBM Data Science capstone exploring machine learning to predict rocket reuse and estimate launch costs.",
    tags: ["Python", "Machine Learning", "Data Science"],
    details: [
      "Collected and cleaned complex datasets to support reliable predictive modeling.",
      "Presented the analysis and findings in an interactive dashboard for the space industry.",
    ],
  },
  {
    id: "03",
    name: "Cyclist Case Study",
    subtitle: "Finding the story in the data.",
    category: "Data & AI",
    icon: Database,
    description:
      "An end-to-end Google Data Analytics project in R, exploring trends in cyclist performance and safety.",
    tags: ["R", "Statistics", "Data Visualization"],
    details: [
      "Carried out data collection, processing, visualization, and interpretation.",
      "Applied advanced statistical techniques to validate findings and ensure robust results.",
    ],
  },
  {
    id: "04",
    name: "SantéHub",
    subtitle: "Small habits. Thoughtful interfaces.",
    category: "Software",
    icon: Code2,
    description:
      "A responsive health-habit tracking application built from a Figma design at the University of Montreal.",
    tags: ["JavaScript", "HTML / CSS", "jQuery", "Figma"],
    details: [
      "Developed a single-page application using HTML5, CSS3, JavaScript, jQuery, and DOM manipulation.",
      "Created dynamic charts and filters with an emphasis on accessibility and cross-browser support.",
    ],
  },
]

const skills = [
  {
    name: "Programming",
    icon: Code2,
    items: ["Python", "Java", "R", "SQL", "JavaScript", "C", "HTML / CSS"],
  },
  {
    name: "Data & artificial intelligence",
    icon: Sparkles,
    items: [
      "Machine learning",
      "Deep learning",
      "NLP",
      "Neural networks",
      "Data collection",
      "Data cleaning",
      "Data management",
      "Data analysis",
    ],
  },
  {
    name: "Development & cloud",
    icon: Terminal,
    items: [
      "Git / GitHub",
      "AWS",
      "Maven",
      "JUnit",
      "Figma",
      "VBA",
      "Office 365",
      "Sage 100",
      "Méga Compta",
    ],
  },
  {
    name: "Databases & foundations",
    icon: Database,
    items: [
      "SQL Server",
      "Oracle",
      "Access",
      "Data structures & algorithms",
      "Operations research",
      "Programming paradigms",
    ],
  },
  {
    name: "Analytics & mathematics",
    icon: BookOpen,
    items: [
      "Tableau",
      "Power BI",
      "Linear algebra",
      "Integral calculus",
      "Probability",
      "Statistics",
    ],
  },
]

const certifications = [
  {
    provider: "AWS",
    name: "Cloud Solutions Architect",
    organization: "Amazon Web Services",
    date: "Nov 2024",
  },
  {
    provider: "Google",
    name: "UX Design",
    organization: "Google for Pros",
    date: "Jun 2024",
  },
  {
    provider: "IBM",
    name: "Data Science",
    organization: "IBM",
    date: "Mar 2024",
  },
  {
    provider: "Google",
    name: "Data Analytics",
    organization: "Google for Pros",
    date: "Jan 2024",
  },
  {
    provider: "Michigan",
    name: "Python 3 Programming",
    organization: "University of Michigan",
    date: "Apr 2024",
  },
  {
    provider: "Duke",
    name: "Introduction to Machine Learning",
    organization: "Duke University",
    date: "Oct 2024",
  },
]

function SectionHeading({
  number,
  label,
  title,
  children,
}: {
  number: string
  label: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
      <div>
        <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.12em] uppercase">
          <span className="text-muted-foreground">{number}</span>
          <span className="h-px w-6 bg-border" />
          <span>{label}</span>
        </div>
        <h2 className="font-display text-[30px] leading-[1.25] font-semibold tracking-[-0.02em] whitespace-pre-line sm:text-[36px]">
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-secondary-foreground">
      {children}
    </span>
  )
}

function ProjectVisual({ project }: { project: typeof projects[number] }) {
  const Icon = project.icon
  const dark = project.id === "01"
  const steps =
    project.id === "01"
      ? ["Residents", "City agents", "Contractors"]
      : project.id === "02"
        ? ["Launch data", "ML model", "Rocket reuse"]
        : project.id === "03"
          ? ["Collect", "Process", "Visualize", "Interpret"]
          : ["HTML", "CSS", "JavaScript"]

  return (
    <div
      aria-hidden="true"
      className={`relative -mx-6 -mt-6 mb-6 flex h-[160px] flex-col justify-between overflow-hidden px-6 py-5 sm:-mx-8 sm:-mt-8 sm:px-8 ${
        dark
          ? "bg-primary text-primary-foreground"
          : "border-b border-border bg-secondary"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:24px_24px] ${
          dark ? "text-white/[0.04]" : "text-black/[0.035]"
        }`}
      />
      <div className="relative flex items-center justify-between">
        <span
          className={`text-[10px] font-medium tracking-[0.14em] uppercase ${
            dark ? "text-neutral-400" : "text-muted-foreground"
          }`}
        >
          {project.category === "Software"
            ? "Software engineering"
            : "Data & artificial intelligence"}
        </span>
        <Icon
          size={18}
          strokeWidth={1.3}
          className={dark ? "text-neutral-400" : "text-muted-foreground"}
        />
      </div>
      <div className="relative">
        <p className="mb-4 font-display text-[25px] leading-none font-medium tracking-[-0.025em]">
          {project.id === "01"
            ? "One city. Connected."
            : project.id === "02"
              ? "From data to discovery."
              : project.id === "03"
                ? "An analytical journey."
                : "A healthier everyday."}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              {index > 0 && (
                <ArrowRight
                  size={12}
                  className={dark ? "text-neutral-500" : "text-neutral-400"}
                />
              )}
              <span
                className={`rounded border px-2 py-1 text-[10px] ${
                  dark
                    ? "border-white/15 bg-white/5 text-neutral-300"
                    : "border-border bg-white text-secondary-foreground"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [filter, setFilter] = useState("All projects")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  useEffect(() => {
    document.title = "Badr Mouline — Computer Science & Software Engineering"
    document.documentElement.lang = "en"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
    )
    navigation.forEach((item) => {
      const section = document.getElementById(item.toLowerCase())
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const visibleProjects = projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  )

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="fixed top-3 left-3 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between gap-6 px-6 sm:h-[76px] lg:px-12">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            aria-label="Badr Mouline, home"
            className="flex items-center gap-3.5"
          >
            <span className="flex size-9 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
              bm<span className="text-white/50">.</span>
            </span>
            <span className="font-display text-sm font-bold">Badr Mouline</span>
          </a>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                aria-current={
                  activeSection === item.toLowerCase() ? "location" : undefined
                }
                className={`relative py-2 text-[13px] transition-colors hover:text-foreground ${
                  activeSection === item.toLowerCase()
                    ? "font-semibold text-foreground after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:bg-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-5 rounded-md bg-primary px-4 py-3 text-xs font-medium text-primary-foreground transition-colors hover:bg-neutral-700 sm:flex"
          >
            Let’s connect <ArrowUpRight size={15} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-11 items-center justify-center rounded-md hover:bg-muted lg:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-border px-6 py-5 lg:hidden"
          >
            {[...navigation, "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-3 text-sm hover:bg-muted"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section
          id="home"
          className="mx-auto max-w-[1240px] px-6 pt-14 pb-12 sm:pt-20 lg:px-12 lg:pt-24 lg:pb-16"
        >
          <div className="grid items-center gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-2.5 text-[10px] leading-relaxed font-medium tracking-[0.12em] text-secondary-foreground sm:text-[11px]">
                <span className="size-1.5 shrink-0 rounded-full bg-foreground" />
                <span>COMPUTER SCIENCE · SOFTWARE ENGINEERING</span>
              </div>
              <h1 className="font-display text-[clamp(3.5rem,7.3vw,6.25rem)] leading-[1.07] font-semibold tracking-[-0.035em]">
                Badr
                <br />
                Mouline<span className="text-neutral-400">.</span>
              </h1>
              <p className="mt-7 font-display text-xl leading-relaxed font-medium sm:text-2xl">
                Curious mind. Practical solutions.
              </p>
              <p className="mt-4 max-w-[470px] text-[15px] leading-[1.9] text-muted-foreground">
                Computer science student at the University of Montreal,
                exploring the intersection of software engineering, data
                science, and artificial intelligence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-7 rounded-md bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-neutral-700"
                >
                  Explore my work{" "}
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href={cvUrl}
                  download="Badr-Mouline-CV.pdf"
                  className="inline-flex items-center gap-4 rounded-md border border-border px-5 py-3.5 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Download CV <ArrowDownToLine size={16} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> Montreal, Canada
                </span>
                <span className="h-3 w-px bg-border" />
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-foreground"
                >
                  <Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
            <aside
              aria-label="Profile at a glance"
              className="relative overflow-hidden rounded-xl border border-border bg-secondary p-7 shadow-[0_12px_36px_-24px_#00000030] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  At a glance
                </span>
                <span className="rounded-full border border-border bg-white px-2.5 py-1 text-[10px] font-medium">
                  Student & builder
                </span>
              </div>
              <div className="relative my-8 flex h-32 items-center justify-center">
                <div className="absolute size-36 rounded-full border border-neutral-200" />
                <div className="absolute size-48 rounded-full border border-neutral-200/60" />
                <div className="relative flex size-24 items-center justify-center rounded-2xl border border-white/10 bg-primary text-primary-foreground shadow-[0_10px_24px_-8px_#00000040]">
                  <Code2 size={42} strokeWidth={1.3} />
                </div>
                <span className="absolute top-5 right-[17%] size-2 rounded-full bg-neutral-300" />
                <span className="absolute bottom-2 left-[20%] size-1.5 rounded-full bg-neutral-400" />
              </div>
              <h2 className="font-display text-[23px] leading-snug font-semibold tracking-[-0.02em]">
                Building a foundation.
                <br />
                Thinking beyond it.
              </h2>
              <div className="mt-6 space-y-4 border-t border-neutral-200 pt-5">
                <div className="flex items-start gap-3">
                  <GraduationCap
                    size={17}
                    className="mt-0.5 shrink-0 text-muted-foreground"
                  />
                  <div>
                    <p className="text-xs font-semibold">
                      BSc Computer Science · Artificial Intelligence
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      University of Montreal · Since Fall 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award
                    size={17}
                    className="mt-0.5 shrink-0 text-muted-foreground"
                  />
                  <div>
                    <p className="text-xs font-semibold">
                      Excellence Scholarship recipient
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Talented Students · 2025–2028
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-2 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown size={13} /> A little more about me
          </a>
        </section>

        <div className="border-y border-border bg-secondary/60">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-5 px-6 py-7 lg:px-12">
            <p className="text-[10px] leading-relaxed font-medium tracking-[0.1em] text-muted-foreground uppercase">
              Learning from
              <br />
              industry leaders
            </p>
            <div className="flex flex-1 flex-wrap items-center justify-around gap-x-7 gap-y-5">
              <span className="font-display text-[23px] font-bold tracking-[-0.04em]">
                Google
              </span>
              <span className="font-display text-[25px] leading-none font-bold">
                aws<span className="ml-0.5 text-neutral-400">.</span>
              </span>
              <span className="font-display text-[23px] font-extrabold tracking-[0.06em]">
                IBM
              </span>
              <span className="font-display text-sm leading-tight font-bold">
                University of
                <br />
                <span className="text-lg">Michigan</span>
              </span>
              <span className="font-display text-[24px] font-semibold">
                Duke
              </span>
            </div>
            <a
              href="#certifications"
              className="flex items-center gap-2 text-[11px] text-muted-foreground hover:text-foreground"
            >
              6 certifications <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <section
          id="about"
          className="mx-auto max-w-[1240px] px-6 py-20 lg:px-12 lg:py-24"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
            <SectionHeading
              number="01"
              label="About me"
              title={"Driven by curiosity.\nGrounded in practice."}
            />
            <div>
              <p className="text-[17px] leading-[1.9]">
                I’m a computer science student with a focus on artificial
                intelligence and an ambition to become a software engineer. I
                like understanding how things work — and finding ways to make
                them work better.
              </p>
              <p className="mt-5 text-sm leading-[1.95] text-muted-foreground">
                From troubleshooting government IT systems in Rabat to building
                a smart city application in Montreal, I bring a rigorous,
                creative, and persistent approach to every challenge. My work
                spans predictive modeling, data analytics, and an OCR solution
                using Python, OpenCV, and Tesseract. I enjoy collaborating with
                people who are equally curious.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Software engineering",
                  "Artificial intelligence",
                  "Data science",
                ].map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="border-y border-border bg-secondary/60"
        >
          <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-12 lg:py-24">
            <SectionHeading
              number="02"
              label="Selected projects"
              title="Learning by building."
            >
              <div
                role="group"
                aria-label="Filter projects"
                className="flex w-fit flex-wrap rounded-lg border border-border bg-white p-1"
              >
                {["All projects", "Software", "Data & AI"].map((item) => (
                  <button
                    key={item}
                    aria-pressed={filter === item}
                    onClick={() => {
                      setFilter(item)
                      setExpandedProject(null)
                    }}
                    className={`min-h-10 rounded-md px-3.5 py-2 text-xs transition-colors ${
                      filter === item
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </SectionHeading>
            <div className="grid gap-5 md:grid-cols-2">
              {visibleProjects.map((project) => {
                const expanded = expandedProject === project.id
                return (
                  <article
                    key={project.id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-[border-color,box-shadow] duration-200 hover:border-neutral-400 hover:shadow-[0_10px_30px_-16px_#00000030] sm:p-8"
                  >
                    <ProjectVisual project={project} />
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-medium tracking-[0.08em] text-muted-foreground uppercase">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        PROJECT / {project.id}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs font-medium text-secondary-foreground">
                      {project.subtitle}
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-[1.85] text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                      <button
                        className="flex min-h-11 w-full items-center justify-between border-t border-border pt-4 text-xs font-semibold"
                        onClick={() =>
                          setExpandedProject(expanded ? null : project.id)
                        }
                        aria-expanded={expanded}
                        aria-controls={`project-${project.id}`}
                      >
                        {expanded ? "Close project details" : "Explore project"}
                        <ArrowUpRight
                          size={17}
                          className={`transition-transform ${
                            expanded
                              ? "rotate-90"
                              : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          }`}
                        />
                      </button>
                      {expanded && (
                        <ul
                          id={`project-${project.id}`}
                          className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          {project.details.map((detail) => (
                            <li key={detail} className="flex gap-2">
                              <Check
                                size={14}
                                className="mt-1 shrink-0 text-foreground"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto max-w-[1240px] px-6 py-20 lg:px-12 lg:py-24"
        >
          <SectionHeading
            number="03"
            label="Experience"
            title="Real-world foundations."
          >
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Practical experience where reliability,
              <br className="hidden sm:block" /> precision, and teamwork matter.
            </p>
          </SectionHeading>
          <div className="divide-y divide-border border-y border-border">
            <article className="grid gap-5 py-8 md:grid-cols-[0.65fr_1.6fr]">
              <div>
                <p className="text-xs font-medium">Oct — Dec 2023</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} /> Rabat, Morocco
                </p>
                <span className="mt-4 inline-block rounded-md bg-muted px-2.5 py-1 text-[10px] text-muted-foreground">
                  Internship
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  IT Assistant
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Ministry of Economy and Finance
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-secondary-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
                    <span>
                      Diagnosed and resolved network and hardware issues,
                      reducing service interruptions by{" "}
                      <strong className="font-semibold text-foreground">
                        30%.
                      </strong>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
                    <span>
                      Collaborated on workstation modernization to improve staff
                      productivity.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
                    <span>
                      Entered and verified information for criminal and legal
                      case files.
                    </span>
                  </li>
                </ul>
              </div>
            </article>
            <article className="grid gap-5 py-8 md:grid-cols-[0.65fr_1.6fr]">
              <div>
                <p className="text-xs font-medium">Jul — Nov 2023</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} /> Rabat, Morocco
                </p>
                <span className="mt-4 inline-block rounded-md bg-muted px-2.5 py-1 text-[10px] text-muted-foreground">
                  Internship
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Accounting Clerk
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  IT service company
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-secondary-foreground">
                  {[
                    "Entered invoices and verified debit and credit balances using Sage 100 and Méga Compta.",
                    "Prepared payslips and monthly balance sheets with attention to tax compliance and financial accuracy.",
                    "Processed net salary transfers and checked current and non-current company expenses.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-neutral-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="border-y border-border bg-secondary/60">
          <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-12 lg:py-24">
            <SectionHeading
              number="04"
              label="Technical skills"
              title="A versatile toolkit."
            />
            <div className="grid gap-x-12 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name}>
                    <h3 className="mb-4 flex items-center gap-2.5 text-sm font-semibold">
                      <Icon size={17} strokeWidth={1.5} />
                      {skill.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </div>
                )
              })}
              <div className="rounded-lg border border-border p-5">
                <span className="text-[10px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
                  Beyond the screen
                </span>
                <p className="mt-3 text-sm leading-[1.8] text-secondary-foreground">
                  Machine learning, robotics, science, current affairs — and a
                  good game of basketball.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          className="mx-auto max-w-[1240px] px-6 py-20 lg:px-12 lg:py-24"
        >
          <SectionHeading
            number="05"
            label="Education"
            title="Always a student."
          />
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
            <div className="space-y-0">
              {[
                {
                  degree: "BSc in Computer Science",
                  school: "University of Montreal",
                  note: "Specialization in Artificial Intelligence · Montreal, Canada",
                  date: "Fall 2025 — Present",
                  current: true,
                },
                {
                  degree: "Professional Technician Diploma",
                  school: "MIAGE Group",
                  note: "Computerized Management · Rabat, Morocco",
                  date: "2023",
                  current: false,
                },
                {
                  degree: "Professional Qualification Diploma",
                  school: "MIAGE Group",
                  note: "Data Entry · Rabat, Morocco",
                  date: "2021",
                  current: false,
                },
              ].map((item) => (
                <article
                  key={item.degree}
                  className="flex gap-5 border-b border-border py-6 first:pt-0 last:border-0"
                >
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${
                      item.current ? "bg-primary text-white" : "bg-muted"
                    }`}
                  >
                    <GraduationCap size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-2 text-[11px] text-muted-foreground">
                      {item.date}
                    </p>
                    <h3 className="font-display text-base font-semibold">
                      {item.degree}
                    </h3>
                    <p className="mt-1.5 text-sm">{item.school}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="h-fit rounded-xl border border-border bg-secondary/70 p-6">
              <h3 className="mb-6 flex items-center gap-2.5 text-sm font-semibold">
                <Award size={18} /> Recognition
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Excellence Scholarship",
                    detail: "University of Montreal · Talented Students",
                    date: "2025–2028",
                  },
                  {
                    title: "Second in graduating class",
                    detail:
                      "Professional Data Entry Operator Diploma · MIAGE Group",
                    date: "December 2023",
                  },
                  {
                    title: "Valedictorian",
                    detail:
                      "Computer Management Technician Diploma · MIAGE Group",
                    date: "July 2021",
                  },
                ].map((award) => (
                  <div key={award.title}>
                    <p className="text-sm font-medium">{award.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {award.detail}
                    </p>
                    <p className="mt-1 text-[10px] text-muted-foreground">
                      {award.date}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section
          id="certifications"
          className="mx-auto max-w-[1240px] border-t border-border px-6 py-20 lg:px-12"
        >
          <SectionHeading
            number="06"
            label="Certifications"
            title="Invested in learning."
          >
            <span className="text-xs text-muted-foreground">
              6 certifications · 2024
            </span>
          </SectionHeading>
          <div className="grid gap-x-10 md:grid-cols-2">
            {certifications.map((certificate) => (
              <article
                key={certificate.name}
                className="flex items-center gap-4 border-b border-border py-5"
              >
                <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-md bg-muted font-display text-[11px] font-bold">
                  {certificate.provider}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{certificate.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {certificate.organization}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] text-muted-foreground">
                  {certificate.date}
                </span>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-6 rounded-lg bg-secondary px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold">
                A few ways to say hello.
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Languages that connect me to people.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                ["French", "Fluent"],
                ["Arabic", "Fluent"],
                ["English", "Intermediate"],
                ["Japanese", "Beginner"],
              ].map(([language, level]) => (
                <div key={language}>
                  <p className="text-xs font-medium">{language}</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    {level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-12 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <p className="mb-5 text-[10px] font-medium tracking-[0.14em] text-neutral-400 uppercase">
                  Let’s connect
                </p>
                <h2 className="font-display text-4xl leading-[1.2] font-medium tracking-[-0.025em] sm:text-[52px]">
                  Good things start
                  <br />
                  with a conversation<span className="text-neutral-500">.</span>
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-400">
                  A project, an opportunity, or a shared interest in technology
                  — I’d be happy to hear from you.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-6">
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 border-b border-white/20 pb-5 text-[clamp(0.9rem,2.4vw,1.25rem)]"
                >
                  <Mail size={19} className="shrink-0 text-neutral-400" />
                  <span className="min-w-0 break-all">{email}</span>
                  <ArrowUpRight
                    size={21}
                    className="ml-auto shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
                <div className="flex flex-wrap gap-x-7 gap-y-4 text-xs text-neutral-300">
                  <a
                    href="tel:+14382703219"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <Phone size={14} />
                    +1 (438) 270 3219
                  </a>
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                    <ExternalLink size={12} />
                  </a>
                </div>
                <span className="flex items-center gap-2 text-xs text-neutral-400">
                  <MapPin size={14} />
                  Montreal, Quebec, Canada
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-5 px-6 py-7 text-[11px] text-muted-foreground sm:flex-row lg:px-12">
        <span>© {new Date().getFullYear()} Badr Mouline</span>
        <span className="hidden sm:inline">
          Built with curiosity. Designed with purpose.
        </span>
        <a
          href="#home"
          className="flex items-center gap-2 hover:text-foreground"
        >
          Back to top <ArrowUpRight size={13} />
        </a>
      </footer>
    </div>
  )
}
