import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById } from "../API/Api";

function Product() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    toFetchBookById();
  }, []);

  async function toFetchBookById() {
    try {
      let result = await getBookById(id);
      console.log(result.data);
      setBook(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>Product</div>
      <div>
        <img src={book.image_path} />
        <p>
          {book.series} Volume:{book.volume}
        </p>
        <p>{book.genre}</p>
        <p>${book.price}</p>
        <p>{book.description}</p>
        <span>
          <button onClick={() => navigate("/")}>Go Back</button>
          <Link to={`/books/${id}/edit`}>Edit</Link>
        </span>
      </div>
    </>
  );
}

export default Product;
