import HomePage from "./pages/HomePage"
import { PackageDataProvider } from "./context/PackageDataContext";

function App() {

  return (
    <PackageDataProvider>
      <HomePage/>
    </PackageDataProvider>
  )
}

export default App
