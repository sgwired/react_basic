import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81Ekpv7AwKL._AC_UL604_SR604,400_.jpg',
  title: 'My First Learn-to-Write Workbook',
  author: 'Crystal Radke'
}
const root = ReactDOM.createRoot(document.getElementById('root'));



function BookList() {
  return <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
    <Book  img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
  </section>
}


const Book = (props) => {

  return <article className='book'>
    <img src={props.img} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  
  </article>
}




root.render(<BookList />)