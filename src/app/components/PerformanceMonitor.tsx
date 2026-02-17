"use client";

import { useEffect, useState } from "react";

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  useEffect(() => {
    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as any;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (!layoutShiftEntry.hadRecentInput) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              clsValue += layoutShiftEntry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // TTFB (Time to First Byte)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as any;
        if (navigationEntry) {
          setMetrics(prev => ({ 
            ...prev, 
            ttfb: navigationEntry.responseStart - navigationEntry.requestStart 
          }));
        }
      }
    };

    measureWebVitals();

    // Cleanup
    return () => {
      if ('PerformanceObserver' in window) {
        const observers = [new PerformanceObserver(() => {})];
        observers.forEach(observer => observer.disconnect());
      }
    };
  }, []);

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg border border-violet-600/30 text-sm font-mono">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
        <div>FID: {metrics.fid.toFixed(0)}ms</div>
        <div>CLS: {metrics.cls.toFixed(3)}</div>
        <div>TTFB: {metrics.ttfb.toFixed(0)}ms</div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
