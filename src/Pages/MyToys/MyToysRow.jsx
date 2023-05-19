import {  HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyToysRow = ({ toy }) => {
    const {  _id, pictureUrl, rating, price } = toy;

    // const handleDelete = () => {
    //     console.log('delete')
    // }
   
    return (
        <tr>
            <th>
                <label className="text-3xl cursor-pointer">
                    {/* <HiXCircle onClick={() => handleDelete(_id)}></HiXCircle> */}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="font-semibold text-slate-600">
                ${price}
            </td>
            <td className="font-semibold text-slate-600">
                {rating}
            </td>
            <th>
                <Link to={`../updateToys/${_id}`}>
                    <button className="button">Update</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyToysRow;