import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { translations } from '@/data/translations';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import Navigation from '@/components/Navigation';
import ProjectDialog from '@/components/ProjectDialog';

export default function Index() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const t = translations[lang];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentWord = t.hero.slogans[currentSlogan];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentSlogan((prev) => (prev + 1) % t.hero.slogans.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentSlogan, t.hero.slogans]);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projectImages = [
    'https://cdn.poehali.dev/files/6cdaff67-1fa3-459f-9683-e6ead3300d3e.png',
    'https://cdn.poehali.dev/files/09aa4887-ae45-4ebf-8737-be45564db4f0.png',
    'https://cdn.poehali.dev/files/2644125f-53c4-42ad-b226-22070632cfe4.png'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <BackgroundCanvas mousePos={mousePos} />
      <div className="relative z-10">
        <Navigation 
          t={t} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
          lang={lang} 
          setLang={setLang} 
        />

        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-4xl">
            <h2 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-primary inline-block">
                {typedText}<span className="animate-pulse text-primary/70">|</span>
              </span>{' '}
              <span>{t.hero.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-6 text-lg hover-scale bg-primary hover:bg-primary/80 shadow-lg shadow-primary/30"
              >
                {t.hero.cta1}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="px-8 py-6 text-lg hover-scale border-primary/50 hover:bg-primary/10"
              >
                {t.hero.cta2}
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-16 shadow-lg shadow-primary/30"></div>
            
            <Card className="p-8 mb-8 hover-scale bg-card/50 backdrop-blur-sm border-primary/20">
              <p className="text-muted-foreground mb-4">
                {t.about.bio1}
              </p>
              <p className="text-muted-foreground">
                {t.about.bio2}
              </p>
            </Card>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {t.about.stats.map((stat: any, idx: number) => (
                <Card key={idx} className="bg-card/50 backdrop-blur-sm border-primary/20 p-6 text-center hover-scale">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {t.about.skills.map((skill: string, idx: number) => (
                <Card
                  key={idx}
                  className="p-6 hover:border-primary transition-all hover-scale bg-card/50 backdrop-blur-sm border-primary/20 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/20 mx-auto mb-3">
                    <Icon
                      name={idx === 0 ? 'Hammer' : idx === 1 ? 'Boxes' : idx === 2 ? 'Map' : idx === 3 ? 'Lightbulb' : 'Box'}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-sm font-bold">{skill}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="min-h-screen py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              Work <span className="text-primary">Process</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">{t.process.subtitle}</p>
            <div className="h-1 w-20 bg-primary mx-auto mb-16 shadow-lg shadow-primary/30"></div>
            
            <div className="space-y-4">
              {t.process.steps.map((step: any) => (
                <Card
                  key={step.id}
                  className="p-6 hover:border-primary transition-all hover-scale bg-card/50 backdrop-blur-sm border-primary/20"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50 shadow-lg shadow-primary/20 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">{step.id}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="text-primary">{t.projects.title}</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-12 shadow-lg shadow-primary/30"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {t.projects.items.map((project: any) => (
                <Card
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="hover:border-primary transition-all cursor-pointer group overflow-hidden hover-scale bg-card/50 backdrop-blur-sm border-primary/20"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                    <Icon name="Play" size={64} className="text-primary group-hover:scale-110 transition-transform drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="min-h-screen py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              <span className="text-primary">{t.pricing.title}</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">{t.pricing.subtitle}</p>
            <div className="h-1 w-20 bg-primary mx-auto mb-16 shadow-lg shadow-primary/30"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {t.pricing.packages.map((pkg: any, idx: number) => (
                <Card
                  key={idx}
                  className={`p-8 hover-scale bg-card/50 backdrop-blur-sm transition-all relative ${
                    pkg.popular ? 'border-primary border-2 shadow-xl shadow-primary/20' : 'border-primary/20'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-center mb-4">{pkg.name}</h3>
                  <div className="text-5xl font-bold text-primary text-center mb-8">{pkg.price}</div>
                  
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full ${
                      pkg.popular ? 'bg-primary hover:bg-primary/80 shadow-lg shadow-primary/30' : 'bg-primary/20 hover:bg-primary/30 border border-primary/50'
                    }`}
                  >
                    Order Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-12 shadow-lg shadow-primary/30"></div>
            
            <Card className="p-8 mb-8 border-primary/30 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50"></div>
                <span className="font-bold text-primary">{t.contact.status}</span>
              </div>
              <p className="text-center text-muted-foreground">{t.contact.statusDesc}</p>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-4">
              {t.contact.methods.map((method: any, idx: number) => (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="hover:border-primary transition-all p-6 cursor-pointer group hover-scale bg-card/50 backdrop-blur-sm border-primary/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/20 border border-primary/30 shadow-lg shadow-primary/20">
                          <Icon name={method.icon} size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold">{method.title}</h3>
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        </div>
                      </div>
                      <Icon name="ArrowRight" className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-primary/20 py-8 text-center text-muted-foreground">
          {t.footer}
        </footer>
      </div>

      <ProjectDialog 
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        projectImages={projectImages}
      />
    </div>
  );
}
