import Axios from "./Axios";

async function getAllBooks() {
  try {
    let result = await Axios.get("/books");

    return result;
  } catch (e) {
    return e;
  }
}

async function getBookById(id) {
  try {
    let result = await Axios.get(`/books/${id}`);

    return result;
  } catch (e) {
    return e;
  }
}

export { getAllBooks, getBookById };
