import { useEffect, useState } from "react";



const ToysGallery = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 20)))
    }, [])

    return (
        <div>
            <h3 className="text-2xl font-bold text-center hidden md:block">Our Animal Products Available Now: {toys.length} </h3>
            <h3 className="text-2xl font-bold text-center md:hidden">Our Products Available : {toys.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 ">
                {
                    toys.map(toy =>
                        <div className="shadow-md rounded-md" key={toy._id}>
                            <img className="h-72 rounded-md w-full" src={toy.pictureUrl} alt="" />

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ToysGallery;