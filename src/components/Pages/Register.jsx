import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";


const auth = getAuth();

const Register = () => {


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(email, password);


        if (email && password) {
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
                            alert("account registratiaon successfully ");
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        } else {
            alert("Please Fill Email Field And Password");
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
                            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder=" your name" name="name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium"> Email </label>
                            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder=" your email" name="email"  required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                placeholder="your password"  required
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
                                placeholder="your photo link"   required
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
        </div>
    );
};

export default Register;