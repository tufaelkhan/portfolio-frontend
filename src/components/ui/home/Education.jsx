import Container from "../../shared/Container"

const Education = () => {
  return (
    <Container>
      <div className="">
        <h1 className="text-6xl font-bold text-center mb-7">Education</h1>
        <h3 className="text-4xl font-semibold text-center">My Educational Journey</h3>
        <div className="md:flex md:gap-x-7 sm:gap-y-7 mt-14">
            <div className="md:w-1/2 p-5 border border-[#e88b2e] rounded-md hover:bg-[#e88b2e] hover:text-white duration-500 bg-[#ece8e5]">
                <h1 className="text-6xl font-bold mb-3">01</h1>
                <h2 className="text-4xl font-semibold mb-3">BSC</h2>
                <h4 className="text-2xl">Computer Science And Engineering from Dhaka International University Running</h4>
            </div>
            <div className="md:w-1/2 p-5 border border-[#e88b2e] rounded-md hover:bg-[#e88b2e] hover:text-white duration-500 bg-[#ece8e5]">
                <h1 className="text-6xl font-bold mb-3">02</h1>
                <h2 className="text-4xl font-semibold mb-3">Diploma</h2>
                <h4 className="text-2xl">Computer Science And Engineering from Bangladesh Skill Development Institute in 2023</h4>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Education