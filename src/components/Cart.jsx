import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ItemCart from './Itemcart';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
const navigate= useNavigate();

const [activeCart, setActiveCart] =useState(false);

   const cartItems= useSelector((state)=>state.cart.cart);
  const totalqty=cartItems.reduce((totalqty, item)=>totalqty + item.qty, 0)
  const totalprice = cartItems.reduce((total,item)=>total + item.qty * item.price, 0)
  return (
   <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-purple-400  p-5 
     ${activeCart?"translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
         <div className='flex justify-between mb-2'>
            <span className='font-bold text-xl text-gray-800'>My order</span>
            <IoCloseSharp onClick={()=>setActiveCart(!activeCart)} className='border-2 border-gray-600 text-bold rounded-md text-2xl p-1
            hover:text-purple-800 cursor-pointer hover:border-purple-800' />
         </div>
        {
         cartItems.length>0 ? cartItems.map((food)=>{
            return  <ItemCart key={food.id} id={food.id} name={food.name}  price={food.price}
            img={food.img} qty={food.qty} />
         }): <h2 className='text-center text-xl font-bold text-gray-800'>Your cart is empty!</h2>
        }
        


         <div className='absolute bottom-0'>
            <h3 className='text-gray-800 font-semibold'>Items : {totalqty} </h3>
            <h3 className='text-gray-800 font-semibold'>Total Amount : {totalprice} </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-3'/>
            <button onClick={()=>navigate("/sucess")}  className='bg-purple-800 rounded-lg hover:bg-purple-600 text-white
             font-bold px-3 py-2 w-[90vw] lg:w-[18vw]  mb-5'>Checkout</button>
            </div>
           
    </div>
    <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md 
    text-5xl p-3 fixed bottom-4 cursor-pointer right-2 ${totalqty > 0 && "animate-bounce delay-500 transition-all"} `}/>
   </>
  )
}

export default Cart