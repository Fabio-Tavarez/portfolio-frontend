import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById, updateBookById } from "../API/Api";

function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    series: "",
    volume: "",
    genre: "",
    description: "",
  });
  useEffect(() => {
    toFetchBookById();
  }, []);

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Series</label>
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
          <label>Volume</label>
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
          <label>Genre</label>
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
          <label>Description</label>
          <input
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
