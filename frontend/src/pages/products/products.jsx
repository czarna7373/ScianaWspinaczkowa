import React from 'react';
import useFetch from '../../hooks/useFetch';
import './products.css';

export function Products() {
  const {loading, error, data} = useFetch('http://localhost:1337/api/products?populate=*');
  if (loading)
      return <p> Loading ...</p>;
  if (error) 
      return <p> Error : </p>;
  
    return (
    <div className="products-container">      
      {data.map((product) =>
      <div key = {product.id} className = "card">
        <div>
          <img src={`http://localhost:1337${product.attributes.photo.data?.attributes?.url}`} alt="#"/>
        </div>
        <div className="card-description">
          <h6>{product.attributes.name}</h6>
          <h6>{`Cena: ${product.attributes.price} PLN`}</h6>
          <h6>{`Dostępność: ${product.attributes.availability}`}</h6>
        </div>
        <button onClick={() => this.setState({ added: true })}> Add to cart </button>
      </div>      
      )}  
    </div>
  )
}
