import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to the Accountability Tracker</h1>
      <p className="mt-4">Stay on track with your studies and assignments!</p>
      <Link to="/signup" className="mt-6 px-4 py-2 bg-yellow-500 rounded-lg">Get Started</Link>
    </div>
  );
};

export default Home;
