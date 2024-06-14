import { Link } from "react-router-dom"
import Container from "../../shared/Container"
import { useEffect, useState } from "react"

const Blogs = () => {
  const [data, setData ] = useState([])
  useEffect(()=>{
    fetch('https://portfolio-server-mocha-two.vercel.app/blogs')
    .then((res) => res.json())
    .then((data) => setData(data))
  })

  return (
    <Container>
    <div className="mb-[-30px]" data-aos="zoom-in">
        <h1 className="text-4xl font-bold text-center mb-7">Blogs</h1>
        <h3 className="text-2xl font-semibold text-center">My Coding Journal</h3>

        <div className="mt-14 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-8">
        {
          data?.map((item)=> <div key={item._id} className="card card-compact w-[400px] bg-base-100 shadow-xl">
          <figure><img className="h-72 w-[600px]" src={item.imageUrl} alt="Shoes" /></figure>
          <div className="card-body">
            <div className="flex items-center gap-5">
            <h2 className="card-title text-3xl">Blog Title</h2>
            <div className="badge badge-secondary">NEW</div>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/blogs/${item?._id}`} className="btn bg-[#e88b2e] text-2xl text-white">Details</Link>
            </div>
          </div>
        </div>)
        }

        </div>
    </div>
    </Container>
  )
}

export default Blogs