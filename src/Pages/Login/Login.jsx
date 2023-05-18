import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import logo from '../../assets/imges/Login/images.jpg'
import SocialLogin from './SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Componets/Providers/AuthProvider';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {signInUser} = useContext(AuthContext);
    const [emailError, setEmailError] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successfully Login',
                    showConfirmButton: false,
                    timer: 1800
                })
                setError('');
                setEmailError('')
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
                if(error.message === 'Firebase: Error (auth/user-not-found).'){
                    setEmailError('user not fond!')
                    setError('');
                    return;
                }
                if(error.message === 'Firebase: Error (auth/wrong-password).'){
                    setEmailError('')
                    setError('Your Password Wrong')
                    return
                }
            
            })

    }
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2 mr-12 ">
                    <img src={logo} alt="" />
                </div>
                <div className="rounded-md flex-shrink-0 w-full lg:w-1/2  border-2 ">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                <label className="label">
                                    <p className="label-text-alt text-red-600">{emailError}</p>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt text-red-600">{error}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='button cursor-pointer' value="Login" />
                            </div>
                            <div className='form-control mt-6 text-center'>
                                <p className='font-semibold'>New to Smart Toys?<Link to='/register' className=' ms-3 text-gradient'>Sign Up</Link> </p>
                            </div>
                        </div>
                        <div className="card-body divider">Or</div>
                    </form>

                    <div className='card-body text-center'>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;