import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='currentColor' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-brand-500 dark:text-brand-400 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Hi, I'm <span className="text-gradient">Vijayabharathi R</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-300 mb-4">
              Computer Science Engineering Student
              <span className="mx-2 text-brand-400">|</span>
              Web Developer
              <span className="mx-2 text-brand-400">|</span>
              AI & ML Enthusiast
            </p>

            <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
              {personal.intro}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo('#projects')}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:scale-105 transition-all"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:scale-110 hover:text-brand-400 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-xl glass hover:scale-110 hover:text-brand-400 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass hover:scale-110 hover:text-brand-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right: code visual */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CodeVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
      <div className="relative glass rounded-2xl overflow-hidden shadow-2xl w-[480px] animate-float">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs font-mono text-gray-400">developer.ts</span>
        </div>
        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          <CodeLine num={1}>
            <span className="text-purple-400">const</span> <span className="text-brand-400">developer</span> <span className="text-gray-400">=</span> <span className="text-accent-400">{'{'}</span>
          </CodeLine>
          <CodeLine num={2}>
            <span className="text-pink-400">name</span><span className="text-gray-400">:</span> <span className="text-green-400">'Vijayabharathi R'</span><span className="text-gray-400">,</span>
          </CodeLine>
          <CodeLine num={3}>
            <span className="text-pink-400">role</span><span className="text-gray-400">:</span> <span className="text-green-400">'CSE Student'</span><span className="text-gray-400">,</span>
          </CodeLine>
          <CodeLine num={4}>
            <span className="text-pink-400">university</span><span className="text-gray-400">:</span> <span className="text-green-400">'Anna University'</span><span className="text-gray-400">,</span>
          </CodeLine>
          <CodeLine num={5}>
            <span className="text-pink-400">cgpa</span><span className="text-gray-400">:</span> <span className="text-orange-400">8.32</span><span className="text-gray-400">,</span>
          </CodeLine>
          <CodeLine num={6}>
            <span className="text-pink-400">graduation</span><span className="text-gray-400">:</span> <span className="text-orange-400">2027</span><span className="text-gray-400">,</span>
          </CodeLine>
          <CodeLine num={7}>
            <span className="text-pink-400">interests</span><span className="text-gray-400">: [</span>
          </CodeLine>
          <CodeLine num={8}>
            <span className="text-green-400">'Web Dev'</span><span className="text-gray-400">,</span> <span className="text-green-400">'AI/ML'</span><span className="text-gray-400">,</span>
          </CodeLine>
          <CodeLine num={9}>
            <span className="text-green-400">'Cloud Security'</span><span className="text-gray-400">,</span> <span className="text-green-400">'UI/UX'</span>
          </CodeLine>
          <CodeLine num={10}>
            <span className="text-gray-400">],</span>
          </CodeLine>
          <CodeLine num={11}>
            <span className="text-pink-400">openToWork</span><span className="text-gray-400">:</span> <span className="text-orange-400">true</span>
          </CodeLine>
          <CodeLine num={12}>
            <span className="text-accent-400">{'}'}</span><span className="text-gray-400">;</span>
          </CodeLine>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 hover:bg-white/5 -mx-5 px-5 transition-colors">
      <span className="text-gray-600 select-none w-6 text-right">{num}</span>
      <span className="text-gray-300">{children}</span>
    </div>
  );
}
