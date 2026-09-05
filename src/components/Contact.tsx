import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from './About';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div ref={ref} className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading title="Let's Connect" subtitle="Get in touch" />

        <p className="text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-6 mb-12">
          I'm open to opportunities, collaborations, and interesting projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="glass rounded-2xl p-5 flex items-center gap-4 card-hover group"
            >
              <div className="p-3 rounded-xl bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors">
                <Mail className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                <p className="text-sm font-semibold">{personal.email}</p>
              </div>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 card-hover group"
            >
              <div className="p-3 rounded-xl bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors">
                <Github className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">GitHub</p>
                <p className="text-sm font-semibold">{personal.githubHandle}</p>
              </div>
            </a>

            {personal.linkedin ? (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 card-hover group"
              >
                <div className="p-3 rounded-xl bg-brand-500/10 group-hover:bg-brand-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-sm font-semibold">View Profile</p>
                </div>
              </a>
            ) : (
              <div className="glass rounded-2xl p-5 flex items-center gap-4 opacity-60">
                <div className="p-3 rounded-xl bg-brand-500/10">
                  <Linkedin className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-sm font-semibold">Coming soon</p>
                </div>
              </div>
            )}

            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-brand-500/10">
                <MapPin className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                <p className="text-sm font-semibold">Madurai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 border border-white/10 focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-sm resize-none"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              {sent ? (
                <>Opening email...</>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
