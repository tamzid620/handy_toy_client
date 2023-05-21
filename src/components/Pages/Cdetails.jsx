import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cdetails = () => {
    const params = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/toydetails/${params.id}`)
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, [params]);

    console.log(details);

    return (
        <div className="text-white">
            <h2>c detalis</h2>
            
        </div>
    );
};

export default Cdetails;