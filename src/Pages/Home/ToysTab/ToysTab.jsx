import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ToysTab.css'
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Componets/Providers/AuthProvider';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'


const ToysTab = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [categoryToys, setCategoryToys] = useState([]);

    Aos.init({
        duration: 1200,
      })
      


    const handleTeddyCategory = category => {
        fetch(`http://localhost:5000/toys/${category}`)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }
    useEffect(() => {
        fetch(`http://localhost:5000/toys/Teddy Bear`)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }, [])

    const handleDogCategory = category => {
        fetch(`http://localhost:5000/toys/${category}`)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }
    const handleHorseCategory = category => {
        fetch(`http://localhost:5000/toys/${category}`)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }

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
        <>
            <h3 className='text-2xl text-center font-bold mt-20 '>Shop by Our Category</h3>
            <p className='text-semibold text-slate-400 text-center w-2/3 mx-auto mb-8 mt-3'>Fun and educational playthings for kids and adults alike. Spark imagination, teach about animals, and provide sensory stimulation.  From plushies to figurines, they bring joy and learning to all ages.</p>
            <Tabs className='text-center'>
                <TabList className='border-0 font-semibold text-xl bg-slate-300 py-5 '>
                    <Tab onClick={() => handleTeddyCategory('Teddy Bear')}>Teddy</Tab>
                    <Tab onClick={() => handleDogCategory('Dog')}>Dog</Tab>
                    <Tab onClick={() => handleHorseCategory('Horse')}>Horse</Tab>
                </TabList>

                <TabPanel >
                    <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                        {
                            categoryToys.map(toy => <div key={toy._id}>
                                <div data-aos="fade-left" className="border-2 rounded-md ">
                                    <figure className="card-body pt-8">
                                        <img src={toy.pictureUrl} alt="" className="rounded-md h-72 w-full" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title font-bold text-xl"> {toy.name}  </h2>
                                        <p className='text-left text-semibold text-slate-400'>Price: {toy.price}</p>
                                        <p className='text-left text-semibold text-slate-400'>Rating: {toy.rating}</p>
                                        <div className="card-actions justify-between items-center pt-5">
                                            <div className=""><p>Rating: {toy.rating}</p></div>
                                            <div className="">
                                                {user ?
                                                    <Link to={`/detailsToys/${toy._id}`}>
                                                        <button className='button'>View Details</button>
                                                    </Link>
                                                    : <Link onClick={() => handleToast(toy._id)}>
                                                        <button className='button'>View Details</button>
                                                    </Link>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                        {
                            categoryToys.map(toy => <div key={toy._id}>

                                <div data-aos="slide-up" className="border-2 rounded-md">
                                    <figure className="card-body pt-5">
                                        <img src={toy.pictureUrl} alt="" className="rounded-md h-72 w-full" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> {toy.name}  </h2>
                                        <p className='text-left'>Price: {toy.price}</p>
                                        <div className="card-actions pt-8 justify-between items-center">
                                            <div className="">Rating: {toy.rating}</div>
                                            <div className="">
                                            {user ?
                                                    <Link to={`/detailsToys/${toy._id}`}>
                                                        <button className='button'>View Details</button>
                                                    </Link>
                                                    : <Link onClick={() => handleToast(toy._id)}>
                                                        <button className='button'>View Details</button>
                                                    </Link>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                        {
                            categoryToys.map(toy => <div key={toy._id}>

                                <div data-aos="fade-down" className="border-2 rounded-md">
                                    <figure className="card-body pt-5">
                                        <img src={toy.pictureUrl} alt="" className="rounded-md h-72  w-full" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> {toy.name}  </h2>
                                        <p className='text-left'>Price: {toy.price}</p>
                                        <div className="card-actions pt-8 justify-between items-center">
                                            <div className="">Rating: {toy.rating}</div>
                                            <div className="">
                                            {user ?
                                                    <Link to={`/detailsToys/${toy._id}`}>
                                                        <button className='button'>View Details</button>
                                                    </Link>
                                                    : <Link onClick={() => handleToast(toy._id)}>
                                                        <button className='button'>View Details</button>
                                                    </Link>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default ToysTab;