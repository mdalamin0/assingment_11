import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Componets/Providers/AuthProvider";
import Swal from "sweetalert2";


const UpdateToys = () => {
    const toys = useLoaderData();
    const {_id, name, sellerName, pictureUrl, rating, price, category, quantity, detail } = toys;
    const { user } = useContext(AuthContext);

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const pictureUrl = form.pictureUrl.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const detail = form.detail.value;
        const category = form.category.value;
        const quantity = form.quantity.value;

        const updateToy = { name, sellerName, pictureUrl, rating, price, category, quantity, detail };

        // send data to the server

        fetch(`https://toy-marketplace-server-pearl.vercel.app/toysById/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okk'
                    })
                }
            })
    }
    return (
        <div className="rounded-md bg-base-200 my-16">
            <h3 className="text-3xl font-extrabold text-center pt-8" style={{ fontFamily: 'Ranch, cursive' }}>Update Toy: {name}</h3>
            <p className="text-center mt-5 w-3/4 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div className="card-body md:w-3/4 py-[95px] mx-auto">
                
                <form onSubmit={handleUpdateToy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" className="input" defaultValue={name} />
                        </div>
                        <div className="form-control">
                            <input type="text" name="sellerName" placeholder="Seller Name" className="input"
                                defaultValue={sellerName} />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Seller Email" defaultValue={user?.email} className="input" readOnly />
                        </div>
                        <div className="form-control">
                            <input type="text" name="pictureUrl" placeholder="Picture URL" className="input focus:outline-none" defaultValue={pictureUrl} />
                        </div>
                        <div className="form-control">
                            <input type="text" name="rating" placeholder="Rating" className="input" defaultValue={rating} />
                        </div>
                        <div className="form-control">
                            <input type="text" name="price" placeholder="Price" className="input focus:outline-none" defaultValue={price} />
                        </div>
                        <div className="form-control">
                            <input type="text" name="category" placeholder="Category" className="input" defaultValue={category} />
                        </div>
                        <div className="form-control">
                            <input type="text" name="quantity" placeholder="Available quantity" className="input focus:outline-none" defaultValue={quantity} />
                        </div>
                    </div>
                    <div className="form-control mt-6 ">
                        <textarea className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Detail Description" name="detail" id="" cols="30" rows="10" defaultValue={detail}></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="button cursor-pointer" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToys;