import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ToysTab.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToysTab = () => {
    const [defaultCategory, setDefaultCategory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/toys/Teddy Bear`)
            .then(res => res.json())
            .then(data => setDefaultCategory(data))
    }, [])

    const [categoryToys, setCategoryToys] = useState(defaultCategory)

    const handleTeddyCategory = category => {
        fetch(`http://localhost:5000/toys/${category}`)
            .then(res => res.json())
            .then(data => setCategoryToys(data))
    }

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


    return (
        <>
            <h3 className='text-2xl text-center font-bold mt-20 mb-8'>Shop by Our Category</h3>
            <Tabs className='text-center'>
                <TabList className='border-0 font-semibold text-xl bg-slate-300 py-5 '>
                    <Tab onClick={() => handleTeddyCategory('Dog')}>Teddy</Tab>
                    <Tab onClick={() => handleDogCategory('Dog')}>Dog</Tab>
                    <Tab onClick={() => handleHorseCategory('Horse')}>Horse</Tab>
                </TabList>

                <TabPanel >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                        {
                            categoryToys.map(toy => <div key={toy._id}>
                                <div className="border-2 rounded-md">
                                    <figure className="card-body pt-8">
                                        <img src={toy.pictureUrl} alt="" className="rounded-md h-72 w-full" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> {toy.name}  </h2>
                                        <p className='text-left'>Price: {toy.price}</p>
                                        <div className="card-actions justify-between items-center pt-5">
                                            <div className="">Rating: {toy.rating}</div>
                                            <div className="">
                                                <button className='button'>View Details</button>
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

                                <div className="border-2 rounded-md">
                                    <figure className="card-body pt-5">
                                        <img src={toy.pictureUrl} alt="" className="rounded-md h-72 w-full" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> {toy.name}  </h2>
                                        <p className='text-left'>Price: {toy.price}</p>
                                        <div className="card-actions pt-8 justify-between items-center">
                                            <div className="">Rating: {toy.rating}</div>
                                            <div className="">
                                                <button className='button'>View Details</button>
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

                                <div className="border-2 rounded-md">
                                    <figure className="card-body pt-5">
                                        <img src={toy.pictureUrl} alt="" className="rounded-md h-72  w-full" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title"> {toy.name}  </h2>
                                        <p className='text-left'>Price: {toy.price}</p>
                                        <div className="card-actions pt-8 justify-between items-center">
                                            <div className="">Rating: {toy.rating}</div>
                                            <div className="">
                                                <button className='button'>View Details</button>
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