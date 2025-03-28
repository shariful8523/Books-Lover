import React from 'react';
import Books from '../../assets/books.png'

const Banner = () => {
    return (
        <div className='mt-3 w-12/12 mx-auto h-96 rounded-2xl flex bg-[#1313130D] '>
           <div className='w-[50%] ml-50 mt-20'>
              <h1 className=' font-bold text-6xl '>Books to freshen up <br></br> your bookshelf</h1>




              <button className='btn btn-warning mt-15'>View The List</button>
           </div>

           <div className='w-[50%] '>
               <img className='w-[300px]  mt-6 ml-20' src={Books} alt="" />

           </div>
        </div>
    );
};

export default Banner;