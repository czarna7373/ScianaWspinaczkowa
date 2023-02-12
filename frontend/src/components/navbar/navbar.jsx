import React from "react";
import { Link } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = ({setToken}) => {
    const {loading, error, data,} = useFetch('http://localhost:1337/api/main-page?populate=*');
    if (loading) 
        return <p> Loading ...</p>;  

    if (error) 
        return <p> Error : </p>;
        
    const logOutHandler = () => {
            setToken("");
            localStorage.clear();
        }

  return (
    <div className="nav">
    <a href='/' className="site-title"> {data.attributes.title} </a>
      <div className="links">
        <Link to="/"> Homepage </Link>
        <Link to="/products"> Shop </Link>
        <Link to="/login"> Login </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};