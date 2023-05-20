import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMytoys] = useState([]);
  const { register, handleSubmit } = useForm();
  const [updatedToyInfo, setUpdatedToyInfo] = useState({});
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then(res => res.json())
      .then((data) => {
        setMytoys(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [user, control]);

  const updateToyInformation = (data) => {
    fetch(`http://localhost:5000/updatetoy/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          setUpdatedToyInfo(data);
          toast.success("Toy information updated successfully");
        }
        console.log(result);
      })
      .catch(error => {
        console.error(error);
        toast.error("Error updating toy information");
      });
  };

//   const handleDelete = (id )=> {
//     fetch(`http://localhost:5000/deletetoy/${id}`,{
//         method:'DELETE',

//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         if(data.deleteCount > 0 ){
//             alert('deleted seccessful');
//             const remaining = mytoys.filter(mytoys => mytoys._id !==id);
//             setMytoys(remaining)
//         }
//     })
//   }


  return (
    <div>
      <h2 className="text-center font-semibold text-3xl text-orange-400 mt-10 mb-20">MY TOYS</h2>
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
                <th>Available Quantity</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mytoys.map((mytoy, index) => (
                <tr key={mytoy._id}>
                  <th>{index + 1}</th>
                  <td>{mytoy?.seller}</td>
                  <td>{mytoy?.name}</td>
                  <td>{mytoy?._id === updatedToyInfo?._id ? updatedToyInfo?.price : mytoy?.price}$</td>
                  <td>{mytoy?._id === updatedToyInfo?._id ? updatedToyInfo?.quantity : mytoy?.quantity} pieces</td>
                  <td>
                    <label htmlFor={`my-modal-${mytoy._id}`} className="btn bg-orange-500 rounded-lg text-white font-bold">Update</label>
                    <input type="checkbox" id={`my-modal-${mytoy._id}`} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box w-11/12 max-w-5xl bg-orange-400">
                        <h3 className="font-bold text-lg">Update Toy Information!</h3>
                        {/* update information form  */}
                        <form onSubmit={handleSubmit(updateToyInformation)}>

                          <p className="flex mb-3 justify-center mt-5 font-semibold text-white">Fill up input field to update toy information</p>

                          <div className="flex justify-center ">

                            <input className="me-2 p-3 rounded-lg hidden" placeholder="_id" {...register("id", { required: true, maxLength: 100 })} defaultValue={mytoy._id} />

                            <input className="me-2 p-3 rounded-lg" placeholder="price" {...register("price", { required: true, maxLength: 4 })} defaultValue={mytoy?.price} />

                            <input className="me-2 p-3 rounded-lg" type="number" placeholder="available quantity" {...register("quantity", { min: 1, max: 100 })} defaultValue={mytoy?.quantity} />

                            <input className="me-2 p-3 rounded-lg" placeholder="description" {...register("description", { required: true, maxLength: 50 })} defaultValue={mytoy?.description} />

                          </div>

                          <div className="flex justify-center">
                            <input className="btn bg-orange-600 mt-3" type="submit" />
                          </div>

                          <p className="flex justify-center mt-5 font-semibold text-white">Press submit to update toy information</p>
                        </form>

                        {/* update information form  */}
                        <div className="modal-action">
                          <label htmlFor={`my-modal-${mytoy._id}`} className="btn bg-orange-500">close!</label>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button  className="btn bg-orange-500 rounded-lg text-white font-bold">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyToys;
