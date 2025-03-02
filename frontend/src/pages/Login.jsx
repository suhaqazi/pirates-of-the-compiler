const Login = () => {
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="bg-white p-8 rounded-lg shadow-xl w-96">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Login</h1>
          <p className="text-gray-600 text-center mb-8">Login to track your progress</p>
  
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg mt-4 transition duration-300"
            >
              Login
            </button>
          </form>
  
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign Up</a></p>
          </div>
        </div>
      </div>
    );
  };

  
  export default Login;
