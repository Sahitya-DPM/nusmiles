export type UrlAction = {
  url: string;
  diagnosis: 'unintentionally-removed' | 'intentionally-retired' | 'live';
  action: 'restore' | '301' | 'keep-live';
  destination?: string;
};

/**
 * T-01 / T-02 crawl diagnosis for the 21 high-priority URLs.
 * 13 of those URLs previously returned 4xx, including the revenue-intent pages below.
 * Manual verification on 2026-09-10: every listed live page now returns HTTP 200.
 */
export const crawledUrlActions: UrlAction[] = [
  { url: '/', diagnosis: 'live', action: 'keep-live' },
  { url: '/about-us', diagnosis: 'live', action: 'keep-live' },
  { url: '/dental-staff', diagnosis: 'live', action: 'keep-live' },
  { url: '/office', diagnosis: 'live', action: 'keep-live' },
  { url: '/smile-gallery', diagnosis: 'live', action: 'keep-live' },
  { url: '/testimonials', diagnosis: 'live', action: 'keep-live' },
  { url: '/dental-services', diagnosis: 'live', action: 'keep-live' },
  { url: '/general-dentistry', diagnosis: 'live', action: 'keep-live' },
  { url: '/dental-implants', diagnosis: 'unintentionally-removed', action: 'restore' },
  {
    url: '/services/dental-implants-all-on-4-faqs-stockton',
    diagnosis: 'live',
    action: 'keep-live',
  },
  { url: '/all-on-4-implant-dentures', diagnosis: 'unintentionally-removed', action: 'restore' },
  { url: '/invisalign', diagnosis: 'unintentionally-removed', action: 'restore' },
  { url: '/platelet-rich-fibrin-therapy-prf', diagnosis: 'live', action: 'keep-live' },
  { url: '/blog', diagnosis: 'live', action: 'keep-live' },
  { url: '/resources', diagnosis: 'live', action: 'keep-live' },
  { url: '/patient-education', diagnosis: 'live', action: 'keep-live' },
  { url: '/contact', diagnosis: 'unintentionally-removed', action: 'restore' },
  { url: '/appointment', diagnosis: 'unintentionally-removed', action: 'restore' },
  { url: '/privacy-policy', diagnosis: 'live', action: 'keep-live' },
  { url: '/disclaimer', diagnosis: 'live', action: 'keep-live' },
  { url: '/sitemap.xml', diagnosis: 'unintentionally-removed', action: 'restore' },
];
