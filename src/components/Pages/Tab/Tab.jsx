import './Tab.css'
import { useEffect, useState } from 'react';
import Rating from "react-rating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Tab = (id) => {
    const [toggleState, setToggleState] = useState(1);
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        fetch('https://handy-toy-store-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setSubcategories(data))
    }, [])

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='mb-10'>
            <h1 className="text-4xl font-bold flex justify-center text-orange-500">SHOP BY CATEGORY</h1>
            <div className="tabContainer">

                <div className="block-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Sub_Category_1
                    </button>
                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Sub_Category_2
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Sub_Category_3
                    </button>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>

                        <div className='flex justify-center'>
                            <div className='grid md:grid-cols-2 sm:grid-cols-1 mb-20 gap-4 '>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={subcategories[0]?.categories[0]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {subcategories[0]?.categories[0]?.name}</h2> 
                                        <p>• Price: {subcategories[0]?.categories[0]?.price}</p>
                                        <p>• Rating: {subcategories[0]?.categories[0]?.rating}
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                                readonly
                                            />
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/cdetails/${id}`}>
                                                <button className="btn  bg-orange-500">view details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={subcategories[1]?.categories[0]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {subcategories[1]?.categories[0]?.name}</h2>
                                        <p>• Price: {subcategories[1]?.categories[0]?.price}</p>
                                        <p>• Rating: {subcategories[1]?.categories[0]?.rating}
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                                readonly
                                            />
                                        </p>

                                        <div className="card-actions justify-end">
                                            <Link to={`/cdetails/${id}`}>
                                                <button className="btn  bg-orange-500">view details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"}>

                        <div className='flex justify-center'>
                            <div className='grid md:grid-cols-2 sm:grid-cols-1 mb-20 gap-4 '>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={subcategories[2]?.categories[0]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {subcategories[2]?.categories[0]?.name}</h2>
                                        <p>• Price: {subcategories[2]?.categories[0]?.price}</p>
                                        <p>• Rating: {subcategories[2]?.categories[0]?.rating}
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                                readonly
                                            />
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/cdetails/${id}`}>
                                                <button className="btn  bg-orange-500">view details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={subcategories[3]?.categories[0]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {subcategories[3]?.categories[0]?.name}</h2>
                                        <p>• Price: {subcategories[3]?.categories[0]?.price}</p>
                                        <p>• Rating: {subcategories[3]?.categories[0]?.rating}
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                                readonly
                                            />
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/cdetails/${id}`}>
                                                <button className="btn  bg-orange-500">view details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 3 ? "content  active-content" : "content"}>

                        <div className='flex justify-center'>
                            <div className='grid md:grid-cols-2 sm:grid-cols-1 mb-20 gap-4 '>
                                <div className="card w-96 bg-base-100 shadow-xl mb-10">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={subcategories[4]?.categories[0]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {subcategories[4]?.categories[0]?.name}</h2>
                                        <p>• Price: {subcategories[4]?.categories[0]?.price}</p>
                                        <p>• Rating: {subcategories[4]?.categories[0]?.rating}
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                                readonly
                                            />
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/cdetails/${id}`}>
                                                <button className="btn  bg-orange-500">view details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={subcategories[5]?.categories[0]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {subcategories[5]?.categories[0]?.name}</h2>
                                        <p>• Price: {subcategories[5]?.categories[0]?.price}</p>
                                        <p>• Rating: {subcategories[5]?.categories[0]?.rating}
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<FontAwesomeIcon icon={farStar} className="icon" style={{ color: 'grey' }} />}
                                                placeholderSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'gold' }} />}
                                                fullSymbol={<FontAwesomeIcon icon={fasStar} className="icon" style={{ color: 'yellow' }} />}
                                                readonly
                                            />
                                        </p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/cdetails/${id}`}>
                                                <button className="btn  bg-orange-500">view details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab;