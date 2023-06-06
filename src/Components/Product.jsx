import React from 'react'
import { useContextSelf } from '../Context/StateContext'

const Product = (props) => {
  const {title,price,description,image} = props;
  const {dispatch} = useContextSelf();
  return (
    <div className=' p-3 rounded shadow-sm  border-black w-75 h-100 '>
        <div>
          <img src={image} className=' w-[100px] h-[100px] mt-3 object-cover' alt="" />
        </div>
        <div className=' text-xl'>{title.substring(0,20)}</div>
        <div>{description.substring(0,20)}</div>
        <div>${price}</div>
        <div className=' flex'>
          <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:props})} className=' p-3 rounded bg-teal-500 mr-3'>Add to Cart</button>
          <button className=' p-3 rounded bg-teal-500'>Detail</button>

        </div>
    </div>
  )
}

export default Product
