export function trackWebVitals() {
  // Web Vitals tracking function
  if (typeof window !== "undefined") {
    // Track Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics based on entry type
        if (entry.entryType === "measure") {
          const measureEntry = entry as PerformanceMeasure;
          console.log(`${measureEntry.name}: ${measureEntry.duration}ms`);
        } else if (entry.entryType === "navigation") {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log(
            `${navEntry.name}: Load time ${
              navEntry.loadEventEnd - navEntry.loadEventStart
            }ms`
          );
        } else {
          console.log(`${entry.name}: ${entry.duration || 0}ms`);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ["measure", "navigation"] });
    } catch {
      // Fallback for browsers that don't support observer
      console.log("Performance observer not supported");
    }
  }
}

export function preloadCriticalResources() {
  // Preload critical resources
  if (typeof window !== "undefined") {
    // Preload critical fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "preload";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Boldonse&display=swap";
    fontLink.as = "style";
    document.head.appendChild(fontLink);
  }
}
