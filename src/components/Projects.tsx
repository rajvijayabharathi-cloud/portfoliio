import { ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-6 card-hover group flex flex-col"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-gray-500 mt-1">#{String(idx + 1).padStart(2, '0')}</span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {project.features && (
                <ul className="space-y-1.5 mb-4">
                  {project.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-brand-500/10 text-brand-500 dark:text-brand-300 border border-brand-500/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:scale-105 transition-transform"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold glass hover:scale-105 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
