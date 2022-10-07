import React from 'react';
import useFetch from '../hooks/useFetch';
import '../styles/Products.css';

export default function Products() {
  const {loading, error, data,} = useFetch('http://localhost:1337/api/products?populate=*');
  if (loading)
      return <p> Loading ...</p>;

  if (error) 
      return <p> Error : (</p>;
  
    return (
    <div className="products-container">      
      {data.map((product) =>
      <div key = {product.id} className = "card">
        <div><img src={product.attributes?.photo?.data?.attributes?.formats?.small?.url} alt="#"/></div>
        <div className="card-description">
          <h6>{product.attributes.name}</h6>
          <h6>{`Cena: ${product.attributes.price} PLN`}</h6>
          <h6>{`Dostępność: ${product.attributes.availability}`}</h6>
        </div>
      </div>      
      )}     
    </div>
  )
}
