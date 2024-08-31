import { Outlet } from "react-router-dom"
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"

function App() {

  return (
    <>
     <AppHeader/>
     <main>
      <Outlet/>
     </main>
     <AppFooter/>
    </>
  )
}

export default App
