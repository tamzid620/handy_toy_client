import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


const Atdetails = () => {

    const [atdetails, setAtdetails] = useState([])
    const params = useParams();
    useTitle('AllToys Details')

    useEffect(() => {
        fetch(`https://handy-toy-store-server.vercel.app/alltoydetails/${params.id}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => setAtdetails(data));
    }, [params]);

    return (
        <div className="text-white">
            <h2 className='flex justify-center font-bold text-2xl mb-20 text-orange-400'>ALL TOY DETAILS</h2>
            <div className='container mx-auto '>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='rounded-xl' src={atdetails?.picture} alt="" />
                    </div>
                    <div className=' ms-5'>
                        <p className='font-bold text-3xl'> Name: {atdetails?.name}</p>
                        <p className='font-bold text-3xl text-orange-400'> Seller: {atdetails?.seller}</p>
                        <p className='text-orange-400 font-semibold text-2xl'> price :{atdetails?.price} $</p>
                        <p className='text-orange-400 font-semibold text-xl'>rating: {atdetails?.rating}
                            <Rating className='ms-3'
                                placeholderRating={3.5}
                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                readonly
                            />
                        </p>
                        <p className='text-orange-400 font-semibold text-2xl'> quantity :{atdetails?.quantity} pieces</p>
                        <p className='text-orange-400 font-semibold text-sm'>description:{atdetails?.description}</p>

                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link className='px-8 py-3 font-semibold rounded bg-orange-400 mt-5 text-black' to='/'>Back to homepage</Link>
            </div>
        </div>
    );
};

export default Atdetails;
