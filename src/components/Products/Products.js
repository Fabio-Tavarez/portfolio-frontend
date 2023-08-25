import React, { useEffect, useState } from "react";
import { getAllBooks } from "../API/Api";
import { Link } from "react-router-dom";

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
      <div>Products</div>
      <ul className="list-group list-group-flush">
        {books.map(({ id, series, image_path, price }) => {
          return (
            <li key={id} className="list-group-item">
              <Link to={`/books/${id}`} className="link">
                <img src={image_path} />
                <p>{price}</p>
                {series}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;
