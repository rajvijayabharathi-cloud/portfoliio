import { Github, Mail, Linkedin, Code2, ArrowUp } from 'lucide-react';
import { personal } from '@/data/portfolio';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-4">
          <button onClick={scrollTop} className="flex items-center gap-2 font-bold text-lg">
            <Code2 className="w-6 h-6 text-brand-400" />
            <span className="text-gradient">{personal.name}</span>
          </button>

          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
            {personal.title}
          </p>

          <div className="flex gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:scale-110 hover:text-brand-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
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
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-xl glass hover:scale-110 hover:text-brand-400 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

          <p className="text-xs text-gray-500 dark:text-gray-500">
            © 2026 {personal.name}. All Rights Reserved.
          </p>
        </div>

        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 p-3 rounded-xl glass shadow-lg hover:scale-110 transition-transform z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-brand-400" />
        </button>
      </div>
    </footer>
  );
}
