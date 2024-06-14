/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import IMG from '../../../assets/tufael.jpg'
import { FaFacebook, FaLinkedin, FaGithub  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from '../../shared/Container';


const About = () => {
  return (
    <Container bgColor={true}>
      <div data-aos="fade-up">
    <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <div className="md:w-1/2">
    <img src={IMG} className="rounded-2xl border border-[#e88b2e] shadow-2xl w-full h-[520px]" />
    </div>
    <div className="md:w-1/2 md:ml-10">
    <h3 className="text-2xl font-semibold mb-5">About Me</h3>
      <h1 className="text-5xl font-bold">I`m Tufael khan</h1>
      <p className="py-6">I am a passionate MERN Stack Developer from Chandpur, Bangladesh, with a Diploma in Computer Science and Engineering. I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in front-end and back-end development, I create responsive and efficient web solutions. Let's connect and collaborate on exciting projects!</p>

      <div className='mt-4 mb-10 flex gap-x-5'>
        <a className='text-5xl' href="https://www.facebook.com/tufaelkhan247"><FaFacebook className='text-[#d17417] border-gray-800' /></a>
        <a className='text-5xl' href="https://github.com/tufaelkhan"><FaGithub className='text-[#d17417] border-gray-800' /></a>
        <a className='text-5xl' href="https://www.linkedin.com/in/tufaelkhan247"><FaLinkedin className='text-[#d17417] border-gray-800' /></a>
        <a className='text-5xl' href="https://x.com/tufaelkhan247"><FaXTwitter className='text-[#d17417] border-gray-800' /></a>
      </div>
      <div>
      <Link to='/contact' className="btn bg-[#d37e2a] hover:border-[#d37e2a]  text-2xl text-white hover:text-gray-800 mr-6">contact with me</Link>
      <button className="btn border-[#d37e2a] hover:bg-[#d37e2a] hover:text-white text-2xl">Download Resume</button>
      </div>

    </div>
  </div>
</div>
    </div>
    </Container>
  )
}

export default About