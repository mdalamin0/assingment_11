import { Link } from 'react-router-dom';
import logo from '../../../src/assets/imges/Logo/logo.png'
import ActiveLink from "../../Componets/ActiveLink/ActiveLink";
import { useContext } from 'react';
import { AuthContext } from '../../Componets/Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";


const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const menuItems = <>
        <li className="font-semibold"><ActiveLink to="/"> Home </ActiveLink></li>
        <li className="font-semibold"><ActiveLink to="/allToys"> All Toys </ActiveLink></li>
        {user && <li className="font-semibold"><ActiveLink to="/addToys"> Add Toys </ActiveLink></li>}
        {
        user && <li className="font-semibold"><ActiveLink to="/myToys"> My Toys </ActiveLink></li>
        }
        <li className="font-semibold"><ActiveLink to="/blog"> Blogs </ActiveLink></li>
        <li className="font-semibold"><ActiveLink to="/register"> Sign UP </ActiveLink></li>

    </>

    const handleLogOut = () => {
        logOutUser()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className='flex'>
                        <button onClick={handleLogOut} className="relative inline-flex  p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white ">
                            <span className="relative px-4 py-2 md:px-5 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Log Out
                            </span>
                        </button>
                        {user?.photoURL ? <img title={user?.displayName} className='h-10 w-10 md:h-12 md:w-12 rounded-full' src={user?.photoURL} alt="" /> :
                            <FaUserCircle className='h-10 w-10 md:h-12 md:w-12 rounded-full text-purple-700'></FaUserCircle>

                        }
                    </div> :
                    <Link to= '/login'>
                        <button className='button'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;