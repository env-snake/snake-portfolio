interface NavigationProps {
  t: any;
  activeSection: string;
  scrollToSection: (section: string) => void;
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export default function Navigation({ t, activeSection, scrollToSection, lang, setLang }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://cdn.poehali.dev/files/1c9de207-5315-48fd-9ca3-1c324d4f2b1a.png" alt="Logo" className="w-12 h-12 rounded-full border-2 border-primary shadow-lg shadow-primary/30" />
          <div>
            <h1 className="text-2xl font-bold text-primary">Snake</h1>
            <p className="text-xs text-muted-foreground">Level Designer</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          {Object.entries(t.nav).map(([key, label]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform hover:after:scale-x-100 ${
                activeSection === key ? 'text-primary after:scale-x-100' : 'text-muted-foreground'
              }`}
            >
              {label}
            </button>
          ))}
          
          <button
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-all border border-primary/30"
          >
            <span className="text-xl">{lang === 'en' ? '🇺🇸' : '🇫🇷'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
