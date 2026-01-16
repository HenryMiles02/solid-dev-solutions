import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"

function App() {


  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <Hero />
      <Services />
      <Projects />
    </div>
  )
}

export default App
