import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      console.log(response.data.users);
      setArray(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <Router>
      <nav className="flex justify-center space-x-4 p-4 bg-gray-800 text-white">
        <Link to="/" className="px-3 py-2 rounded bg-blue-500">Home</Link>
        <Link to="/login" className="px-3 py-2 rounded bg-green-500">Login</Link>
        <Link to="/signup" className="px-3 py-2 rounded bg-yellow-500">Signup</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} array={array} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
