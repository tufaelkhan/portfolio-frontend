import { Link, Outlet } from "react-router-dom"

const DashBoardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-gray-200 text-base-content pt-20 text-2xl font-semibold gap-y-5">
      {/* Sidebar content here */}
      <li><Link to='/dashboard/add-blog'>Add New Blog</Link></li>
      <li><Link to='/dashboard/add-project'>Add New Project</Link></li>
      <li><Link to='/dashboard/add-skill'>Add New Skill</Link></li>
      <li><Link to='/'>Home</Link></li>
    </ul>
  
  </div>
</div>
  )
}

export default DashBoardLayout