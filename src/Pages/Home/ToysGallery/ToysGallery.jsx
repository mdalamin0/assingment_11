import { useEffect, useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'



const ToysGallery = () => {
    const [toys, setToys] = useState([]);

    Aos.init({
        duration: 1200,
      })
      

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data.slice(0, 20)));
    }, [])

    return (
        <div>
            <h3 className="text-2xl font-bold text-center hidden md:block my-5">Our Animal Products Available Now: {toys.length} </h3>
            <h3 className="text-2xl font-bold text-center md:hidden">Our Products Available : {toys.length}</h3>
            <p className="text-semibold text-slate-400 text-center w-2/3 mx-auto">Fun and educational playthings for kids and adults alike. Spark imagination, teach about animals, and provide sensory stimulation.  From plushies to figurines, they bring joy and learning to all ages.
                Animal toys offer endless fun and excitement for both kids and adults. These delightful playthings come in various shapes and sizes, from cuddly plush animals to lifelike figurines. Animal toys provide not only entertainment but also educational value.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 ">
                {
                    toys.map(toy =>
                        <div data-aos="zoom-out" className="shadow-md rounded-md" key={toy._id}>
                            <img className="h-72 rounded-md w-full" src={toy.pictureUrl} alt="" />

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ToysGallery;