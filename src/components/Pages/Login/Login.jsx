import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { loginUserWithEmail, loading, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        // Login User
        loginUserWithEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const currentUser = {
                    email: user.email,
                }

                console.log(currentUser);

                // jwt 
                fetch('http://localhost:5000/jwt', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                        localStorage.setItem('perfectClick', data.token);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });


                // navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    // Login with Gmail 
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(provider)
            .then(result => {
                const user = result.user;
                toast.success("Thank you for login", { autoClose: 500 });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    // Loading the spinner
    if (loading) {
        return <>
            <div className="container mx-auto flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                <div className="h-48 rounded-t bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded bg-gray-700"></div>
                </div>
            </div>
        </>
    }


    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 py-10'>
            <div>
                <img src='https://img.freepik.com/premium-vector/sign-website-page-interface-concept-flat-graphic-design-illustration-information-sing-up-app-w_133260-3158.jpg' alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-center text-dark-02">Login</h1>
                <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label className="block text-dark-02">Your Email</label>
                        <input type="email" name="email" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-dark-02 text-black focusborder-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-dark-02">Your Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-dark-02 text-black focus:border-violet-400" />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-lg bg-purple-400 text-xl font-semibold text-white">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link rel="noopener noreferrer" to='/register' className="underline text-lg font-semibold text-custom-orange"> Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;