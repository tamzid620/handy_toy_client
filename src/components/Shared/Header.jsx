import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import img from '../../../public/toyStore.png'
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth();
const Header = () => {

  const [users, setUsers] = useState({});
  useEffect(() => {
    if (app) {
      onAuthStateChanged(auth, (user) => {
        setUsers(user);
      });
    }
  }, [app]);

  const logout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
      });
  };

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
        {/* <div className="navbar-end">
          <div className="w-10 rounded-full me-2">
            <img src={img} />
          </div>
          <a className="btn bg-orange-700"><Link to="/login">Login</Link></a>
        </div> */}
        <div className="navbar-end flex gap-2">
          <div className="w-10 rounded-full">
            <img className="w-10 rounded-full" src={users?.photoURL} />
          </div>
          <div>
            {
              users ? (
                <button onClick={() => { logout(); }} className="btn bg-orange-600 text-white">
                  Log out
                </button>) : (
                <Link to="/login">
                  <button className="btn bg-orange-600 text-white">Log In</button>
                </Link>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;