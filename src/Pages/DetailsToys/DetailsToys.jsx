import { useLoaderData } from "react-router-dom";


const DetailsToys = () => {
    const singleToys = useLoaderData();
    console.log(singleToys)
    return (
        <div>
            <h3>Details Here</h3>
        </div>
    );
};

export default DetailsToys;