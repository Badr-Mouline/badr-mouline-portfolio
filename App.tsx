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
{number}

{label}

{title}
{children}

)
}

function Tag({ children }: { children: ReactNode }) {
return (

  {children}
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

{project.category === "Software"
? "Software engineering"
: "Data & artificial intelligence"}

{project.id === "01"
? "One city. Connected."
: project.id === "02"
? "From data to discovery."
: project.id === "03"
? "An analytical journey."
: "A healthier everyday."}

{steps.map((step, index) => (

{index > 0 && (

)}

{step}

))}

)
}

export default function App() {
const [menuOpen, setMenuOpen] = useState(false)
const [activeSection, setActiveSection] = useState("about")
const [filter, setFilter] = useState("All projects")
const [expandedProject, setExpandedProject] = useState(null)

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


Skip to content

[ setMenuOpen(false)}
aria-label="Badr Mouline, home"
className="flex items-center gap-3.5"

bm.
Badr Mouline
](#home)

{navigation.map((item) => (

{item}

))}


Let’s connect

setMenuOpen(!menuOpen)}
aria-label={menuOpen ? "Close navigation" : "Open navigation"}
aria-expanded={menuOpen}
aria-controls="mobile-navigation"
className="flex size-11 items-center justify-center rounded-md hover:bg-muted lg:hidden"

{menuOpen ?  : }

{menuOpen && (

{[...navigation, "Contact"].map((item) => (
[ setMenuOpen(false)}
className="block rounded-md px-3 py-3 text-sm hover:bg-muted"

{item}
]({#${item.toLowerCase()}})
))}

)}

COMPUTER SCIENCE · SOFTWARE ENGINEERING


Mouline.
Curious mind. Practical solutions.

Computer science student at the University of Montreal,
exploring the intersection of software engineering, data
science, and artificial intelligence.

[
Explore my work{" "}

](#projects)

Download CV

Montreal, Canada


LinkedIn

At a glance

Student & builder

Unimplemented node type: 7

Thinking beyond it.
Unimplemented node type: 7

A little more about me

Learning from


industry leaders

Google

aws.

IBM

University of


Michigan

Duke


6 certifications

I’m a computer science student with a focus on artificial
intelligence and an ambition to become a software engineer. I
like understanding how things work — and finding ways to make
them work better.

From troubleshooting government IT systems in Rabat to building
a smart city application in Montreal, I bring a rigorous,
creative, and persistent approach to every challenge. My work
spans predictive modeling, data analytics, and an OCR solution
using Python, OpenCV, and Tesseract. I enjoy collaborating with
people who are equally curious.

{[
"Software engineering",
"Artificial intelligence",
"Data science",
].map((item) => (
{item}
))}

{["All projects", "Software", "Data & AI"].map((item) => (
{
setFilter(item)
setExpandedProject(null)
}}
className={min-h-10 rounded-md px-3.5 py-2 text-xs transition-colors ${ filter === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted" }}

{item}
))}

{visibleProjects.map((project) => {
const expanded = expandedProject === project.id
return (

{project.category}

PROJECT / {project.id}

{project.name}
{project.subtitle}

{project.description}

{project.tags.map((tag) => (
{tag}
))}

setExpandedProject(expanded ? null : project.id)
}
aria-expanded={expanded}
aria-controls={project-${project.id}}

{expanded ? "Close project details" : "Explore project"}

{expanded && (

{detail}

)}

)
})}

Practical experience where reliability,


precision, and teamwork matter.

Oct — Dec 2023

Rabat, Morocco

Internship

IT Assistant
Ministry of Economy and Finance

Diagnosed and resolved network and hardware issues,
reducing service interruptions by{" "}
**
30%.
**

Collaborated on workstation modernization to improve staff
productivity.

Entered and verified information for criminal and legal
case files.

Jul — Nov 2023

Rabat, Morocco

Internship

Accounting Clerk
IT service company

{item}

{skills.map((skill) => {
const Icon = skill.icon
return (

{skill.name}
{skill.items.map((item) => (
{item}
))}

)
})}

Education
BSc Computer Science · Artificial Intelligence
University of Montreal

Since Fall 2025

Excellence Scholarship recipient — Talented Students (2025–2028).

Certifications
{certifications.map((cert) => (

{cert.provider}

{cert.name}
{cert.organization} · {cert.date}

))}

I'm always open to discussing new opportunities, software
engineering projects, or AI research.


{email}


LinkedIn

© {new Date().getFullYear()} Badr Mouline. All rights reserved.

)
}
