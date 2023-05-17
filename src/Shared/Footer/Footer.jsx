import logo from '../../../src/assets/imges/Logo/logo.png';
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-4">
                        <a href="#">
                            <img src={logo} alt="Website Logo" className="h-10 inline-block" />
                            <h3 className='text-2xl font-bold mt-4 '> <span className='text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Baby Bear Toy</span> <br /> Shopping Center </h3>
                        </a>
                       
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h4 className="text-black text-xl font-bold mb-4">Contact</h4>
                        <p>123 Main Street</p>
                        <p>City, State 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-7">
                        <h4 className="text-black text-xl font-bold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-primary">
                                <FaFacebook className='w-7 h-7'></FaFacebook>
                            </a>
                            <a href="#" className="text-primary">
                                <FaInstagram className='w-7 h-7'></FaInstagram>
                            </a>
                            <a href="#" className="text-primary">
                                <FaTwitter className='w-7 h-7'></FaTwitter>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-4">
                        <h4 className="text-black text-xl font-bold mb-4">Subscribe</h4>
                        <p>Stay up to date with our latest toys collection and offers.</p>
                        <form className="mt-2">
                            <input type="email" placeholder="Enter your email" className="w-full bg-gray-700 text-gray-300 px-4 py-2 rounded-lg"/>
                                <button type="submit" className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='text-center'>
            <p className="mt-4">© 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;