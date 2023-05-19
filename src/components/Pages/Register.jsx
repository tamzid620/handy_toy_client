import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const auth = getAuth();

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePhotoUrlChange = (event) => {
        setPhotoUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            if (password.length < 6) {
                toast("Need More Password Character");
                return;
            }
            console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user, userCredential);
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoUrL: photoUrl,
                    })
                        .then(() => { })
                        .catch((error) => {
                            console.log(error.message);
                        });
                })
                .catch((error) => {
                    console.log(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        } else {
            toast("Please Fill Email Field And Password");
            return;
        }
    };

    return (
        <div>
            <h1 className='flex justify-center mb-20 mt-10 font-bold text-4xl text-orange-400'>Please Login Here</h1>
            <div className="flex justify-center ">
                <div className="w-1/2 bg-gradient-to-br from-orange-200 to-orange-400 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 font-medium"> Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder=" your name" value={name} onChange={handleNameChange} required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium"> Email </label>
                            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder=" your email" value={email} onChange={handleEmailChange} required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name = "password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="your password" value={password} onChange={handlePasswordChange} required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoUrl" className="block mb-2 font-medium">
                                PhotoUrl
                            </label>
                            <input
                                type="text"
                                id="photoUrl"
                                name="photoUrl"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="your photo link" value={photoUrl} onChange={handlePhotoUrlChange} required
                            />
                        </div>
                        <button type="submit" className="w-full font-bold bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600 transition duration-300 mb-5" >
                            Register
                        </button>
                        <div className="text-sm mt-3">
                            <Link
                                to="/login"
                                className="font-medium text-gray-900 hover:text-gray-700"
                            > Already Have  an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;