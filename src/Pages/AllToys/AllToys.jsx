import { useLoaderData } from "react-router-dom";


const AllToys = () => {
    const toys = useLoaderData();

    return (
        <div>
            <h3>This is all toys {toys.length}</h3>
        </div>
    );
};

export default AllToys;