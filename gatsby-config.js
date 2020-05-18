export const siteMetadata = {
  title: "Welcome to my personal website!",
  siteUrl: `https://rsun.dev`,
  description: `Rahul's personal website written in gatsby`
};
export const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: config.manifestName,
      short_name: config.manifestShortName,
      start_url: config.pathPrefix || config.manifestStartUrl,
      background_color: config.manifestBackgroundColor,
      theme_color: config.manifestThemeColor,
      display: config.manifestDisplay,
      icon: config.manifestIcon,
    },
  },
  'gatsby-plugin-sass',
  'gatsby-plugin-offline',
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`
];
