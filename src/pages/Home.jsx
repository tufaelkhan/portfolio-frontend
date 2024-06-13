import About from "../components/ui/home/About"
import Banner from "../components/ui/home/Banner"
import Blogs from "../components/ui/home/Blogs"
import Contact from "../components/ui/home/Contact"
import Education from "../components/ui/home/Education"
import Footer from "../components/ui/home/Footer"
import Project from "../components/ui/home/Project"
import Skills from "./Skills"

const Home = () => {
  return (
    <div>
        <Banner/>
        <About/>
        <Skills/>
        <Project/>
        <Blogs/>
        <Education/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home