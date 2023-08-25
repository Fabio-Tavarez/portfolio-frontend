import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBook } from "../API/Api";

function NewBook() {
  let navigate = useNavigate();
  const [book, setBook] = useState({
    series: "",
    volume: "",
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
        await createBook(book)
        setBook({
          series: "",
          volume: "",
          genre: "",
          description: "",
        });
        navigate("/")
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleCreateBook}>
        <div>
          <label>Series</label>
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
          <label>Volume</label>
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
          <label>Genre</label>
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
          <label>Description</label>
          <input
            required
            type="text"
            name="description"
            id="description"
            onChange={handleOnChange}
            value={book.description}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBook;
