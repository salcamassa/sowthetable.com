import React from "react"
import { css } from "@emotion/core"

export default ({ children }) => {
    return (
        <div
            css={css`
            display: grid;
            list-style: none;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            grid-gap: 1rem;
        `}
        >
            {children}
        </div>
    )
}