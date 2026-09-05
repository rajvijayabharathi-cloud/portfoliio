import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { navLinks, personal } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 font-bold text-lg"
          >
            <Code2 className="w-6 h-6 text-brand-400" />
            <span className="text-gradient">Vijayabharathi R</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors rounded-lg hover:bg-brand-500/5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggle}
              className="ml-2 p-2 rounded-lg glass hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5 text-brand-400" /> : <Moon className="w-5 h-5 text-brand-600" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-lg glass hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5 text-brand-400" /> : <Moon className="w-5 h-5 text-brand-600" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg glass"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 animate-fade-in-down">
            <div className="glass rounded-2xl p-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-brand-500/5 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
