import React from "react";
import useFetch from '../../hooks/useFetch';
import "./shop.css";

export const Shop = () => {
    const {loading, error, data} = useFetch('http://localhost:1337/api/products?populate=*');
    if (loading)
        return <p> Loading ...</p>;
    if (error) 
        return <p> Error : </p>;

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

    </div>
  );
};