import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Cdetails = () => {
    const params = useParams();

const [toydata, setToydata] = useState([])
useTitle('Subcategory Details')

    useEffect(() => {
        fetch(`https://handy-toy-store-server.vercel.app/catedetails/${params.id}`)
            .then((res) => res.json())
            .then((data) => setToydata(data));
        }, [params]);
    return (
        <div className="text-white">
            <h2 className='flex justify-center font-bold text-2xl mb-20 text-orange-400'>category detalis</h2>

            <div>
                {
                    toydata?.categories?.map((categories)=> {
                        <div key={categories.id}>
                            <div>
                                <img src={categories.picture} alt="" />
                            </div>
                            <div>
                                <p> name: {categories.name}</p>
                                <p>price :{categories.price}</p>
                                <p>rating: {categories.rating}</p>
                                <p>description:{categories.description}</p>
                            </div>
                        </div>
                    })
                }
            </div>


        </div>
    );
};

export default Cdetails;