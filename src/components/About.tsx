import { GraduationCap, Sparkles } from 'lucide-react';
import { about } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          {/* Bio */}
          <div className="lg:col-span-3 glass rounded-2xl p-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {about.text}
            </p>

            <div className="mt-8">
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4">
                <Sparkles className="w-5 h-5 text-brand-400" />
                Areas of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-brand-500/10 text-brand-500 dark:text-brand-300 border border-brand-500/20 hover:scale-105 hover:bg-brand-500/20 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-brand-500/10">
                  <GraduationCap className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-lg font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                {about.info.map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      {subtitle && (
        <p className="text-sm font-semibold text-brand-500 dark:text-brand-400 uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
    </div>
  );
}
