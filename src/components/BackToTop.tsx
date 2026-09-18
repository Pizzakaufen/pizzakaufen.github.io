import { useEffect, useState } from 'react';
import { ArrowIcon } from './Icons';

/**
 * Back-to-Top Button - wird sichtbar, wenn der Nutzer nach unten scrollt
 * Glatter Scroll zurück nach oben
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Nach oben scrollen"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{
            background: 'var(--accent-color)',
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(255, 106, 61, 0.3)',
            animation: 'scale-in 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 106, 61, 0.4)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 106, 61, 0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowIcon width={20} height={20} style={{ transform: 'rotate(180deg)' }} />
        </button>
      )}
    </>
  );
}
