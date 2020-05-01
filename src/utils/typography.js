import Typography from "typography"
import stAnnesTheme from 'typography-theme-st-annes'

stAnnesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h2,h3': {
        marginBottom: rhythm(1 / 2),
    },
    'h1,h2,h3,h4,h5,h6' :{
        marginTop: '0',
    },
    'a': { color: '#D3975B' }
})

const typography = new Typography(stAnnesTheme)

export default typography
export const rhythm = typography.rhythm
