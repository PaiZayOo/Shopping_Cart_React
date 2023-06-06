import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useContextSelf } from "../Context/StateContext";

const Cart = ({ id, title, image, price, increaseTotal, decreaseTotal }) => {
  const [qty, setQty] = useState(1);
  const { dispatch, state : {cart} } = useContextSelf();
  console.log(cart.length);

  const increaseQty = () => {
    setQty(qty + 1);
    increaseTotal(price);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      decreaseTotal(price);
    }
  };

  const removing1 = () => {
    dispatch({type: "REMOVE_FROM_CART", payload: id});
    decreaseTotal(qtyPrice);
  };

  const qtyPrice = qty * price;
  return (
    <div>
      { cart.length >= 1 ? 
      <div className=" flex justify-around items-center">
      <div className=" flex items-center mb-2">
        <img
          src={image}
          alt=""
          className=" w-[100px] h-[100px] mt-3 object-cover"
        />
        <div className=" ml-3">
          <h1 className=" text-xl font-semibold">{title.substring(0, 25)}</h1>
          <h1>${qtyPrice.toFixed(2)}</h1>
          <p className=" text-red-600 cursor-pointer" onClick={removing1}>
            remove
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <button onClick={increaseQty}>
          <IoIosArrowUp />
        </button>
        <p>{qty}</p>
        <button onClick={decreaseQty}>
          <IoIosArrowDown />
        </button>
      </div>
    </div> : 
    <div>
      <p>Your cart is empty</p>
    </div>
    }
    </div>
  );
};

export default Cart;
