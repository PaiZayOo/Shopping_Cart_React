import React, { useEffect, useState } from "react";
import { useContextSelf } from "../Context/StateContext";
import Cart from "./Cart";

const AddToCart = () => {
  const {
    state: { cart }, dispatch
  } = useContextSelf();

  const [mainTotal, setMainTotal] = useState(0);

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const increaseTotal = (price) => {
       setMainTotal( mainTotal + price);
  }
  const decreaseTotal = (price) => {
    setMainTotal( mainTotal - price);
}

  const total = () => cart?.reduce((pv, cv) => pv + cv.price, 0);
  return (
    <div className=" ">
      {cart?.map((item) => {
        return <Cart key={item.id} {...item} increaseTotal={increaseTotal} decreaseTotal={decreaseTotal} />;
      })}
      <hr className=" my-3" />
      <div className=" flex  justify-around">
        <p>Total</p>
        <p>$ {mainTotal.toFixed(2)}</p>
      </div>
      <div className=" flex justify-center mt-3">
      <button onClick={()=>dispatch({type:'CLEAR_CART'})}  className=" p-2 border rounded border-red-500 text-red-700">Clear Cart</button>

      </div>
    </div>
  );
};

export default AddToCart;
