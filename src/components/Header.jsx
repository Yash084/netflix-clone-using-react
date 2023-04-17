import React from 'react'
import logo from "../logo.png"
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

const Header = () => {
    return (
        <nav className="header">

            <img src={logo} alt="logo" />

            <div className='top'>
                <Link className='link' to="/tvshows" >TV Shows</Link>
                <Link className='link' to="/movies" >Movies</Link>
                <Link className='link' to="/recent" >Recently Added</Link>
                <Link className='link' to="/mylist" >My List</Link>
            </div>
            <HiSearch style={{color:"white", fontSize:"1.4rem",fontWeight:"300"}}/>
        </nav>
    )
}

export default Header;