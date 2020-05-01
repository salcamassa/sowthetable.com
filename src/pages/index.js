import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout/layout"
import GridContainer from "../components/layout/grid-container"
import Img from "gatsby-image"
import styles from "./index.module.css"
import kebabCase from "lodash/kebabCase"
import CategoryCard from "../components/categoryCard/categoryCard"
import Breweries from "../components/breweries"
// import Logo from "../../static/logo.jpeg";


export default ({ data }) => {
  console.log(styles)
  console.log(data)
  const posts = data.recipes.edges;
  const tags = data.tags;

  console.log("tags", tags);
  return (
    

    <Layout>

      {/* CATEGORY BOXES */}
      <h1 css={css`text-align:center; margin-top:10%; margin-bottom:3rem`}>Categories</h1>

      <section className={styles.gallery}>
        <GridContainer>
          <CategoryCard title="Breakfast"></CategoryCard>
          <CategoryCard title="Lunch"></CategoryCard>
          <CategoryCard title="Dinner"></CategoryCard>
        </GridContainer>
      </section>


      {/* Recent Recipes */}
      <h1 css={css`text-align:center; margin-top:10%; `}>Recent Recipes</h1>
      {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
      <section className={styles.gallery}>
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
                <p>{post.node.frontmatter.description}</p>
                {/* <p>{post.node.frontmatter.tags}</p> */}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export const query = graphql`
query {
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
          description
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
  fileName: file(relativePath: { eq: "./images/logo.jpeg" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`