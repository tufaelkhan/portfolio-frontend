import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import Container from "../../shared/Container";


const Contact = () => {
  return (
    <Container bgColor={true}>
        <div className="">
        <h3 className="text-2xl text-center font-semibold mb-4">My Contact</h3>
        <h1 className="text-4xl text-center font-bold mb-10">I WANT TO HEAR FROM YOU</h1>
        <div className="md:flex sm:w-full">
            <div className="md:w-2/3">
                <input className="text-2xl rounded-lg p-4 w-full m-3 border border-[#e88b2e]" type="text" placeholder="Your Name" onFocus='border border-[#e88b2e]' />
                <input className="text-2xl rounded-lg p-4 w-full m-3 border border-[#e88b2e]" type="email" placeholder="Your Email" onFocus='border border-[#e88b2e]' />
                <input className="text-2xl rounded-lg p-4 w-full m-3 border border-[#e88b2e]" type="email" placeholder="Phone Number" onFocus='border border-[#e88b2e]' />
                <input className="text-2xl rounded-lg p-4 w-full m-3 border border-[#e88b2e]" type="text" placeholder="subject" onFocus='border border-[#e88b2e]' />
                <textarea className="text-2xl rounded-lg p-4 w-full m-3 border border-[#e88b2e]" type="text" placeholder="Message" rows="5"></textarea>
                <button className="text-2xl rounded-lg px-14 py-2 m-3  bg-[#e88b2e] hover:text-white font-semibold">send message</button>
            </div>
            <div className="md:ml-20 mt-20">
                    <div className="flex items-center mb-7">
                        <FaPhoneAlt className="text-5xl text-[#e88b2e] p-1 rounded-full"/>
                        <p className="text-3xl font-semibold ml-4">+8801601107807</p>
                    </div>
                    <div className="flex items-center mb-7">
                        <MdEmail className="text-5xl text-[#e88b2e] p-1 rounded-full"/>
                        <p className="text-3xl font-semibold ml-4">tufaelkhan247@gmail.com</p>
                    </div>
                    <div className="flex items-center mb-7">
                        <FaMapMarkerAlt className="text-5xl text-[#e88b2e] p-1 rounded-full"/>
                        <p className="text-3xl font-semibold ml-4">Bangladesh, Chandpur</p>
                    </div>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default Contact