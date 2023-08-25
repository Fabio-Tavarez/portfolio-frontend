import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById, updateBookById } from "../API/Api";
import "./edit.css"
function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    series: "",
    volume: "",
    price: "",
    author: "",
    genre: "",
    description: "",
  });
  useEffect(() => {
    toFetchBookById();
  });

  async function toFetchBookById() {
    try {
      let result = await getBookById(id);

      setBook(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateBook(id, book) {
    try {
      await updateBookById(id, book);
    } catch (error) {
      console.log(error);
    }
  }

 async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateBook(id, book);
      navigate(`/books/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
  function handleTextChange(e) {
    setBook({
      ...book,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="series">Series</label>
          <input
            required
            type="text"
            name="series"
            id="series"
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
            value={book.genre}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={handleTextChange}
            value={book.description}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditBook;
