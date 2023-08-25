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

async function updateBookById(id, updatedBook) {
  try {
    let result = await Axios.put(`/books/${id}`, updatedBook);

    return result;
  } catch (e) {
    return e;
  }
}
async function createBook(book) {
  try {
    let result = await Axios.post(`/books`, book);

    return result;
  } catch (e) {
    return e;
  }
}

export { getAllBooks, getBookById, updateBookById, createBook };
