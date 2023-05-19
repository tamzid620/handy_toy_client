import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";



const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setMytoys(data);
            })
    }, [user])
    console.log(user)

    return (
        <div>
            <h2 className=" text-center font-semibold text-3xl text-orange-400 mt-10 mb-20  "> MY TOYS</h2>
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
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mytoys.map((mytoy, index) => (
                                    <tr key={mytoy.id}>
                                        <th>{index + 1}</th>
                                        <td>{mytoy?.seller}</td>
                                        <td>{mytoy?.name}</td>
                                        <td>{mytoy?.price}$</td>
                                        <td>{mytoy?.quantity} pieces</td>
                                        <td>
                                            <button className="btn bg-orange-500 rounded-lg text-white font-bold">view Details</button>
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

export default MyToys;