import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import Ourwork from './components/Ourwork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "dark")


  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Refs for custom cursor position tracking
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })
 useEffect(() => {
  const handleMouseMove = (e) => {   // typo fix
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  let rafId;

  const animate = () => {
    position.current.x += (mouse.current.x - position.current.x) * 0.1;
    position.current.y += (mouse.current.y - position.current.y) * 0.1;  // ← yahan .y fix karo

    if (dotRef.current && outlineRef.current) {
      dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
      outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
    }

    rafId = requestAnimationFrame(animate);
  };

  document.addEventListener('mousemove', handleMouseMove);
  animate();

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(rafId);   // ← loop band karo
  };
}, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Ourwork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
      {/* custom cursor ring */}
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]' style={{transition:'transform 0.1s ease-out'}}> </div>

      {/* custom cursor dot */}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full border border-primary pointer-events-none z-[9999]'>

      </div>
    </div>
  )
}

export default App
