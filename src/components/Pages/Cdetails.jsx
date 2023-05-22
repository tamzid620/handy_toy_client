import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const Cdetails = () => {
    const params = useParams();
    const [toydata, setToydata] = useState([])
    useTitle('Subcategory Details')

    useEffect(() => {
        fetch(`https://handy-toy-store-server.vercel.app/catedetails/${params?.id}`)
            .then((res) => res.json())
            .then((data) => setToydata(data.categories[0]));
    }, [params?.id]);
    return (
        <div className="text-white">
            <h2 className='flex justify-center font-bold text-2xl mb-20 text-orange-400'>category detalis</h2>

            <div className='container mx-auto '>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='rounded-xl' src={toydata?.picture} alt="" />
                    </div>
                    <div className=' ms-5'>
                        <p className='font-bold text-3xl'> Name: {toydata?.name}</p>
                        <p className='text-orange-400 font-semibold text-2xl'> price :{toydata?.price} $</p>
                        <p className='text-orange-400 font-semibold text-xl'>rating: {toydata?.rating}
                            <Rating className='ms-3'
                                placeholderRating={3.5}
                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                readonly
                            />
                        </p>
                        <p className='text-orange-400 font-semibold text-sm'>description:{toydata?.description}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link className='px-8 py-3 font-semibold rounded bg-orange-400 mt-5 text-black' to='/'>Back to homepage</Link>
            </div>


        </div>
    );
};

export default Cdetails;