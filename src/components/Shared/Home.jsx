import banner from '../../../public/starwar.jpg'
import storeCart1 from '../../../public/store1.jpg'
import storeCart2 from '../../../public/store2.jpg'
import storeCart3 from '../../../public/store3.jpg'

const Home = () => {
    return (
        <div>
            {/* Banner ----------------------- */}
            <div className='container mx-auto rounded-xl mt-10  mb-10' style={{
                backgroundImage: 'url("../../../public/carousel1.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh"
            }}>
                <div className='min-h-screen flex justify-center items-center bg-black bg-opacity-75'>
                    <div className='w-full'>
                        <h1 className=' flex justify-center font-bold text-4xl text-orange-400'>WELCOME TO HANDY TOY STORE</h1>
                        <p className='text-gray-400 font-semibold text-center mt-5'>Explore our carefully curated categories and discover a world of possibilities. <br /> Delve into the realm of plush toys, where cuddly companions await, ready to be cherished and loved. </p>
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
                    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
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

            {/* About ----------------------- */}
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

            {/* New Letter  */}
            <div className='container mx-auto bg-orange-200 rounded-xl p-20'>
                <h2 className="text-4xl font-bold text-orange-400 flex justify-center">SIGN UP NEWSLETTER</h2>
                <p className='text-gray-400 flex justify-center text-center mb-3'>Subscribe to get more special Deals, <br />
                    Events & Promotions</p>
                <div className='flex justify-center gap-5'>
                    <input className='border rounded-lg' type="email" name="email" placeholder='Your email' />
                    <button className='btn bg-orange-400 px-5 py-2  font-bold rounded-xl'>Submit</button>
                </div>
            </div>

        </div>
    );
};

export default Home;