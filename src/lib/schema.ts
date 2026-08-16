const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xsphere.co.za';

export function organizationGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ManufacturingPlant'],
        '@id': `${baseUrl}/#organization`,
        name: 'Xsphere Marketing and Design',
        alternateName: 'Xphere Marketing and Design',
        url: baseUrl,
        telephone: '+27118699169',
        email: 'info@xsphere.co.za',
        image: `${baseUrl}/images/fabrication-lab.png`,
        description:
          'End-to-end commercial printing and precision CNC manufacturing in Alberton. In-house CNC routing and laser cutting for MDF, ABS, and industrial plastics, plus litho, large format, and a walk-in print centre.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '99 Second Avenue, Florentia',
          addressLocality: 'Alberton',
          addressRegion: 'Gauteng',
          addressCountry: 'ZA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -26.267,
          longitude: 28.122,
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: -26.267,
            longitude: 28.122,
          },
          geoRadius: '50000',
          description: 'Alberton, Alrode, Brackenhurst, Meyersdal, Germiston, East Rand, and Johannesburg South',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Manufacturing and print',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CNC routing and laser cutting' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial litho printing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Large format printing' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Walk-in retail printing' } },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does Xsphere have capacity for high-volume commercial CNC routing in Johannesburg?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Xsphere operates in-house CNC routing on a 3 m × 2 m bed and laser cutting on a 1200 × 900 mm bed in Alberton. Production is focused on MDF, ABS, acrylic, and industrial plastics for East Rand and Johannesburg South contracts.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can Xsphere handle both walk-in printing and large commercial litho contracts?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. A retail print path serves Alberton walk-ins for short-run digital, plans, and binding, while the commercial floor handles litho volume, 3.2 m UV, and CNC programmes.',
            },
          },
        ],
      },
    ],
  };
}
