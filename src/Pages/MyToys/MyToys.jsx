import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Componets/Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import useTitle from "../../Componets/useTitle/useTitle";


const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user } = useContext(AuthContext);
    const [dropdown, setDropdown] = useState(false)

    useTitle('My Toys')



    useEffect(() => {
        fetch(`https://toy-marketplace-server-pearl.vercel.app/toysByEmail/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user])

    const handleAscendingByPrice = () => {
        fetch(`https://toy-marketplace-server-pearl.vercel.app/toysByEmail/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                const sortToys = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                setToys(sortToys)
                console.log(sortToys)
            })
        // setToys(sortToys)
    }

    const handleDescendingByPrice = () => {
        fetch(`https://toy-marketplace-server-pearl.vercel.app/toysByEmail/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            const sortDescendingToys = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            setToys(sortDescendingToys)
        })
    }




    return (
        <div className="overflow-x-auto w-full my-12">
            <div className='flex place-content-end relative mb-6'>
                <button onClick={() => setDropdown(!dropdown)} className='bg-gray-200 font-semibold py-3 px-5 rounded-md flex items-center'>Short Price by {dropdown ? <FaAngleUp title='close menu' className='h-4 w-4 ms-2'></FaAngleUp> : <FaAngleDown title='Open menu' className='h-4 w-4 ms-2'></FaAngleDown>}</button>
                <div className={`${dropdown ? 'absolute top-8 right-10 ' : 'hidden'}`}>
                    <div className='flex my-4 shadow-xl bg-slate-50  rounded-md p-6'>
                        <button onClick={handleAscendingByPrice} className="relative inline-flex  p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white ">
                            <span className="relative px-4 py-2 md:px-5 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Ascending
                            </span>
                        </button>
                        <button onClick={handleDescendingByPrice} className="relative inline-flex  p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white ">
                            <span className="relative px-4 py-2 md:px-5 md:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Descending
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <h3 className="text-center font-bold text-2xl mb-8">Your all added Toys:</h3>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label className="">
                                Delete
                            </label>
                        </th>
                        <th>Toy Image</th>
                        <th>Price</th>
                        <th>Ratings</th>
                        <th>Quantity</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys.map(toy => <MyToysRow
                            key={toy._id}
                            toy={toy}
                            toys={toys}
                            setToys={setToys}
                        ></MyToysRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;