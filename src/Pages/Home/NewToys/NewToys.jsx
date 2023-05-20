import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Componets/Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const NewToys = () => {
    const [newToys, setNewToys] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://toy-marketplace-server-pearl.vercel.app/toys')
            .then(res => res.json())
            .then(data => setNewToys(data.slice(10, 15)));
    }, [])

    const navigate = useNavigate();
    const handleToast = (id) => {
        if (!user) {
            Swal.fire({
                title: 'You have to log in first to view details',
                showCancelButton: true,
                confirmButtonText: 'Ok'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate(`/detailsToys/${id}`)
                }
            })
        }
    }

    return (
        <div className="my-12">
            <h3 className="text-center text-3xl font-bold ">Our New Toy Products Collection</h3>
            <p className="md:w-1/2 mx-auto text-slate-400 text-center my-5">Fun and educational playthings for kids and adults alike. Spark imagination, teach about animals, and provide sensory stimulation. From plushies to figurines, they bring joy and learning to all ages.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    newToys.map(toy => <>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className="h-72 w-full" src={toy.pictureUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">
                                    {toy.name}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <h3 className="text-xl font-semibold">Seller:  

                                {toy.sellerName}</h3>
                                <p className="text-slate-400">Price: ${toy.price}</p>
                                <p className="text-slate-400">Rating: {toy.rating}</p>
                                <div className="card-actions justify-between mt-8">
                                    <div className=" ">
                                        <Link to='/'>
                                        <button className="button">Back to Home</button>
                                        </Link>
                                    </div>
                                    <div>
                                    {user ?
                                        <Link to={`/detailsToys/${toy._id}`}>
                                            <button className='button'>View Details</button>
                                        </Link>
                                        : <Link onClick={() => handleToast(toy._id)}>
                                            <button className='button'>View Details</button>
                                        </Link>

                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default NewToys;