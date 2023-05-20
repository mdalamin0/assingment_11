import About from "../About/About";
import Banner from "../Banner/Banner";
import NewToys from "../NewToys/NewToys";
import ToysGallery from "../ToysGallery/ToysGallery";
import ToysTab from "../ToysTab/ToysTab";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToysGallery></ToysGallery>
            <NewToys></NewToys>
            <ToysTab></ToysTab>
            <About></About>
        </div>
    );
};

export default Home;