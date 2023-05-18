import { useContext } from "react";
import { AuthContext } from "../../Componets/Providers/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
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
        const email = user?.email;

        const newToy = {name, email, sellerName, pictureUrl, rating, price, category, quantity, detail}
        console.log(newToy)

        // send data to the server

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okk'
                    })
                }
            })
        // form.reset()
    }
    return (
        <div className="rounded-md bg-base-200 my-16">
            <div className="card-body md:w-3/4 py-[95px] mx-auto">
                <form onSubmit={handleAddToy}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Name" className="input" defaultValue={user?.displayName} />
                        </div>
                        <div className="form-control">
                            <input type="text" name="sellerName" placeholder="Seller Name" className="input" />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" placeholder="Seller Email" defaultValue={user?.email} className="input" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="pictureUrl" placeholder="Picture URL" className="input focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="rating" placeholder="Rating" className="input" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="price" placeholder="Price" className="input focus:outline-none" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="category" placeholder="Category" className="input" />
                        </div>
                        <div className="form-control">
                            <input type="text" name="quantity" placeholder="Available quantity" className="input focus:outline-none" />
                        </div>
                    </div>
                    <div className="form-control mt-6 ">
                        <textarea className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"  placeholder="Detail Description" name="detail" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input className="button cursor-pointer" type="submit" value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;