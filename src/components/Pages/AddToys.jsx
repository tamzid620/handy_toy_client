import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToys = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/addToys', {
            method: "POST",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Toy added successfully!');
                console.log(result)
            })
        console.log(data);
    }


    return (
        <div className="container mx-auto">
            <h2 className=" text-center font-semibold text-3xl text-orange-400 mt-10 mb-20  "> ADD TOYS</h2>
            <div className="bg-orange-500  py-10 px-20 flex justify-center rounded-xl">

                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <p className="flex mb-3 justify-center mt-5 font-semibold text-white">fill up input field  to add toy</p>
                    <div className="flex justify-center">

                        <input className="me-2 p-3 mb-2 rounded-lg" placeholder="photourl" {...register("firstName", { required: true, maxLength: 20 })} />

                        <input className="me-2 p-3 mb-2 rounded-lg" placeholder="toy name" {...register("name", { required: true, maxLength: 20 })} />

                        <input className="me-2 p-3 mb-2 rounded-lg" placeholder="your name" {...register("seller", { required: true, maxLength: 20 })} />

                        <input className="me-2 p-3 mb-2 rounded-lg" placeholder="your email"
                            {...register("email", { required: "Email Address is required" })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="flex justify-center ">

                        <input className="me-2 p-3 rounded-lg" placeholder="price" {...register("price", { required: true, maxLength: 4 })} />

                        <input className="me-2 p-3 rounded-lg" placeholder="raiting" type="number"  {...register("age", { min: 1, max: 100 })} />

                        <input className="me-2 p-3 rounded-lg" type="number" placeholder="avaiablle quantity" {...register("avaiablle quantity", { min: 1, max: 100 })} />

                        <input className="me-2 p-3 rounded-lg" placeholder="discription" {...register("firstName", { required: true, maxLength: 50 })} />

                    </div>
                    <div className="flex justify-center">
                        <input className=" btn bg-orange-600 mt-3 " type="submit" />
                    </div>
                    <p className="flex justify-center mt-5 font-semibold text-white">Press submit to add toy</p>
                </form>

            </div>
            <ToastContainer />
        </div>
    );
};

export default AddToys;