import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state)=> state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=>acc + curr.price,0))
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (
          <div className="flex max-w-6xl mx-auto item-center p-2 justify-between mt-2 mb-2">
            <div>
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item ={item} itemIndex={index}/>
                })
              }
            </div>
            <div className="flex mt-5 flex-col w-full">
              <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">
                <div className="flex flex-col gap-5">
                  <p className="text-xl text-green-800 font-semibold  uppercase">Your Cart</p>
                  <p className="text-5xl text-green-700 font-semibold -mt-5">Summary</p>
                  <p className="text-xl">
                    <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-bold"><span className="text-gray-700 font-semibold ">Total Amount: ${totalAmount}</span></p>
                  <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white  transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ):
        (<div className="flex flex-col min-h-[80vh] justify-center items-center">
          <h2 className="text-gray-700 font-semibold text-xl mb-2">Your Cart is Empty!</h2>
          <NavLink to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white  transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">Shop now</button>
          </NavLink>
        </div>)
      }
    </div>
  );
};

export default Cart;
