
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import PartnersTicker from './components/PartnersTicker';
import BackToTop from './components/BackToTop';
import LogoPreloader from './components/LogoPreloader';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = ['home', 'services', 'portfolio', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return <LogoPreloader />;
  }

  return (
    <div className="min-h-screen bg-[#1A0F2C] selection:bg-[#570F80] selection:text-white overflow-x-hidden font-['Tajawal'] text-white animate-fade-in">
      <div className="bg-animated">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
        <div className="bottom-glow"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar scrolled={scrolled} currentView={activeSection} onNavigate={handleNavigate} />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <Portfolio />
          
          <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto">
              <div className="glass-card p-12 md:p-24 rounded-[4rem] text-center border-white/5 relative overflow-hidden group shine-overlay">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#570F80]/15 rounded-full blur-[130px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="relative z-10 space-y-8">
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                    هل أنت مستعد <br className="md:hidden" /> <span className="text-gradient">للبدء في مشروعك؟</span>
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                    نحن لا نصمم مجرد صور، نحن نصمم تجارب بصرية ترفع من قيمة علامتك التجارية وتخلق رابطاً عاطفياً مع جمهورك باستخدام أحدث تقنيات التصميم.
                  </p>
                  <div className="pt-6">
                    <button 
                      onClick={() => handleNavigate('contact')}
                      className="group relative px-10 md:px-16 py-6 bg-white text-black hover:bg-[#570F80] hover:text-white rounded-3xl font-black text-lg tracking-widest transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.08)] hover:shadow-[0_25px_60px_-12px_rgba(87,15,128,0.4)]"
                    >
                      اطلب استشارة مجانية
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PartnersTicker />
        </main>

        <Footer />
        <BackToTop />
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
