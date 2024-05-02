// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EnviroMC Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.enviromc.host',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

	  // ...
	  presets: [
		[
		  '@docusaurus/preset-classic',
		  {
			docs: {
			  routeBasePath: '/', // Serve the docs at the site's root
			  /* other docs plugin options */
			},
			blog: false, // Optional: disable the blog plugin
			// ...
		  },
		],
	  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'EnviroMC Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/enviro-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'defaultSidebar',
            position: 'left',
            label: 'Docs',
          },
		  {
			  href: 'https://enviromc.com',
			  label: 'View Pricing',
			  position: 'left',
		  },
		  {
			  href: 'https://discord.gg/enviromc-680399735818944527',
			  label: 'Discord',
			  position: 'left',
		  },
		  {
			  href: 'https://client.enviromc.host/index.php?/tickets/',
			  label: 'Create Web Ticket',
			  position: 'left',
		  },
          {
            href: 'https://github.com/EnviroMC-Docs/Knowledgebase',
            label: 'Contribute (GitHub)',
            position: 'right',
          },
        ],
      },

      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.github,
      },
    }),
};

export default config;