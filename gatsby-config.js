module.exports = {
  siteMetadata: {
    title: `Sow The Table`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "en" }],
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "description", store: true, attributes: { boost: 5 } },
          { name: "content" },
          { name: "url", store: true },
          { name: "date", store: true },
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            url: node => node.fields.slug,
            date: node => node.frontmatter.date,
          },
        },
        filename: "search_index.json",
      },
    },
  ],
}