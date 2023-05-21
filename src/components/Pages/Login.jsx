import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import app from "../../firebase/firebase.config";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  //  Form Handler----------------------------------
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (app) {
      onAuthStateChanged(auth, (user) => {
      });
    }
  }, [app]);
  //  Email Password Login----------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate(from, { replace: true });
          toast.success('Login successfull!');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  };
  //  Google Login ----------------------------------
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };



  return (
    <div>
      <h1 className='flex justify-center mb-20 mt-10 font-bold text-4xl text-orange-400'>Please Login Here</h1>
      <div className="flex justify-center ">
        <div className="w-1/2 bg-gradient-to-br from-orange-200 to-orange-400 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder=" your email"
                value={email}
                onChange={handleEmailChange}
                required
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
                placeholder="your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="w-full font-bold bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600 transition duration-300 mb-5" >
              Log in
            </button>
          </form>
          {/* google sign button  */}
          <button
            type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 font-bold flex items-center justify-center" onClick={() => googleLogin()}>
            <FaGoogle className="me-3 text-orange-500" />  Google Sign-in
          </button>
          {/* register related section  */}
          <div className="text-sm mt-3">
            <Link to="/register" className="font-medium text-gray-900 hover:text-gray-700">
              Create an account
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;