
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
// Can add a link to each part of the array to go to onclick
  const portfolios = [
    {
        id: 1,
        src: arrayDestruct,
        link: '' 
    }, 
    {
        id: 2,
        src: reactParallax
    },
    {
        id: 3,
        src: navbar
    },
    {
        id: 4,
        src: reactSmooth
    },
    {
        id: 5,
        src: installNode
    },
    {
        id: 6,
        src: reactWeather
    },
  ]  

  return (
    <div name='portfolio' className='w-full text-white bg-gradient-to-b from-black to-gray-800 sm:h-fit md:h-screen'>
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pb-16 mx-auto'>
            <div>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
            {
            portfolios.map(({id,src}) => (
                <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
                    <img src={src} alt="" className='duration-200 rounded-md hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Demo
                        </button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                            Code
                        </button>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio