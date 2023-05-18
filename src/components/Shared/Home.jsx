import banner from '../../../public/starwar.jpg'
import storeCart1 from '../../../public/store1.jpg'
import storeCart2 from '../../../public/store2.jpg'
import storeCart3 from '../../../public/store3.jpg'
import cd1 from '../../../public/carousel1.jpg'
import cd2 from '../../../public/carousel2.jpg'
import cd3 from '../../../public/carousel3.jpg'
import cd4 from '../../../public/carousel4.jpg'

const Home = () => {
    return (
        <div>
            {/* Banner ----------------------- */}
            <div className='grid md:grid-cols-2 sm:grid-cols-1 mb-20 gap-4 mt-10 container mx-auto bg-orange-200 p-5 rounded-3xl'>
                <div>
                    <img className='rounded-xl' src={banner} alt="" />
                </div>
                <div className='flex items-center'>
                    <div>
                        <h2 className='font-bold text-4xl text-orange-400'>Handle Toy Store</h2>
                        <p className=' font-semibold text-lg'>"Welcome to our Toy Store! Step into a world of imagination and play where joy knows no bounds. Discover a treasure trove of toys that will ignite the imagination of children of all ages. From classic favorites to the latest trends, we offer a wide selection of toys that will bring smiles, laughter, and unforgettable memories. Whether you're searching for the perfect gift, planning a birthday party, or simply indulging in a playful adventure, our Toy Store is your ultimate destination. Come and explore a world of wonder, where dreams come true and imagination takes flight!"</p>
                    </div>
                </div>
            </div>

            {/* Our Products  */}


            {/* OUR LATEST NEWS  */}
            <div className='container mx-auto'>
                <div>
                    <div className="flex justify-center text-orange-400 mb-10">
                        <h1 className="text-4xl font-bold">OUR LATEST NEWS</h1>
                    </div>

                    <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={storeCart1} alt="store" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge bg-orange-400">NEW</div>
                                </h2>
                                <h1 className='font-semibold text-lg'>We bring you the best</h1>
                                <p className='text-sm text-gray-400'>Not only will you be able to find all your favorite toys, but you’ll also be able to explore the different sections and see what new and exciting toys have come in recently.</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-orange-500 text-white">Toys</div>
                                    <div className="badge badge-outline bg-black text-gray-300">Products</div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={storeCart2} alt="store" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge bg-orange-400">NEW</div>
                                </h2>
                                <h1 className='font-semibold text-lg'>We design functional Toys</h1>
                                <p className='text-sm text-gray-400'>Not only will you be able to find all your favorite toys, but you’ll also be able to explore the different sections and see what new and exciting toys have come in recently.</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-orange-500 text-white">Toys</div>
                                    <div className="badge badge-outline bg-black text-gray-300">Products</div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={storeCart3} alt="store" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge bg-orange-400">NEW</div>
                                </h2>
                                <h1 className='font-semibold text-lg'>We know that buying shop</h1>
                                <p className='text-sm text-gray-400'>Not only will you be able to find all your favorite toys, but you’ll also be able to explore the different sections and see what new and exciting toys have come in recently.</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline bg-orange-500 text-white">Toys</div>
                                    <div className="badge badge-outline bg-black text-gray-300">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* carousel  */}
            <div className='container mx-auto mt-20 mb-20'>
                <div className="flex justify-center text-orange-400 mb-10">
                    <h1 className="text-4xl font-bold">Our Toys Sample</h1>
                </div>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={cd1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={cd2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={cd3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={cd4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Letter  */}
            <div className='container mx-auto bg-orange-200 rounded-xl p-20'>
                <h2 className="text-4xl font-bold text-orange-400 flex justify-center">SIGN UP NEWSLETTER</h2>
                <p className='text-gray-400 flex justify-center text-center mb-3'>Subscribe to get more special Deals, <br />
                    Events & Promotions</p>
                <div className='flex justify-center gap-5'>
                    <input className='border rounded-lg' type="email" name="email"   placeholder='Your email' />
                    <button className='bg-orange-400 px-5 py-2  font-bold rounded-xl'>Submit</button>
                </div>
            </div>

        </div>
    );
};

export default Home;