
import { BrowserRouter} from "react-router-dom"
import { Footer } from "./components/Footer"
import { AppRoutes } from "./routes"

function App() {
  

  return (
    <BrowserRouter>
      <AppRoutes/>

      <Footer/> /*To appear in all pages*/
    </BrowserRouter>
  )
}

export default App
