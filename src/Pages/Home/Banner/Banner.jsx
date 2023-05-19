

const Banner = () => {
    return (
        <div className="carousel w-full md:h-[450px] mt-12 mb-24">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://www.shutterstock.com/image-vector/vector-playful-emblem-toys-club-600w-1793540941.jpg" className="w-full rounded-md " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jy6BMwj/download.jpg" className="w-full rounded-md" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a  className="btn btn-circle">❮</a>
                    <a  className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/rpz56bf/images.jpg" className="w-full rounded-md" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdYqxVlxbl7VTl2QJyiKRmdh6FqwlGvIAGg&usqp=CAU" className="w-full rounded-md" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;