import React from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';


export default function Navbar({setToken}) {
    const {loading, error, data,} = useFetch('http://localhost:1337/api/main-page?populate=*');
    if (loading) 
        return <p> Loading ...</p>;
    

    if (error) 
        return <p> Error : (</p>;

        const logOutHandler = () => {
            setToken("");
            localStorage.clear();
        }

        return (
        <nav className='nav'>
            <a href='/' className="site-title"> {
                data.attributes.title
            } </a>
            <ul>
                <li><a href='/products'>Products</a></li>
                <li><a href='/orders'>Orders</a></li>
                <li><a href='/login'>Login</a></li>
                <li><a href='/'onClick={logOutHandler}>Wyloguj</a></li>
            </ul>
        </nav>)
    }
