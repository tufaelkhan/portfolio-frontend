import { useLoaderData } from "react-router-dom"
import Container from "../../shared/Container"

const ProjectDetails = () => {
    const projectDetails = useLoaderData()
    console.log(projectDetails)
    const {_id, url, live, client, server, description, feature, technology} = projectDetails
  return (

        <Container>
            <div>
                <img className="w-3/4 mx-auto h-96" src={url} alt="image" />
                <p className="text-xl"><span className="text-2xl font-bold">Description:</span> {description}</p>
                <h1 className="mt-8 font-bold text-2xl">Project Features</h1>
                {
                    feature?.map((item, idx)=> <div className="mt-4 font-semibold mb-7 text-xl" key={idx}>
                        <ul>
                            <li>* {item}</li>
                        </ul>
                    </div>)
                }
                <h1 className="font-bold text-2xl">Project Technology Use</h1>
                {
                    technology?.map((item, idx)=> <div className="mt-4 font-semibold text-xl" key={idx}>
                        <ul>
                            <li>* {item}</li>
                        </ul>
                    </div>)
                }

            </div>
        </Container>
  )
}

export default ProjectDetails