import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="flex flex-col items-center w-full">
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
