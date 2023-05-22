import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const Atdetails = () => {

    const [atdetails, setAtdetails] = useState([])

    const params = useParams();
    useTitle('AllToys Details')

    useEffect(() => {
        fetch(`https://handy-toy-store-server.vercel.app/alltoydetails/${params.id}`,{
            method:"GET"
        })
            .then((res) => res.json())
            .then((data) => setAtdetails(data));
    }, [params]);
    console.log(atdetails)

    // const params = useParams();

    // const [toydata, setToydata] = useState([])
    // useTitle('Subcategory Details')

    // useEffect(() => {
    //     fetch(`https://handy-toy-store-server.vercel.app/catedetails/${params.id}`)
    //         .then((res) => res.json())
    //         .then((data) => setToydata(data));
    // }, [params]);


    return (
        <div className="text-white">
            <h2>All toys detalis</h2>
                <div>
                <p className='font-bold text-3xl'> Name: {atdetails.name}</p>
                </div>
        </div>
    );
};

export default Atdetails;