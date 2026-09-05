import { Users, Calendar, ChevronRight } from 'lucide-react';
import { leadership } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Leadership() {
  const { ref, visible } = useReveal();

  return (
    <section id="leadership" className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="Leadership" subtitle="Roles & responsibilities" />

        <div className="mt-12">
          {leadership.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 pb-8 last:pb-0">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-brand-500 to-transparent" />
              <div className="absolute left-0 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-500 ring-4 ring-accent-500/20" />

              <div className="glass rounded-2xl p-6 card-hover">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent-500/10">
                    <Users className="w-5 h-5 text-accent-400" />
                  </div>
                  <h3 className="text-lg font-bold">{item.role}</h3>
                </div>
                <p className="text-accent-500 dark:text-accent-400 font-semibold text-sm mb-1">{item.org}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <ChevronRight className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
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
