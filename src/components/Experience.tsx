import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="mt-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 pb-8 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-accent-500 to-transparent" />
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-brand-500/20" />

              <div className="glass rounded-2xl p-6 card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-brand-500/10">
                    <Briefcase className="w-5 h-5 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                </div>
                <p className="text-brand-500 dark:text-brand-400 font-semibold text-sm mb-1">{exp.company}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.date}
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <ChevronRight className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
