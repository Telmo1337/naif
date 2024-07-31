import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Budget from "../components/Budget"
import AfterHero from "../components/AfterHero"
import Services from "../components/Services"


const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AfterHero />
      <Budget />
      <About />
      <Services />
     
    </>
  )
}

export default MainPage