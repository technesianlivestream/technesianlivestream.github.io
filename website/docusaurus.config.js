module.exports = {
  title: 'The TechNesian Live Stream',
  tagline: 'Pasifika Engineers Exploring Cloud, DevOps & Cyber Security',
  favicon: 'img/favicon.ico',

  url: 'https://technesianlivestream.github.io',
  baseUrl: '/',

  organizationName: 'technesianlivestream', // Your GitHub org/user name.
  projectName: 'technesianlivestream.github.io', // Your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-XXXXXX', // Update this if you have a new tracking ID
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig: ({
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    image: 'img/technesian-social-card.png', // Update this if you have a new social card image
    navbar: {
      style: 'primary',
      title: 'The TechNesians',
      logo: {
        alt: 'TLS Logo',
        src: 'img/tls-logo-circle.png', // Update your logo path
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          position: 'left',
          label: '🗃️ Docs',
        },
        { to: "about/", label: "About", position: "right" },
        {
          href: 'https://github.com/technesianlivestream/technesianlivestream',
          label: 'GitHub',
          position: 'right',
        },
        // Add other navbar items here if needed
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Update footer links as needed
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: '/docs/intro',
            },
          ],
        },
        // Add other footer sections here if needed
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The TechNesian Live Stream.`,
    },
    prism: {
      additionalLanguages: ['ruby', 'hcl', 'docker', 'yaml'],
      theme: require('prism-react-renderer/themes/nightOwl')
    },
  }),
};
