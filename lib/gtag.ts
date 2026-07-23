// lib/gtag.ts
type GtagParams = Record<string, unknown>;

export function safeGtag(
  command: string,
  eventName?: string,
  params?: GtagParams
) {
  if (
    typeof window === "undefined" ||
    typeof (window as any).gtag !== "function"
  ) {
    return;
  }

  (window as any).gtag(command, eventName, params);
}

// Helper functions for common events
export function trackEvent(eventName: string, params?: GtagParams) {
  safeGtag('event', eventName, params);
}

export function trackPageView(url: string) {
  safeGtag('config', 'G-XXXXXXXXXX', {
    page_path: url,
  });
}

export function trackServiceView(serviceName: string, position: number) {
  trackEvent('view_service_card', {
    service: serviceName,
    position: position,
  });
}