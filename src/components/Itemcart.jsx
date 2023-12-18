import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart ,incrementqty, decrementqty} from '../redux/slices/Cartslice';
import toast, { Toaster } from 'react-hot-toast';


const ItemCart = ({id,name,qty,price,img}) => {

  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 shadow-md rounded-lg bg-purple-300 p-2 mb-3'>
    <MdDelete onClick={()=>{dispatch(removeFromCart({id,img,name,price,qty}));
    toast(`${name} Removed!`,{
      icon:"❎"
    });
  }}
   className='cursor-pointer absolute right-7 text-gray-800' />


        <img src={img} alt='' className='w-[50px] h-[50px]'/>
        <div className='leading-5'>
            <h2 className='text-gray-800 font-bold'>{name}</h2>
       <div className='flex justify-between'>
       <span className='text-purple-800  font-bold'>₹ {price}</span>
       <div className='flex gap-2 items-center justify-center absolute right-7 '> 
            <FaPlus onClick={()=> qty>=1 ? dispatch(incrementqty({id})): qty=0}  className='border-2 border-gray-600
             text-gray-600 rounded-md p-1 text-xl transition-all
              ease-linear cursor-pointer hover:text-white hover:bg-purple-600
               hover:border-none ' />
            <span>{qty}</span>
            <FaMinus onClick={()=> qty>1 ? dispatch(decrementqty({id})): qty=0} className='border-2 border-gray-600
             text-gray-600 rounded-md p-1 text-xl transition-all ease-linear
              cursor-pointer hover:text-white hover:bg-purple-600 hover:border-none '/>

            </div>
       </div>
        </div>
    </div>
  )
}

export default ItemCart