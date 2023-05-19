import { HiOutlineCheckCircle, HiXCircle } from "react-icons/hi";

const MyToysRow = ({toy}) => {
    const {name, _id, pictureUrl, rating, price} = toy;

    const handleDelete =() => {
        console.log('delete')
    }
    const handleUpdate = (id) => {
        console.log(id)
    }
    return (
        <tr>
            <th>
                <label className="text-3xl cursor-pointer">
                    <HiXCircle onClick={() => handleDelete(_id)}></HiXCircle>
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
                {
                    status === 'confirm' ? <div className="flex items-center"><span className="font-bold text-green-700">Confirmed</span> <HiOutlineCheckCircle className="text-2xl text-green-700 ms-2"></HiOutlineCheckCircle> </div> :
                        <button onClick={() => handleUpdate(_id)} className="button ">Update</button>
                }
            </th>
        </tr>
    );
};

export default MyToysRow;