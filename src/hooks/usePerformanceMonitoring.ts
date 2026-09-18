import { useEffect } from 'react';

/**
 * Hook für Performance-Monitoring der Web Vitals
 * Misst LCP, FID/INP, CLS
 */
export function usePerformanceMonitoring() {
  useEffect(() => {
    // Web Vitals Monitoring nur in Production
    if (!('PerformanceObserver' in window)) return;

    // LCP - Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (process.env.NODE_ENV === 'development') {
          console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch {
      // Fallback if LCP is not supported
    }

    // CLS - Cumulative Layout Shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            if (process.env.NODE_ENV === 'development') {
              console.log('CLS:', (entry as any).value);
            }
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch {
      // Fallback if CLS is not supported
    }
  }, []);
}
