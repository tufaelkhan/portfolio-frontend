import IMG from '../../../assets/tufael.jpg'
import Container from '../../shared/Container'
const Banner = () => {
  return (
    <Container>
      <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='md:w-1/2'>
    <div className='rounded-full h-full w-full'>
    <img src={IMG} className="rounded-full shadow-4xl border-4 border-[#e88b2e]" />
      </div>
    </div>
    <div className='md:w-1/2'>
      <h1 className="text-6xl font-bold mb-10">Hello! I`m</h1>
      <h1 className="text-7xl font-bold text-[#e88b2e] mb-5">TUFAEL KHAN</h1>
      <h1 className="text-4xl font-semibold mb-16"> <span>I`m a </span>
        <span className='text-[#d37e2a] text-5xl font-bold'>MERN Stack</span> Developer</h1>
      <div className='flex gap-x-10'>
      <button className="btn bg-[#d37e2a] hover:border-[#d37e2a]  text-2xl text-white hover:text-gray-800">Hire me</button>
      <button className="btn border-[#d37e2a] hover:bg-[#d37e2a] hover:text-white text-2xl">Download Resume</button>

      </div>
    </div>
  </div>
</div>
    </Container>
  )
}

export default Banner