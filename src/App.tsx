import { ThemeProvider } from "styled-components"
import GlobalStyle from "./style/global"
import theme from "./style/themes/default"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <h1>Hello World !</h1>
    </ThemeProvider>
  )
}

export default App
