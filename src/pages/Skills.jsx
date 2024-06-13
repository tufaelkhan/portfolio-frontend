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
    <Container>
        <h1 className="text-6xl font-bold text-center mb-7">My Expertise</h1>
      <h3 className="text-4xl font-semibold text-center">Fluent In The Languages Of Web Development</h3>
      <div className="gird sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {
          data?.map((item)=> <div key={item._id}>
            <img src={item?.url} alt="" />
            <h1>{item?.name}</h1>
          </div>)
        }
      </div>
    </Container>
  )
}

export default Skills