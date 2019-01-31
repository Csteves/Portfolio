const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Craig Stevens', // Navigation and Site Title
  siteTitleAlt: 'Craig Stevens', // Alternative Site title for SEO
  siteTitleShort: 'Craig', // short_name for manifest
  siteHeadline: 'Craigs Stevens portfolio website.', // Headline for schema.org JSONLD
  siteUrl: 'https://foot-print.net', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Portfolio Site.',
  author: 'Craig Stevens', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@cteves44', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
