import React, { useEffect, useState } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { TfiGift } from 'react-icons/tfi';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { IoGameController } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import './navbar.css'
 
const Navbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menuitems')
        .then( res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="navbar nav-btm">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="bg-slate-200 menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                    <li className='text-slate-300 text-lg flex'><Link to="/"><span><BiCartAlt></BiCartAlt></span> Home</Link></li> 
                    {
                        categories.map(category => <li key={category.id}><Link className='text-slate-500 text-lg flex' to={`/category/${category.id}`}>{category.name}</Link></li>)
                    }
                    <div className="navbar-end w-full">
                        <button className='btn btn-outline btn-sm text-slate-500'>shop great deal now</button>
                    </div>
                </ul>
                </div>
                
                <div className='ml-2 flex mobile-icons'>
                    <span className=' text-2xl lg:text-3xl text-white'><TfiGift></TfiGift></span>
                    <span className='px-3 lg:px-6 text-2xl lg:text-3xl text-white'><BsFillPlayCircleFill></BsFillPlayCircleFill></span>
                    <span className='text-2xl lg:text-3xl text-white'><IoGameController></IoGameController></span>
                </div>
                
            </div>

            <div className="navbar-center hidden md:hidden lg:flex">
                <ul className="ml-20 menu menu-horizontal px-1">
                    <li className='text-slate-300 text-lg flex'><Link to="/"><span><BiCartAlt></BiCartAlt></span> Home</Link></li>
                    <li className='text-slate-300 text-lg flex'><Link to="/allProducts">All</Link></li>
                    {
                        categories.map(category => <li key={category.id}><Link className='text-slate-300 text-lg' to={`/category/${category.id}`}>{category.name}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;