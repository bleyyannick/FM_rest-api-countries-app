import CountryPage from "./pages/CountryPage";
import Home from "./pages/Home"; 
import ThemeContextProvider from "./store/ThemeContextProvider";
import './index.css'
function App() {
  return (
    <ThemeContextProvider>
        <Home />
        <CountryPage />
    </ThemeContextProvider>
  )
}

export default App