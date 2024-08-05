import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Budget from "../components/Budget"
import AfterHero from "../components/AfterHero"
import Services from "../components/Services"
import GoToTop from "../components/GoToTop"
import ClientSay from "../components/ClientSay"
import Tech from "../components/Tech"




const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AfterHero />
      <Budget />
      <About />
      <Services />
      <GoToTop />
      <ClientSay />
      <Tech />
    </>
  )
}

export default MainPage