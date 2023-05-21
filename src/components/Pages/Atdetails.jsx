import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Atdetails = () => {

    const params = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/alltoydetails/${params.id}`)
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [params]);

    console.log(details);

    return (
        <div className="text-white">
            <h2>All toys detalis</h2>

        </div>
    );
};

export default Atdetails;