import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import img from '../../assets/imges/Login/images.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../Componets/Providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Componets/useTitle/useTitle";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');

    useTitle('Register')

    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 8) {
            setError('Password must be 6 character long.');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'successfully Sign Up',
                    showConfirmButton: false,
                    timer: 1800
                })
                setError('')
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="rounded-md flex-shrink-0 w-full lg:w-1/2  border-2 ">
                    <form onSubmit={handleSignUP}>
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p className="label-text-alt text-red-600">{error}</p>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered"  />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='button cursor-pointer' value="Sign Up" />
                            </div>
                            <div className="form-control mt-6 text-center">
                                <p className='font-semibold'>Already have an account?<Link to='/login' className='text-gradient ms-3'>Login</Link> </p>
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

export default Register;