import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import Highlighttext from './Highlighttext';
const tabName = [
    "Free",
    "New to coading",
    "Most popular",
    "Skill paths",
    "Career paths",
];
 const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabName[0]);
    const [courses, setCourses]= useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard]= useState(HomePageExplore[0].courses[0].heading)
    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=>course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }
 
    return (
    <div>
        <div className='text-4xl font-semibold text-center'>
        Unlock the
        <Highlighttext text={"  Power of Code"}/> 
        </div>
        
        <p className='text-center text-richblack-300 text-ssm  mt-3'>
            Learn to build anything you can imagine
        </p>
        
        <div className='flex flex-row rounded-full bg-richblack-800 mb-5 px-1 gap-2 py-1 boarder-richblack-100 mt-5'>
            {
                tabName.map((element, index)=>{
                    return (
                    <div
                        className={`text-[16px] flex flex-row items-center gap-2
                        ${currentTab === element ? "bg-richblack-900 text-richblack-5 font-medium"
                            :" text-richblack-200"} rounded-full transation-all duration-200 cursor-pointer
                            hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
                            key={index}
                            onClick={()=> setMyCards(element)}
                            >
                            {element}
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
export default ExploreMore