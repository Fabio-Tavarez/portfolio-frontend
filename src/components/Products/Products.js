import React, { useEffect, useState } from "react";
import { getAllBooks } from "../API/Api";
import { Link } from "react-router-dom";
import "./products.css";

function Products() {
  const [books, setBooks] = useState([]);

  async function fetchBookData() {
    try {
      let result = await getAllBooks();

      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBookData();
  }, []);

  return (
    <>
      <ul className="list-group list-group-flush product-list">
        {books.map(({ id, series, image_path, price }) => {
          return (
            <li key={id} className="list-group-item product-item">
              <Link to={`/books/${id}`} className="product-link">
                <img
                  src={image_path}
                  alt="volume cover"
                  className="product-image"
                />
                <p>
                  Price: ${price} {series}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;
