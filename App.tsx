
import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // تزامن وقت التحميل مع الـ Preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      revealElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [loading]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative min-h-screen selection:bg-[#570F80] selection:text-white overflow-x-hidden">
      {/* الخلفية التفاعلية */}
      <div className="fixed inset-0 -z-10 bg-[#0F0819]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#570F80]/15 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[100px] rounded-full"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Partners />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
