const path = require('path');
module.exports = {
  siteMetadata: {
    title: 'Marco Comparato Portfolio',
    author: 'Marco Comparato',
    description: 'A portfolio website.',
    siteUrl: 'http://www.marcocomparato.com/',
  },
  plugins: [
    {
      // Adds a manifest file
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Marco Comparato Portfolio',
        short_name: 'marcocomparato',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0F97DB',
        display: 'minimal-ui',
        icon: 'content/assets/logo.png',
        crossOrigin: 'use-credentials',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'heros',
        path: `${__dirname}/src/assets/projects/heros`,
        ignore: [
          '**/\.*',
        ],
      }
    },
    'gatsby-plugin-eslint',
    // 'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: { '@src': 'src' },
        extensions: ['js'],
      },
    },
  ],
};
