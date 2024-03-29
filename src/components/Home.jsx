
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black'>
        <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl font-bold text-white sm:text-7xl'>
                    I&apos;m a Full Stack Software Engineer
                </h2>
                <p className='py-4 text-gray-500 max-wd-lg'>
                    I have 1 year of professional experience building and designing software.
                    Currently, I love to work on backend projects that utilize ASP .NET frameworks, C#, Microsoft SQL Server,
                    Docker, Python, Powershell. Additionally, I have worked on various frontend projects that utilize
                    JavaScript, CSS, HTML, React, Tailwind, and Next JS. 
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Portfolio
                        <span className='duration-300 group-hover:rotate-90'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my profile" className='w-2/3 mx-auto rounded-2xl md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home