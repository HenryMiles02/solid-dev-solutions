import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"

function App() {


  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <Hero />
      <Services />
    </div>
  )
}

export default App
