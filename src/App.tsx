import { Cart } from "pages/Cart"
import OrderPlaced from "pages/OrderPlaced"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import Home from "./pages/home"
import GlobalStyle from "./style/global"
import theme from "./style/themes/default"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/orderPlaced" Component={OrderPlaced} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
