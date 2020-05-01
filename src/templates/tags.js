import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styles from "../pages/index.module.css"



const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`
  return (
    <Layout>
      <div>
        <h1>{tagHeader}</h1>
        <section className={styles.gallery}>
        <ul>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (

              <Link
                key={slug}
                to={slug}
                css={css`
                text-decoration: none;
                color: inherit;
              `}
              >
              <li>
              <figure>
                  <Img css={css`height:250px!important;`}
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption><h3> {node.frontmatter.title}</h3></figcaption>
                </figure>
                <p>{node.excerpt}</p>
                <p>{node.frontmatter.tags}</p>
              </li>
              </Link>
 
            )
          })}
        </ul>
          </section>
          <div css={css`text-align: center;`}>
          <Link to="/recipes">All Recipes</Link>
          </div>
      </div>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
  }
`