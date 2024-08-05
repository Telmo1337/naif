import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Budget from "../components/Budget"
import AfterHero from "../components/AfterHero"
import Services from "../components/Services"
import ClientSay from "../components/ClientSay"
import Tech from "../components/Tech"
import GetInTouch from "../components/GetInTouch"
import Faq from "../components/Faq"
import Footer from "../components/Footer"





const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AfterHero />
      <Budget />
      <About />
      <Services />
      <ClientSay />
      <Tech />
      <GetInTouch />
      <Faq />
      <Footer />
    </>
  )
}

export default MainPage