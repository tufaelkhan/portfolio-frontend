import { FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
  <nav className="grid grid-flow-col gap-4 text-2xl gap-x-20 mb-8">
    <Link to='/about' className="link link-hover hover:text-[#e88b2e] duration-500">About Me</Link>
    <Link to='/blog' className="link link-hover hover:text-[#e88b2e] duration-500">Blog</Link>
    <Link to='/skills' className="link link-hover hover:text-[#e88b2e] duration-500">Skills</Link>
    <Link to='/contact' className="link link-hover hover:text-[#e88b2e] duration-500">Contact</Link>
    <Link to='/project' className="link link-hover hover:text-[#e88b2e] duration-500">Project</Link>
  </nav> 
  <nav>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-between gap-y-10 gap-x-10 mb-8">
      <div className="flex cursor-pointer">
        <FaPhoneAlt className="text-6xl bg-[#e88b2e] p-2 rounded-full text-white items-center hover:bg-white hover:text-[#e88b2e] duration-500 shadow-xl hover:border-4 border-[#e88b2e]"/>
        <h2 className="text-2xl ml-3 font-semibold text-gray-600 hover:text-[#e88b2e] duration-500">+8801601107807</h2>
      </div>
      <div className="flex cursor-pointer">
        <MdEmail className="text-6xl bg-[#e88b2e] p-2 rounded-full text-white items-center hover:bg-white hover:text-[#e88b2e] duration-500 shadow-xl hover:border-4 border-[#e88b2e]"/>
        <h2 className="text-2xl ml-3 font-semibold  text-gray-600 hover:text-[#e88b2e] duration-500">tufaelkhan247@gmail.com</h2>
      </div>
      <div className="flex md:ml-20 gap-x-10">
        <a href="https://www.linkedin.com/in/tufaelkhan247/"><span><FaLinkedinIn className="text-6xl bg-[#e88b2e] p-2 rounded-full text-white items-center hover:bg-white hover:text-[#e88b2e] duration-500 shadow-xl hover:border-4 border-[#e88b2e]"/></span></a>
        <a href="https://www.facebook.com/tufaelkhan247"><span><FaFacebookF className="text-6xl bg-[#e88b2e] p-2 rounded-full text-white items-center hover:bg-white hover:text-[#e88b2e] duration-500 shadow-xl hover:border-4 border-[#e88b2e]"/></span></a>
        <a href="https://x.com/tufaelkhan247"><span><BsTwitterX className="text-6xl bg-[#e88b2e] p-2 rounded-full text-white items-center hover:bg-white hover:text-[#e88b2e] duration-500 shadow-xl hover:border-4 border-[#e88b2e]"/></span></a>
        <a href="https://github.com/tufaelkhan"><span><FaGithub className="text-6xl bg-[#e88b2e] p-2 rounded-full text-white items-center hover:bg-white hover:text-[#e88b2e] duration-500 shadow-xl hover:border-4 border-[#e88b2e]"/></span></a>
        
      </div>
    </div>
  </nav> 
  <aside>
    <p className="text-3xl">Copyright © 2024 - All right reserved by Tufael Khan</p>
  </aside>
</footer>
  )
}

export default Footer