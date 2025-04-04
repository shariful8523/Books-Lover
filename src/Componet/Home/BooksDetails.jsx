import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';



const BooksDetails = () => {

    const {bookId } = useParams();
    const data = useLoaderData();

    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);

    const {image,
        bookName,
        author,
        category,
        review,
       
        totalPages,
        rating,
        publisher,
        yearOfPublishing,} = book;
   
    return (
        <div className='mt-10 flex w-10/12  mx-auto  '>
           

           <div className=' w-[40%] bg-[#1313130D] rounded-2xl'>
            <img className='w-[400px] mx-auto p-7 ' src={image} alt="" />
           </div>


           <div className=' w-[60%] ml-10'>

                <h1 className='text-5xl'>{bookName}</h1>
                <h2 className='text-2xl mt-4'> By : {author}</h2>
                    <span class="divider divider-warning"></span>
                <p>{category}</p>
                <span class="divider divider-warning"></span>
                <p> <span className='text-2xl'>Review : </span>{review}</p>
                <span class="divider divider-warning"></span>
               

                 <p>Number of pages : <span className='ml-20 font-bold'>{totalPages}</span> </p>
                 <p>Publisher : <span className='ml-20 font-bold'>{publisher} </span> </p>
                 <p>Year of Publishing : <span className='ml-20 font-bold'>{yearOfPublishing}</span></p>
                 <p>Rating : <span className='ml-41 font-bold'> {rating}</span></p>
                  


                 <span >
                 <button class="btn btn-outline btn-success mt-5 ">Read</button>
                 <button class="btn btn-outline btn-warning ml-10 mt-5">Wishlist</button>
                 </span>


           </div>


        </div>
    );
};

export default BooksDetails;