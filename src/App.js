import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import { Register } from "./pages/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
