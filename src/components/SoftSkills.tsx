import { Puzzle, Users, GitBranch, BookOpen, Presentation, Shuffle } from 'lucide-react';
import { softSkills } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Puzzle,
  Users,
  GitBranch,
  BookOpen,
  Presentation,
  Shuffle,
};

export default function SoftSkills() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="Soft Skills" subtitle="Beyond the code" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12">
          {softSkills.map((skill, idx) => {
            const Icon = iconMap[skill.icon] ?? Puzzle;
            return (
              <div
                key={skill.name}
                className="glass rounded-2xl p-6 text-center card-hover group"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors mb-3">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-sm font-semibold">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
