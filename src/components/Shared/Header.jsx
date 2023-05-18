import { Link } from 'react-router-dom';
import img from '../../../public/toyStore.png'
import banner from '../../../public/starwar.jpg'

const Header = () => {
  return (
    <div>

      {/* Navbar --------------------- */}
      <div className="navbar bg-orange-400 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li> <Link to='/'>Home</Link></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Toy Options
                  <svg className="fill-current bg-orange-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </a>
                <ul className="p-2 ">
                  <li><a><Link to="/alltoys">All Toys</Link></a></li>
                  <li><a><Link to="/mytoys">My Toys</Link></a></li>
                  <li><a><Link to="/addtoys">Add Toys</Link></a></li>
                </ul>
              </li>
              <li><Link to="/blog">Blogs</Link></li>
            </ul>
          </div>
          <div className="w-10 rounded-full ">
            <img src={img} />
          </div>
          <p className="btn btn-ghost normal-case text-xl">HandyToy</p>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li tabIndex={0}>
              <a className="justify-between">
                Toy Options
                <svg className="fill-current " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
              </a>
              <ul className="p-2 bg-orange-400 font-semibold text-white">
                <li><a><Link to="/alltoys">All Toys</Link></a></li>
                <li><a><Link to="/mytoys">My Toys</Link></a></li>
                <li><a><Link to="/addtoys">Add Toys</Link></a></li>
              </ul>
            </li>
            <li><Link to="/blog">Blogs</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full me-2">
            <img src={img} />
          </div>
          <a className="btn">Login</a>
        </div>
      </div>

      {/* Banner ----------------------- */}
      <div className='grid md:grid-cols-2 sm:grid-cols-1 mb-20 gap-4 mt-10 container mx-auto'>
        <div className=''>
          <img className='rounded-xl' src={banner} alt="" />
        </div>
        <div className='flex items-center'>
          <div>
          <h2 className='font-bold text-4xl text-orange-400'>Handle Toy Store</h2>
          <p className=' font-semibold text-lg'>"Welcome to our Toy Store! Step into a world of imagination and play where joy knows no bounds. Discover a treasure trove of toys that will ignite the imagination of children of all ages. From classic favorites to the latest trends, we offer a wide selection of toys that will bring smiles, laughter, and unforgettable memories. Whether you're searching for the perfect gift, planning a birthday party, or simply indulging in a playful adventure, our Toy Store is your ultimate destination. Come and explore a world of wonder, where dreams come true and imagination takes flight!"</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;