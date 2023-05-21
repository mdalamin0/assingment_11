import { HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ toy, toys, setToys }) => {
    const { _id, pictureUrl, rating, price, name, sellerName , quantity} = toy;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want ot delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-pearl.vercel.app/toysById/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                            const remainingToys = toys.filter(toy => toy._id !== _id);
                            setToys(remainingToys)
                        }
                    })
            }
        })
        console.log(_id)
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
                    <div>
                        <div className="font-bold"> Name: {name}</div>
                        <div className="text-sm opacity-50">Seller: {sellerName}</div>
                    </div>
                </div>
            </td>
            <td className="font-semibold text-slate-600">
                ${price}
            </td>
            <td className="font-semibold text-slate-600">
                {quantity}
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