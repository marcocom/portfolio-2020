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
        short_name: 'Marco Comparato',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0F97DB',
        display: 'minimal-ui',
        icon: 'content/assets/logo.png',
      },
    },
    'gatsby-plugin-eslint',
    // 'gatsby-plugin-root-import',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
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
}
