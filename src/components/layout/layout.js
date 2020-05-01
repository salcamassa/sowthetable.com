import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Header from "./header"

import { rhythm } from "../../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header title={data.site.siteMetadata.title}></Header>
      

      {children}
    </div>
  )
}