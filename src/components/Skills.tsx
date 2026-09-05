import { Code2, Globe, BrainCircuit, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Globe,
  BrainCircuit,
  Wrench,
  Sparkles,
};

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="Skills" subtitle="What I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <div
                key={cat.name}
                className="glass rounded-2xl p-6 card-hover group"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-lg font-bold">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 dark:bg-white/5 border border-white/10 hover:border-brand-500/30 hover:text-brand-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
