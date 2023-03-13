import { Cart } from "pages/Cart"
import OrderPlaced from "pages/OrderPlaced"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import Home from "./pages/home"
import GlobalStyle from "./style/global"
import theme from "./style/themes/default"


function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <OrderPlaced/>
    </ThemeProvider>
  )
}

export default App
