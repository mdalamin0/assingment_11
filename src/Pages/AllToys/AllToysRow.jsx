import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Componets/Providers/AuthProvider";
import Swal from "sweetalert2";


const AllToysRow = ({ toy, index }) => {
    const { user } = useContext(AuthContext);
    const { _id, pictureUrl, rating, price, name, category, sellerName, quantity } = toy;
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
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Toy Name: {name}</div>
                        <div className="text-sm opacity-50">Seller: {sellerName}</div>
                    </div>
                </div>
            </td>
            <td className="font-semibold text-slate-600">
                {category}
            </td>
            <td className="font-semibold text-slate-600">
                ${price}
            </td>
            <td className="font-semibold text-slate-600">
                {rating}
            </td>
            <td className="font-semibold text-slate-600">
                {quantity}
            </td>
            <th>
                {user ?
                    <Link to={`/detailsToys/${_id}`}>
                        <button className='button'>View Details</button>
                    </Link>
                    : <Link onClick={() => handleToast(_id)}>
                        <button className='button'>View Details</button>
                    </Link>

                }
            </th>
        </tr>
    );
};

export default AllToysRow;