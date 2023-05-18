
const Login = () => {
    return (
        <div>
            <h1 className='flex justify-center mb-20 mt-10 font-bold text-4xl text-orange-400'>Please Login Here</h1>
                <div className="flex justify-center ">
      <div className="w-1/2 bg-gradient-to-br from-orange-200 to-orange-400 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button type="submit" className="w-full font-bold bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600 transition duration-300">
            Log in
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;