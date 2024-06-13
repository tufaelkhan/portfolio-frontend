import { Link } from "react-router-dom"
import Container from "../../shared/Container"
import { useEffect, useState } from "react"


const Project = () => {
  const [data, setData ] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/project')
    .then((res) => res.json())
    .then((data) => setData(data))
  })
  return (
    <Container>
      <h1 className="text-6xl font-bold text-center mb-7">My All Projects</h1>
      <h3 className="text-4xl font-semibold text-center">Explore My Projects</h3>
      <div className="mt-14 grid sm:grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-7 mx-auto">
       {
        data?.map((item)=>  <div key={item._id} className="card card-compact w-[600px] bg-base-100 shadow-xl">
        <figure><img className="h-96 w-[600px]" src={item.url} alt="project image" /></figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <a className="btn bg-[#e88b2e] text-2xl text-white" href={item?.live}>Live Site</a>
            <Link to={`/project/${item?._id}`} className="btn hover:bg-[#e88b2e] border border-[#e88b2e] text-[#e88b2e] text-2xl duration-500 hover:text-white">Details</Link>
          </div>
        </div>
      
        
      </div>)
       }

        {/* <div className="card card-compact w-[600px] bg-base-100 shadow-xl">
  <figure><img className="h-96 w-[600px]" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <div className="card-actions justify-end">
      <a className="btn bg-[#e88b2e] text-2xl text-white" href="">Live Site</a>
      <Link to={`/project/`} className="btn hover:bg-[#e88b2e] border border-[#e88b2e] text-[#e88b2e] text-2xl duration-500 hover:text-white">Details</Link>
    </div>
  </div>
</div> */}

        </div>
    
    </Container>
  )
}

export default Project