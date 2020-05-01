import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"
import capitalize from "lodash/capitalize"


// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import styles from "./recipes.module.css"
import indexStyles from "./index.module.css"

import debounce from "lodash.debounce"
import SearchForm from "../components/search/searchForm"
import SearchResults from "../components/search/searchResults"
import { css } from "@emotion/core"
import Img from "gatsby-image"



const TagsPage = ({ data, location }) => {
  const posts = data.recipes.edges;
  const group = data.tags.group;
  const [results, setResults] = useState([])
  console.log("results", results);
  // console.log("data", data);

  const searchQuery = new URLSearchParams(location.search).get("keywords") || ""

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      const debouncedSearch = debounce(async () => {
        const lunr = await window.__LUNR__.__loaded
        const refs = lunr.en.index.search(searchQuery)
        const posts = refs.map(({ ref }) => lunr.en.store[ref])

        setResults(posts)
      }, 500)

      debouncedSearch()
    }

    if (!searchQuery) setResults([])
  }, [location.search])

  return (
    <Layout >
      <div>
        <Helmet title={data.site.siteMetadata.title} />
        <div className={styles.recipesContainer}>


          <div className={styles.tagsContainer}>
            <h3>Categories</h3>
            <ul>
              {group.map(tag => (
                <li className={styles.tagItem} key={tag.fieldValue}>
                  <Link to={`/recipes/${kebabCase(tag.fieldValue)}/`}>
                    {capitalize(tag.fieldValue)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mainContainer}>
          <div className={styles.recipesHeader}>
          <h1>Recipes</h1>

        </div>
            <SearchForm css={css`text-align:center;`} query={searchQuery} />
            <SearchResults query={searchQuery} results={results} />
            <section className={indexStyles.gallery}>
            <h3>- Recent -</h3>
         <ul>
          {posts.map(post => (
            <Link
              key={post.node.id}
              to={post.node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <li>
                <figure>
                  <Img css={css`height:250px!important;`}
                    fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption><h3> {post.node.frontmatter.title}</h3></figcaption>
                </figure>
                <p>{post.node.excerpt}</p>
              </li>
            </Link>
          ))}
        </ul> 
      </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}



// TagsPage.propTypes = {
//   data: PropTypes.shape({
//     recipes: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired,
//       ),
//     }),
//     tags: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired,
//       ),
//     }),
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }),
//     }),
//   }),
// }

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    recipes: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            featuredImage {
              childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    tags: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    
  }
`