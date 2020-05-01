import React from "react"
import { StaticQuery, graphql, Link, } from "gatsby"
import Img from "gatsby-image"
import styles from './header.module.css'
import { css } from "@emotion/core"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.header} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #f5f5f5' }}>
        <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Link
            to={'./recipes'}
            css={css`
                text-decoration: none;
                color: inherit;
              `}
          >
            <h3 style={{ marginBottom: "0px"}}>Recipes</h3>
          </Link>
        </div>
        <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Link
            to={'./'}
            css={css`
                text-decoration: none;
                color: inherit;
              `}
          >
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </Link>
        </div>
        <div style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>
          <div css={css`
            margin-left:1rem;
            display:inline-block;
          `}
          >
            <a href='https://www.pinterest.com/sowthetable/'>
              <FontAwesomeIcon icon={['fab', 'pinterest-p']} />
            </a>
          </div>
          <div
            css={css`
            margin-left:1rem;
            display:inline-block;
          `}
          >
            <a href='https://www.facebook.com/SowTheTable/'>
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
          </div>
          <div
            css={css`
            margin-left:1rem;
            display:inline-block;
          `}
          >
            <a href='https://www.reddit.com/user/SowTheTable/posts/'>
              <FontAwesomeIcon icon={['fab', 'reddit-alien']} />
            </a>
          </div>
          <div
            css={css`
            margin-left:1rem;
            display:inline-block;
          `}
          >
            <a href='https://twitter.com/SowTheTable'>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </div>
          <div
            css={css`
            margin-left:1rem;
            display:inline-block;
          `}
          >
            <a href='https://www.instagram.com/sowthetable/'>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </div>
        </div>
      </div>
    )}
  />
)
export default Image