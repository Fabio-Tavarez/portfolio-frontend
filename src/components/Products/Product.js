import React, { useEffect, useState } from "react";
import { Link , useParams, useNavigate } from "react-router-dom";
import { getBookById } from "../API/Api";
import "./product.css";

function Product() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    toFetchBookById();
  });

  async function toFetchBookById() {
    try {
      let result = await getBookById(id);
      console.log(result.data);
      setBook(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  function handlePurchase() {
    alert("Thank you for your purchase");
    navigate("/");
  }
  return (
    <>
      <div className="book-details-container">
        <img src={book.image_path} alt="volume cover" className="book-image" />
        <div className="book-info">
          <p>
            {book.series} Volume: {book.volume}
          </p>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <p>${book.price}</p>
          <p>{book.description}</p>
          <span className="book-buttons">
            <button onClick={() => navigate("/")}>Go Back</button>
            <button onClick={handlePurchase}>Buy</button>
            <Link to={`/books/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Product;
