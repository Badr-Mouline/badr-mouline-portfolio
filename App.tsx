import React, { useState, useEffect } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [filter, setFilter] = useState('All projects');
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    document.title = "Badr Mouline - Computer Science & Software Engineering";
    document.documentElement.lang = "en";
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "01",
      title: "Connected City Platform",
      category: "Software",
      description: "A comprehensive platform designed for urban management, connecting residents, city agents, and contractors through real-time data flow.",
      icon: "Cpu",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "02",
      title: "AI Predictive Analytics",
      category: "Data & artificial intelligence",
      description: "Advanced machine learning pipeline built to process municipal telemetry and forecast urban resource allocation.",
      icon: "Database",
      tags: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      id: "03",
      title: "Smart Infrastructure",
      category: "Software",
      description: "An analytical dashboard providing deep insights into structural integrity, energy grids, and public transit efficiency.",
      icon: "Layers",
      tags: ["TypeScript", "React", "Tailwind CSS"]
    }
  ];

  const visibleProjects = projects.filter(
    (project) => filter === "All projects" || project.category === filter
  );

  return (
{/* Navigation Bar */}

Badr Mouline

About
Projects
Contact


Download CV

{/* Main Content Sections */}

{/* About Section */}

Hi, I'm Badr Mouline
Computer Science student at Université de Montréal, passionate about software engineering, scalable architectures, and artificial intelligence solutions.

{/* Projects Section */}

Featured Projects
Explore my academic and personal developments.

{['All projects', 'Software', 'Data & artificial intelligence'].map((cat) => (
setFilter(cat)}
className={px-4 py-2 text-sm rounded-lg transition-all ${ filter === cat  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' }}

{cat}
))}

{visibleProjects.map((project) => (

{project.id}

{project.category}

{project.title}
{project.description}

{project.tags.map((tag) => (

{tag}
))}

))}

{/* Contact Section */}

Get In Touch
Whether you have a question, a potential collaboration, or just want to connect, feel free to reach out.


Say Hello

{/* Footer */}

© {new Date().getFullYear()} Badr Mouline. All rights reserved.

);
}
