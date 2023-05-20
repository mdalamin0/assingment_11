import { useLoaderData } from "react-router-dom";


const DetailsToys = () => {
    const singleToys = useLoaderData();
    return (
        <div>
            <h3>Details Here</h3>
        </div>
    );
};

export default DetailsToys;