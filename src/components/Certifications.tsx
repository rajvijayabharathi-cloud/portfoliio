import { Award, Calendar } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Certifications() {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="Certifications" subtitle="My credentials" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="glass rounded-2xl p-6 card-hover group"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="p-3 rounded-xl bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors inline-block mb-4">
                <Award className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="font-bold text-base mb-1 group-hover:text-brand-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm font-semibold text-brand-500 dark:text-brand-400 mb-1">{cert.issuer}</p>
              {cert.date && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {cert.date}
                </div>
              )}
              {!cert.date && <div className="mb-3" />}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
