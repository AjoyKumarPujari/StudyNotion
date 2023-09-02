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

    </div>
  )
}
export default ExploreMore