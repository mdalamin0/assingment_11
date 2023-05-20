import { Link } from "react-router-dom";


const AllToysRow = ({ toy, index }) => {
    const { _id, pictureUrl, rating, price, name, category, sellerName } = toy;

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
                {rating}
            </td>
            <th>
                <Link >
                    <button className="button">View Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllToysRow;