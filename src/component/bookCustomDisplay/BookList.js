import React from "react";
import { BookCard } from "./BookCard";

export const BookList = ({ books }) => {
  console.log(books);
  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {books.map((item, index) => {
        return <BookCard key={index} book={item} />;
      })}
    </div>
  );
};
