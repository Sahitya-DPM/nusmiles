type LegacyRedirect = {
  source: string;
  destination: string;
  permanent: true;
};

/**
 * T-01 diagnosis mapping: retired or aliased URLs and the closest live equivalent.
 * Booking-intent routes are listed first so crawlers and patients land on live pages.
 */
export const legacyRedirects: LegacyRedirect[] = [
  // Booking-intent aliases for /dental-implants
  { source: '/dental-implant', destination: '/dental-implants', permanent: true },
  { source: '/implants', destination: '/dental-implants', permanent: true },
  { source: '/implant-dentistry', destination: '/dental-implants', permanent: true },
  { source: '/services/dental-implants', destination: '/dental-implants', permanent: true },
  { source: '/dental-implants-stockton', destination: '/dental-implants', permanent: true },

  // Booking-intent aliases for /all-on-4-implant-dentures
  { source: '/all-on-4', destination: '/all-on-4-implant-dentures', permanent: true },
  { source: '/all-on-4-dental-implants', destination: '/all-on-4-implant-dentures', permanent: true },
  { source: '/all-on-4-implants', destination: '/all-on-4-implant-dentures', permanent: true },
  { source: '/allon4', destination: '/all-on-4-implant-dentures', permanent: true },
  { source: '/all-on-four', destination: '/all-on-4-implant-dentures', permanent: true },
  { source: '/implant-dentures', destination: '/all-on-4-implant-dentures', permanent: true },

  // Booking-intent aliases for /contact
  { source: '/contact-us', destination: '/contact', permanent: true },
  { source: '/contactus', destination: '/contact', permanent: true },
  { source: '/contact-our-office', destination: '/contact', permanent: true },

  // Booking-intent aliases for /appointment
  { source: '/request-appointment', destination: '/appointment', permanent: true },
  { source: '/schedule-appointment', destination: '/appointment', permanent: true },
  { source: '/make-an-appointment', destination: '/appointment', permanent: true },
  { source: '/book-appointment', destination: '/appointment', permanent: true },
  { source: '/book-an-appointment', destination: '/appointment', permanent: true },
  { source: '/schedule', destination: '/appointment', permanent: true },
  { source: '/free-consultation', destination: '/appointment', permanent: true },
  { source: '/consultation', destination: '/appointment', permanent: true },

  // Retired sitemap locations → live XML sitemap
  { source: '/sitemap', destination: '/sitemap.xml', permanent: true },
  { source: '/sitemap.html', destination: '/sitemap.xml', permanent: true },
  { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
  { source: '/page-sitemap.xml', destination: '/sitemap.xml', permanent: true },
  { source: '/post-sitemap.xml', destination: '/sitemap.xml', permanent: true },

  // Retired patient-education and practice URLs
  {
    source: '/patient-education/root-canal-therapy',
    destination: '/patient-education/root-canal-treatment',
    permanent: true,
  },
  {
    source: '/patient-education/dentures',
    destination: '/all-on-4-implant-dentures',
    permanent: true,
  },
  { source: '/meet-the-doctor', destination: '/dental-staff', permanent: true },
  { source: '/meet-the-doctors', destination: '/dental-staff', permanent: true },
  { source: '/our-doctors', destination: '/dental-staff', permanent: true },
  { source: '/our-team', destination: '/dental-staff', permanent: true },
  { source: '/our-office', destination: '/office', permanent: true },
  { source: '/office-tour', destination: '/office', permanent: true },
  { source: '/office-gallery', destination: '/office', permanent: true },
  { source: '/new-patients', destination: '/resources', permanent: true },
  { source: '/patient-forms', destination: '/resources', permanent: true },
  { source: '/forms', destination: '/resources', permanent: true },
  { source: '/services', destination: '/dental-services', permanent: true },
  { source: '/our-services', destination: '/dental-services', permanent: true },

  // Legacy WordPress category archives
  { source: '/category/:slug', destination: '/blog/category/:slug', permanent: true },
  { source: '/category/:slug/', destination: '/blog/category/:slug', permanent: true },
];
