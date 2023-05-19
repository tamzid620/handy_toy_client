import Rating from 'react-rating';
import './Tab.css'
import { useEffect, useState } from 'react';

const Tab = () => {
    // const {id, picture, name , price , rating} = category;
    const [toggleState, setToggleState] = useState(1);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='mb-10'>
            <h1 className="text-4xl font-bold flex justify-center text-orange-500">SHOP BY CATEGORY</h1>
            <div className="tabContainer">

                <div className="bloc-tabs">
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
                                    <figure><img style={{ width: "300px", height: "250px" }} src={categories[0]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {categories[0]?.name}</h2>
                                        <p>• Price: {categories[0]?.price}</p>
                                        <p>• Rating: {categories[0]?.rating}
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
                                                placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
                                                fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />} readonly
                                            />
                                        </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">view details</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={categories[1]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {categories[1]?.name}</h2>
                                        <p>• Price: {categories[1]?.price}</p>
                                        <p>• Rating: {categories[1]?.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">view details</button>
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
                                    <figure><img style={{ width: "300px", height: "250px" }} src={categories[2]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {categories[2]?.name}</h2>
                                        <p>• Price: {categories[2]?.price}</p>
                                        <p>• Rating: {categories[2]?.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">view details</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={categories[3]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {categories[3]?.name}</h2>
                                        <p>• Price: {categories[3]?.price}</p>
                                        <p>• Rating: {categories[3]?.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">view details</button>
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
                                    <figure><img style={{ width: "300px", height: "250px" }} src={categories[4]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {categories[4]?.name}</h2>
                                        <p>• Price: {categories[4]?.price}</p>
                                        <p>• Rating: {categories[4]?.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">view details</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img style={{ width: "300px", height: "250px" }} src={categories[5]?.picture} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">• Item name: {categories[5]?.name}</h2>
                                        <p>• Price: {categories[5]?.price}</p>
                                        <p>• Rating: {categories[5]?.rating}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">view details</button>
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