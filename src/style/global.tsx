import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        background: ${props => props.theme.colors.primary};
        font-family: 'Open Sans', sans-serif;
    }
`

export default GlobalStyle