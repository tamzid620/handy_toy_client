import { useEffect, useState } from "react";


const AllToys = () => {

    const [alltoys, setAlltoys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAlltoys(data))
    }, [])

    return (
        <div>
            <h2 className=" text-center font-semibold text-3xl text-orange-400 mt-10 mb-10  "> ALL TOYS</h2>
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Price</th>
                                <th>Avaiablle Quantity</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alltoys.map((alltoy, index) => (
                                    <tr key={alltoy.id}>
                                        <th>{index + 1}</th>
                                        <td>{alltoy?.seller}</td>
                                        <td>{alltoy?.name}</td>
                                        <td>{alltoy?.price}$</td>
                                        <td>{alltoy?.quantity} pieces</td>
                                        <td>
                                            <button className="btn bg-orange-500 rounded-lg text-white font-bold">Update</button>
                                        </td>
                                        <td>
                                            <button className="btn bg-orange-500 rounded-lg text-white font-bold">Delete</button>
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