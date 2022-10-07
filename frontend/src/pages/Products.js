import React from 'react';
import useFetch from '../hooks/useFetch';


export default function Products() {
  const {loading, error, data,} = useFetch('http://localhost:1337/api/products?populate=*');
  if (loading)
      return <p> Loading ...</p>;

  if (error) 
      return <p> Error : (</p>;
  
    return (
    <div className='products-container'>
      Products
    </div>
  )
}
