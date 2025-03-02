import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Invite from "./pages/Invite";
import Money from './pages/Money';
import BackgroundMusic from "./backgroundMusic";
import CommitArea from "./pages/CommitArea";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  // The code below shows that the backend is operational
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
      <div>
        <BackgroundMusic />
      </div>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} array={array} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/money" element={<Money />} /> 
        <Route path="/commitarea" element={<CommitArea />} />
      </Routes>
    </Router>
  );
}

export default App;
