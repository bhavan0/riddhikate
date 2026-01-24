import { useEffect } from 'react';

const CloudflareAnalytics = () => {
  useEffect(() => {
    const token = import.meta.env.VITE_CLOUDFLARE_ANALYTICS_TOKEN;
    if (token) {
      const script = document.createElement('script');
      script.defer = true;
      script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      script.setAttribute('data-cf-beacon', `{"token": "${token}"}`);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default CloudflareAnalytics;
