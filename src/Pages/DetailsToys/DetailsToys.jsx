import { Link, useLoaderData } from "react-router-dom";


const DetailsToys = () => {
    const singleToys = useLoaderData();
    const { name, price, rating, pictureUrl, sellerName, detail } = singleToys;
    console.log(singleToys)
    return (
        <div className="md:w-1/2 mx-auto my-10">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="w-full h-96" src={pictureUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h4 className="text-xl font-semibold">Seller: {sellerName}</h4>
                    <p>Price: ${price}</p>
                    <p>Ratings: {rating}</p>
                    <p>{detail}</p>
                    <div className="card-actions justify-between mt-5">
                      <Link to="/"> <button className="button">Back to Home</button></Link>
                       <button className="button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsToys;