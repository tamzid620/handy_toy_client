import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const Atdetails = () => {

    const params = useParams();
    useTitle('AllToys Details')


    useEffect(() => {
        fetch(`https://handy-toy-store-server.vercel.app/alltoydetails/${params.id}`,{
            method:"GET"
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [params.id]);


    return (
        <div className="text-white">
            <h2>All toys detalis</h2>

        </div>
    );
};

export default Atdetails;