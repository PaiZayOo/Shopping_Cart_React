import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { useContextSelf } from "../Context/StateContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useContextSelf();
  console.log(cart);
  return (
    <div className=" flex justify-around items-center py-5 shadow-md mb-3">
      <Link to={'/'}>
      <h1>Shop</h1>
      </Link>
      <div className=" flex items-center">
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className=" bg-gray-300  outline-none mr-3"
          />
        </div>
        <Link to={'/addtocart'}>
          <div className=" relative">
            <BsCartPlus className=" text-4xl" />
            <p className=" bg-teal-400 text-center rounded  px-1 absolute top-[-10px] left-[27px]">
              {cart.length}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
