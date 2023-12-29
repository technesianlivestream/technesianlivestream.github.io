// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The TechNesian Live Stream',
  tagline: 'Exploring Cloud Technology, DevOps, and Cybersecurity',
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
      //title: 'The TechNesian Live Stream',
      logo: {
        alt: 'TLS Logo',
        src: 'img/technesian-logo.png', // Update your logo path
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'About',
        },
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
      copyright: `Copyright © ${new Date().getFullYear()} The TechNesian Live Stream. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }),
};

module.exports = config;
