import { useContext, useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import { AuthContext } from "../../Componets/Providers/AuthProvider";
import useTitle from "../../Componets/useTitle/useTitle";


const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [search , setSearch] = useState('');
    const { loading } = useContext(AuthContext);

    useTitle('All Toys')

    useEffect(() => {
        fetch('https://toy-marketplace-server-pearl.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 20)));
    }, [])

    if (loading) {
        return <div className="text-center my-24 text-purple-700">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        </div>
    }

    const handleSearch = (event) => {
        event.preventDefault();
        fetch(`https://toy-marketplace-server-pearl.vercel.app/toysBySearch/${search}`)
        .then(res => res.json())
        .then(data => setToys(data))
        
    }




    return (
        <div className="overflow-x-auto w-full my-12">

            <form className="flex items-center w-1/2 mx-auto mb-8">
                <label htmlFor="" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" onChange={(event) => setSearch(event.target.value) } name="searchText" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-300  block w-full pl-10 p-2.5  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white  " placeholder="Search By Toy Name" required />
                        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                           
                        </button>
                </div>
                <button onClick={handleSearch} type="" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-slate-500 rounded-md border border-slate-300 hover:bg-slate-600  dark:bg-purple-600 dark:hover:bg-slat-500 ">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
                </button>
            </form>

            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label className="">
                               No.
                            </label>
                        </th>
                        <th>Toy Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        toys.map((toy, index) => <AllToysRow key={toy._id} index={index} toy={toy}></AllToysRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;