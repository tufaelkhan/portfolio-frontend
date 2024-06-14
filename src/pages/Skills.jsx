import { useEffect, useState } from "react"
import Container from "../components/shared/Container"

const Skills = () => {
  const [data, setData ] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/skill')
    .then((res) => res.json())
    .then((data) => setData(data))
  })
  return (
    <Container bgColor={true}>
      <div data-aos="zoom-in-up">
        <h1 className="text-4xl font-bold text-center mb-7">My Expertise</h1>
      <h3 className="text-2xl font-semibold text-center">Fluent In The Languages Of Web Development</h3>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-6 ">
        {
          data?.map((item)=> <div key={item._id}> 
          <div className="p-4 bg-base-100 border border-[#e88b2e] rounded-md w-full flex flex-col items-center justify-center shadow-2xl">
            <img className="h-20 w-20" src={item?.image} alt="icon" />
            <h1 className="text-xl font-semibold mt-2">{item?.name}</h1>
          </div> 
        </div>)
        }
      </div>
    </div>
    </Container>
  )
}

export default Skills