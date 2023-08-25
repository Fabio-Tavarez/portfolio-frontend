import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../API/Api";
import "./newbook.css"

function NewBook() {
  let navigate = useNavigate();
  const [book, setBook] = useState({
    series: "",
    volume: "",
    price: "",
    author: "",
    genre: "",
    description: "",
  });

  function handleOnChange(e) {
    setBook({
      ...book,
      [e.target.id]: e.target.value,
    });
  }
  async function handleCreateBook(e) {
    e.preventDefault();
    try {
      await createBook(book);
      setBook({
        series: "",
        volume: "",
        price: "",
        author: "",
        genre: "",
        description: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form-container">
      <form onSubmit={handleCreateBook}>
        <div>
          <label htmlFor="series">Series</label>
          <input
            required
            type="text"
            name="series"
            id="series"
            onChange={handleOnChange}
            value={book.series}
          />
        </div>
        <div>
          <label htmlFor="volume">Volume</label>
          <input
            required
            type="text"
            name="volume"
            id="volume"
            onChange={handleOnChange}
            value={book.volume}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            required
            type="text"
            name="author"
            id="author"
            onChange={handleOnChange}
            value={book.author}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            required
            type="number"
            min="1"
            max="10"
            name="price"
            id="price"
            onChange={handleOnChange}
            value={book.price}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input
            required
            type="text"
            name="genre"
            id="genre"
            onChange={handleOnChange}
            value={book.genre}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={handleOnChange}
            value={book.description}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBook;
