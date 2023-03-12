import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        padding: 0;
        margin: 0;
    }

    html {
        background: ${props => props.theme.colors.primary};
        font-family: 'Open Sans', sans-serif;
    }

    body {
        max-width: 1440px;
        margin: 0 auto;
    }
`

export default GlobalStyle