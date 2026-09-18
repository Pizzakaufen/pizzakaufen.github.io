import { useEffect } from 'react';

/**
 * Hook für Image-Lazy-Loading und Performance-Optimierungen
 * Nutzt native Image-Lazy-Loading Attribute
 */
export function useImageLazyLoading() {
  useEffect(() => {
    // Fallback für Browser ohne natives Lazy-Loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => imageObserver.observe(img));

      return () => imageObserver.disconnect();
    }
  }, []);
}
