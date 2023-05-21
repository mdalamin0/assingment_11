import { useEffect, useState } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'



const ToysGallery = () => {
    const [toys, setToys] = useState([]);

    Aos.init({
        duration: 1200,
      })
      

    useEffect(() => {
        fetch('https://toy-marketplace-server-pearl.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    return (
        <div className="bg-slate-200 p-8">
            <h3 className="text-2xl font-bold text-center hidden md:block my-5">Our Animal Products Photo Gallery</h3>
            <h3 className="text-2xl font-bold text-center md:hidden mb-3">Our Products Photo Gallery </h3>
            <p className="text-semibold text-slate-400 text-center md:w-2/3 mx-auto">Fun and educational playthings for kids and adults alike. Spark imagination, teach about animals, and provide sensory stimulation.  From plushies to figurines, they bring joy and learning to all ages.
                Animal toys offer endless fun and excitement for both kids and adults. These delightful playthings come in various shapes and sizes, from cuddly plush animals to lifelike figurines. Animal toys provide not only entertainment but also educational value.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 my-10 bg-slate-200 md:p-8">
                {
                    toys.map(toy =>
                        <div data-aos="zoom-out" className="shadow-md rounded-md" key={toy._id}>
                            <img className="md:h-56 lg:h-64 rounded-md w-full" src={toy.pictureUrl} alt="" />

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ToysGallery;