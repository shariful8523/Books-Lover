
import React from "react";
import { Link, NavLink } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags = [],
    rating,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="border border-gray-300 p-4 rounded-xl shadow-md w-72">
        <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
          <img src={image} alt={bookName} className="h-40 object-cover rounded" />
        </div>
        <div className="mt-3 flex gap-2">
          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold mt-2">{bookName}</h3>
        <p className="text-sm text-gray-500">By: {author}</p>
        <div className="flex gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2 text-gray-600 text-sm">
          <span>{publisher}, {yearOfPublishing}</span>
          <span className="font-semibold">{rating} ⭐</span>
        </div>

        <NavLink to={`/books/${bookId}`}>

        <button class="btn btn-dash btn-warning mt-5"> View Book</button>

        </NavLink>
      </div>

    </Link>
  );
};

export default BookCard;
