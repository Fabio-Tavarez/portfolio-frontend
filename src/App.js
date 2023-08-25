import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import NewBook from "./components/NewBook/NewBook";
import EditBook from "./components/EditBook/EditBook";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/books/:id" element={<Product />} />
          <Route path="/books/:id/edit" element={<EditBook />} />
          <Route path="/create-book" element={<NewBook />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
