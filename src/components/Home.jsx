import React from 'react'
import {HiArrowNarrowRight, HiFingerPrint} from 'react-icons/hi'
import {Link} from 'react-scroll'




const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

    {/* Container1 */}
    div <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-pink-600 text-5xl">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Yakir</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm A Full Stack Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">I am a self-taught web developer from Israel. After discovering my passion for web development, I couldn’t get enough. I regularly create websites and web applications for my own portfolio, keep sharpening the saw, always thirsty for more knowledge and looking to be up to date with technology. I am looking forward to bringing that passion to a full-time role.
        </p>
        <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" spy={true} smooth={true} duration={500}>
          View Work
        </Link>
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className="ml-3"/>
            </span>
            </button>
        </div>

    </div>

    </div>
  )
}

export default Home
