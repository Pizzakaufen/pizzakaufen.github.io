import type { SVGProps } from 'react';

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false as const,
};

export const GitHubIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.32 1.08 2.88.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const DiscordIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M19.3 5.36A16.4 16.4 0 0 0 15.2 4.1l-.35.7a12.3 12.3 0 0 1 3.6 1.5 11.6 11.6 0 0 0-8.9 0 12.3 12.3 0 0 1 3.6-1.5L12.8 4.1a16.4 16.4 0 0 0-4.1 1.26C5.6 9.9 4.8 14.35 5.2 18.73a16.3 16.3 0 0 0 4.94 2.5l.6-1.02a12.7 12.7 0 0 1-1.94-.93l.42-.33a11.7 11.7 0 0 0 9.56 0l.42.33c-.6.36-1.25.67-1.94.93l.6 1.02a16.3 16.3 0 0 0 4.94-2.5c.47-5.08-.8-9.48-3.5-13.37ZM9.75 16.06c-.96 0-1.75-.88-1.75-1.96s.77-1.97 1.75-1.97c.99 0 1.78.89 1.76 1.97 0 1.08-.78 1.96-1.76 1.96Zm6.5 0c-.96 0-1.75-.88-1.75-1.96s.77-1.97 1.75-1.97c.99 0 1.78.89 1.76 1.97 0 1.08-.77 1.96-1.76 1.96Z" />
  </svg>
);

export const MailIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const TikTokIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p} fill="currentColor" stroke="none">
    <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.85-2.48V9.75a5.68 5.68 0 1 0 4.94 5.63V8.9a7.2 7.2 0 0 0 4.2 1.35V7.16a4.25 4.25 0 0 1-3.14-1.34Z" />
  </svg>
);

export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ExternalIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10 14" />
    <path d="M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
  </svg>
);

export const SunIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </svg>
);

export const MoonIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
);

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p} width={20} height={20}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p} width={20} height={20}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const MotionIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 12h4l2.5-6 3 12 2.5-6h6" />
  </svg>
);
