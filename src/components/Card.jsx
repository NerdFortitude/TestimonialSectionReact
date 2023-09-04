import {FaQuoteRight, FaQuoteLeft} from 'react-icons/fa';

const Card = (props)=>{
   
    let review = props.review;

    return (
        <div className='flex flex-col relative '>

            <div className='absolute top-[-7rem] z-[20] mx-auto'><img src={review.image} alt="" className='ascpect-square rounded-full w-[140px] h-[140px] z-[25]'/>
             <div className='w-[140px] h-[140px] bg-violet-400 rounded-full absolute top-[-8px] z-[-10] left-[8px]'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            <div className='text-center mt-2'>
                
            </div>

            <div className='text-violet-400 mx-auto mt-5'><FaQuoteLeft></FaQuoteLeft></div>

            <div className='text-center mt-4 text-slate-500' >{review.text}</div>

            <div className='text-violet-400 mx-auto mt-5'><FaQuoteRight></FaQuoteRight></div>
            
           
        
        </div>
    )
}

export default Card;

