import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Highlighttext from '../components/core/HomePage/Highlighttext'
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
const Home = () => {
  return (
    <div>
        {/*section1 */}
        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
        text-white justify-between'>

            <Link to={"/signup"}>
               <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200, 
               transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                     transition-all duration-200 group-hover:bg-richblack-900'>
                        <p>Became an Instructor </p>
                        <FaArrowRight/>
                    </div>
                </div> 
                
             </Link>
             <div className='text-center text-4xl font-semibold mt-7'>
                  Empower Your Future with{" "}
                  <Highlighttext text={"Coding Skills"}/>
            </div>
            <div className='w-[90%] text-center text-lg font-bold text-richblack-300 mt-4'>
              With our online coding courses, you can learn at your own place, from anywhere in the world, and get access of resources, including hands-on projects, quixxes, and personal feedback from instructor  
            </div>
            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                  Book a Demo
                </CTAButton>
            </div>
            <div className='mx-3 my-12 shadow-blue-200 w-[70%]'>
              <video
              muted
              loop
              autoPlay
              >
                <source src={Banner} type="video/mp4"/>
              </video>
            </div>
            

        </div>


        {/*section2 */}



        {/*section3 */}  


        {/*footer */}
    </div>
  )
}
export default Home