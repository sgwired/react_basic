import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81Ekpv7AwKL._AC_UL604_SR604,400_.jpg",
    title: "My First Learn-to-Write Workbook",
    author: "Crystal Radke",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/91HHxxtA1wL._AC_UL604_SR604,400_.jpg",
    title: "The Wonderful Things You Will Be",
    author: "Emily Winfield Martin",
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));


function BookList() {
  return (
    <section className="booklist">
      {books.map((book)=> {
        const {img, title, author} = book;
        return  <Book book={book} ></Book>
      })}
    </section>
  );
}

// const Book = ({img, title, author} ) => { here too instend of sep variable
const Book = (props) => {
  console.log(props);

  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

root.render(<BookList />);
