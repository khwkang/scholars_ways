module.exports = {
  siteMetadata: {
    title: 'Scholars Way Daoist Healing Art',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: true
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        // your segment write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        prodKey: `eb2jgDZTjAmBwOPzVfUkSB1WIaAsAayF`,

        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: `eb2jgDZTjAmBwOPzVfUkSB1WIaAsAayF`,

        // whether you want to include analytics.page()
        // optional; boolean that defaults to true
        // if false, then don't forget to manually add it to your codebase manually!
        trackPage: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify'
  ],
}
