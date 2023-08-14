import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimelineImage from "../../../assets/Images/TimelineImage.png"
const timelineSection =[
 {
  Logo: Logo1,
  heading: "Leadership",
  Description: "Fully committed to the success company",
 },
 {
  Logo: Logo2,
  heading: "Leadership",
  Description: "Fully committed to the success company",
 },
 {
  Logo: Logo3,
  heading: "Leadership",
  Description: "Fully committed to the success company",
 },
 {
  Logo: Logo4,
  heading: "Leadership",
  Description: "Fully committed to the success company",
 },
]

 const TimelineSection = () => {
  return (
    <div>
      <div className='flex flex-row gap-15 items-center'>
        <div className='w-[45%] flex flex-col gap-5 items-center'>
          {
            timelineSection.map( (element, index)=> {
              return (
                  <div className='flex flex-row gap-6' key={index}>
                    <div className='w-[50px] h-[50px]  flex items-center '>
                      <img src={element.Logo}/>
                    </div>

                      <div>
                        <h2 className='font-semibold text-[18px] '>{element.heading}</h2>
                        <p className='text-base'>{element.Description}</p>
                      </div>
                  </div>
              )
            })
          }
        </div>
        <div className='relative shadow-blue-200'>
            <img src={TimelineImage}
            alt="TimelineImage"
            className='shadow-white object-cover h-fit'
            />

            <div className='absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bg-caribbeangreen-700 flex flex-row text-white uppercase py-7'>
                <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                  <p className='text-3xl font-bold'>10</p>
                  <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                </div>
                <div className='flex gap-5 items-center px-7'>
                <p className='text-3xl font-bold'>250</p>
                  <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}
export default TimelineSection