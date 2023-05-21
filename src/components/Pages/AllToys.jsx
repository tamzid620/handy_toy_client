import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = (id) => {
    const [alltoys, setAlltoys] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then((res) => res.json())
            .then((data) => setAlltoys(data))
            .catch((error) => console.error("Error fetching all toys:", error));
    }, []);

    const handleSearch = () => {
        fetch(`http://localhost:5000/toysearch/${search}`)
            .then((res) => res.json())
            .then((data) => setAlltoys(data))
            .catch((error) => console.error("Error searching toys:", error));
    };

    return (
        <div>
            <h2 className="text-center font-semibold text-3xl text-orange-400 mt-10 mb-10">
                ALL TOYS
            </h2>
            {/* search box  */}
            <div className="mb-20 flex justify-center items-center gap-3">
                <input onChange={(event) => setSearch(event.target.value)} type="text" className="px-5 py-2 rounded-lg"
                />{" "}
                <button onClick={handleSearch} className="btn bg-orange-500">Search</button>
            </div>

            {/* table  */}
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                {/* <th>Sub-category</th> */}
                                <th>Price</th>
                                <th>Avaiablle Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alltoys.map((alltoy, index) => (
                                    <tr key={alltoy._id}>
                                        <th>{index + 1}</th>
                                        <td>{alltoy?.seller}</td>
                                        <td>{alltoy?.name}</td>
                                        {/* <td>{alltoy?.categories[0]?.name}</td> */}
                                        <td>{alltoy?.price}$</td>
                                        <td>{alltoy?.quantity} pieces</td>
                                        <td>
                                            <Link to={`/atdetails/${id}`}>
                                                <button className="btn  bg-orange-500">view details</button></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;
