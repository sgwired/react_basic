import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

function BookList() {
  return <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}

const author = 'Amelia Hepworth';
const Book = () => {
  const title = 'I Love You to the Moon and Back';
  return <article className='book'>
    <img src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg" alt="" />
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
  </article>
}




root.render(<BookList />)