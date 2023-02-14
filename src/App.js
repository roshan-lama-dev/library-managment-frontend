import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import { Register } from "./pages/Register";
import { Books } from "./pages/Books";
import { AddBooks } from "./pages/AddBooks";
import { MyBooks } from "./pages/MyBooks";
import Transaction from "./pages/Transaction";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<Books />} />
          <Route path="/addbooks" element={<AddBooks />} />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
