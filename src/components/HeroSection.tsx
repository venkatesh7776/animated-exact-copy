import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This will create the parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const translateY = scrollPosition * 0.4; // Adjust the scroll speed
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          src="/8263308-uhd_3840_2160_24fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>
      {/* Content */}
      <div className="container-custom relative z-20 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl animate-fade-in text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-center">
            <span className="text-white">KORAT</span>
            <span className="block text-sm text-center tracking-widest text-korat-gold mt-2">Our Founder</span>
          </h1>
          <div className="mt-16 md:mt-24 text-center">
            <h2 className="heading-lg text-center">
              Prestigious Properties, Reserved for<br />
              <span className="font-light">Visionary Investors</span>
            </h2>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
