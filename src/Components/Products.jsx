import React from 'react'
import { useContextSelf } from '../Context/StateContext'
import Product from './Product';

const Products = () => {
  const {state : {products}} = useContextSelf();
  console.log(products);
  return (
    <div className=' flex flex-wrap justify-center gap-10 w-100'>
      {products?.map(product => {
        return(
          <Product key={product.id} {...product}/>
        )
      })}
    </div>
  )
}

export default Products
