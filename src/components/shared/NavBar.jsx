import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/skill'>Skills</Link></li>
        <li><Link to='/project'>Projects</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-semibold font-serif">Tufael Portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
        <li className="hover:text-[#e88b2e] hover:font-semibold"><Link to='/'>Home</Link></li>
        <li className="hover:text-[#e88b2e] hover:font-semibold"><Link to='/skill'>Skills</Link></li>
        <li className="hover:text-[#e88b2e] hover:font-semibold"><Link to='/project'>Projects</Link></li>
        <li className="hover:text-[#e88b2e] hover:font-semibold"><Link to='/blogs'>Blogs</Link></li>
        <li className="hover:text-[#e88b2e] hover:font-semibold"><Link to='/about'>About</Link></li>
        <li className="hover:text-[#e88b2e] hover:font-semibold"><Link to='/contact'>Contact</Link></li>
        <li className="hover:text-[#e88b2e] hover:font-semibold"><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/contact' className="px-3 py-2 rounded-lg cursor-pointer duration-500 hover:text-white font-semibold bg-[#e88b2e] text-xl">Hire Me</Link>
  </div>
</div>
  )
}

export default NavBar