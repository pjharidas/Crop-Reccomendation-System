import Footer from "../components/Footer"
import { Hero } from "../components/Hero"
import Navbar from "../components/Navbar"

export const Home = ({logged}) => {
  return (
    <div>
        <Navbar logged={logged}/>
        <Hero/>
        <Footer/>
    </div>
  )
}
