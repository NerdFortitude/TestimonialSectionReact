import { useState } from 'react'
import './App.css'
import reviews from './data';
import Testimonial from './components/Testimonial';

function App() {
 

  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-300'>
      <div className='text-center'>
         <h1 className='text-4xl font-bold'>Our Testimonials</h1>

         <div className='bg-violet-400 h-[4px] w-1/5 '>

         </div>

         <Testimonial reviews={reviews}></Testimonial>
      </div>

     


         
    </div>
  )
}

export default App;
