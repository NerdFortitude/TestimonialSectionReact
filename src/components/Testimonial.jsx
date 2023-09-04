import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { useState } from "react";

const Testimonial = (props)=>{

    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

    function leftShiftHandler(){

        if(index ===0){
            setIndex(reviews.length-1);

        }
        else{
            setIndex(index-1);
        }

    }

    function rightShiftHandler(){
        if(index ===reviews.length-1){
            setIndex(0);

        }
        else{
            setIndex(index+1);
        }
    }

    function supriseHandler(){

        setIndex((Math.floor(Math.random()*reviews.length)));

    }

    return (
        <div className="w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-lg">
            <Card review = {reviews[index]}></Card>
            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
                <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}> <FiChevronLeft></FiChevronLeft></button>
                <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}> <FiChevronRight></FiChevronRight></button>
            </div>

            <div className="mt-5">
                <button className='bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={supriseHandler}>Surprise Me</button>
            </div>
        </div>

    )

}

export default Testimonial;