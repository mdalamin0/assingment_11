import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Componets/Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import { HiXCircle } from "react-icons/hi";


const MyToys = () => {
    const myToys = useLoaderData();
    const {loading} = useContext(AuthContext);

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

    return (
        <div className="overflow-x-auto w-full my-12">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                        <label className="text-3xl cursor-pointer">
                    <HiXCircle></HiXCircle>
                </label>
                        </th>
                        <th>Toy Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myToys.map(toy => <MyToysRow key={toy._id} toy={toy}></MyToysRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;