

const About = () => {
    return (
        <div className="my-8">
            <h3 className="text-center text-3xl font-bold mt-8">About Our <span className="text-gradient">SmartToys</span></h3>
            <p className="md:w-1/2 text-center mx-auto text-slate-400 mt-5">Get ready to embark on an unforgettable journey through our toy wonderland, where dreams come to life and playtime becomes an extraordinary adventure.</p>
            <div className="md:flex mt-12 items-center">
                <div className="md:w-1/2 p-5">
                    <h3 className="text-3xl font-bold ">Welcome to Our SmartToys</h3>
                    <p className=" text-slate-400 mt-4">Our SmartToys toys product always best. We are always try to keep best our Products</p> <br />
                    <p className="text-slate-400">At Our SmartToys, we believe in the power of play. We understand that toys are not just objects; they are gateways to exploration, creativity, and shared moments of laughter and joy. Join our vibrant community of toy enthusiasts, where you can connect with like-minded individuals, share your excitement, and uncover hidden gems that will leave you awe-inspired.</p>
                </div>
                <div className="md:w-1/2">
                    <img src="https://wherestheline.info/wp-content/uploads/2020/09/childw-ith-smart-toy.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;