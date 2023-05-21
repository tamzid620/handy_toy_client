import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cdetails = () => {
    const params = useParams();

const [toydata, setToydata] =useState()

    useEffect(() => {
        fetch(`http://localhost:5000/catedetails/${params.id}`)
            .then((res) => res.json())
            .then((data) => setToydata(data));
    }, [params]);

    console.log(toydata);

    return (
        <div className="text-white">
            <h2 className='flex justify-center font-bold text-2xl mb-20 text-orange-400'>category detalis</h2>

            {/* <div>
                {
                    toydata?.categories?.map((categories)=> {
                        <div key={categories._id}>
                            <div>
                                <img src={categories.picture} alt="" />
                            </div>
                            <div>
                                <p>{categories.name}</p>
                                <p>{categories.price}</p>
                                <p>{categories.rating}</p>
                            </div>
                        </div>
                    })
                }
            </div> */}


        </div>
    );
};

export default Cdetails;