import React from 'react'
import { IoStar } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/Cartslice';

const Card = ({id,name,price,desc,img,rating,handletoast}) => {
    const dispatch =useDispatch();
  return (
    <div className='font-bold w-[220px] bg-white p-5 flex flex-col rounded-lg gap-2'>
    <img src={img}
 alt=""    className='w-[auto] h-[130px] hover:scale-110 cursor-grab transition-all duration-300 ease-in-out' />
<div className='text-sm flex justify-between mt-1'>
    <h2>{name}</h2>
    <span className='text-purple-600'>₹ {price}</span>
</div>

<p className='text-sm font-normal '>{desc.slice(0,55)}.... </p>
<div className='flex justify-between'>
    <span className='flex justify-center items-center' >
    
    <IoStar className=' text-yellow-600' />{rating}
    </span>
    <button onClick={()=>{
      dispatch(addToCart({
         id,name,price,rating, qty:1, img
      }));
      handletoast(name);
    }} className='p-1 text-white bg-purple-600 hover:bg-purple-900 rounded-lg text-sm'>Add to cart</button>
    
</div>
    </div>
  )
}


export default Card
