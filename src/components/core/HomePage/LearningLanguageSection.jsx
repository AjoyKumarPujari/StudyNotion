import React from 'react'
import Highlighttext from './Highlighttext'
import Know_your_progress from '../../../assets/Images/Know_your_progress.png'
import compare_with_others from '../../../assets/Images/Compare_with_others.png'
import plan_your_lessions from  '../../../assets/Images/Plan_your_lessons.png'
import CTAButton from '../../../components/core/HomePage/Button'



const LearningLanguageSection = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 items-center justify-center'>
            <div className='text-4xl font-semibold text-center mt-20'>
              Your Swiss Knife for <Highlighttext text={" learning any language"}/>
            </div>
            <div className='text-center text-richblack-600 font-medium mx-auto text-base mt-3 w-[70%]'>
            Using spin making learning multiple languages easy with 20+ languages realistic voice-over, prograss tracking custom schedule and more..
            </div>
            <div className='flex flex-row item-center justify-center mt-5'>
                <img
                  src={Know_your_progress}
                  alt="KnowYourProgressImage"
                  className='object-contain -mr-32'
                />
                <img
                  src={compare_with_others}
                  alt="CompareWithOthersImage"
                  className='object-contain  -mr-32'
                />
                <img
                  src={plan_your_lessions}
                  alt="PlanYourLessionsImage"
                  className='object-contain'
                />
                
            </div>
            <div className='w-fit text-center justify-center mb-10'>
              <CTAButton active={true} linkto={"/signup"}>
                  <div>
                    Learn more
                  </div>
              </CTAButton>
            </div>
        </div>

    </div>
  )
}

export default LearningLanguageSection
