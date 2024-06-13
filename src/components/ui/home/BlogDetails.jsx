import { useLoaderData } from "react-router-dom"
import Container from "../../shared/Container"

const BlogDetails = () => {
  const blogdetails = useLoaderData()
  // console.log(blogdetails.imageUrl)
  const htmlContent = `
  <h2><strong>Introduction to React</strong></h2>
  <p>…nt-end frameworks/libraries.</li></ul><p><br></p>
`;
  return (
    <Container>
        <div>
            <img className="w-3/4 mx-auto mb-10 rounded-2xl" src={blogdetails.imageUrl} alt="" />

            <div className="pt-10 p-7">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
    </Container>
  )
}

export default BlogDetails