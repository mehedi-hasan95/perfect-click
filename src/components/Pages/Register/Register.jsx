import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/hooks';

const Register = () => {
    const {createUser, updateName, googleLogin } = useContext(AuthContext);

    useTitle('Register - Perfect Click');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        form.reset();

        // Create user with email

        createUser(email, password)
        .then(result => {
            const user = result.user;
            handleNameAndUrl(name, photoURL);
            toast.success("Thank you for registration", {autoClose: 500});
        })
        .catch(err => console.error(err));
    }

    // Handle update name and PhotoUrl
    const handleNameAndUrl = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateName(profile)
        .then(() => {})
        .catch((error) => {});
    }

    // Login with Gmail 
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                toast.success("Thank you for Register", { autoClose: 500 });
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    

    

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 py-10'>
            <div>
                <img src='https://img.freepik.com/premium-vector/membership-contract-certificate-flat-illustration_82574-6181.jpg' alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-center text-dark-02">Register</h1>
                <form onSubmit={handleRegister} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block text-dark-02">Your Name</label>
                        <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-dark-02 text-black focusborder-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-dark-02">Your Email</label>
                        <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-dark-02 text-black focusborder-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-dark-02">Your Photo</label>
                        <input type="text" name="photo" placeholder="https://" className="w-full px-4 py-3 rounded-md border border-dark-02 text-black focusborder-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-dark-02">Your Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-dark-02 text-black focus:border-violet-400" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-lg bg-purple-400 text-xl font-semibold text-white">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Or Sign Up with</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account? 
                    <Link rel="noopener noreferrer" to='/login' className="underline text-lg font-semibold text-custom-orange"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;