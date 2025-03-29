import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Books = () => {
          
    const [books, setBooks ] = useState([]);

    useEffect( ()=>{
        fetch('/public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])



    return (
        <div className='mt-5'>
            <h1 className='text-center font-bold text-5xl'>Books</h1>

               <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-10 gap-10'>
                     {


                       books.map(book => <BookCard book={book} key={book.bookId}  ></BookCard>)

                     }

               </div>
        </div>
    );
};

export default Books;