import React from 'react'
import { CircleLoader } from 'react-spinners'
import { useState,useEffect } from 'react'

const Sucess = () => {
  const[Loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
setLoading(false);
    },2000)
  },[]);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-purple-300'>
{
  Loading ? <CircleLoader color="#36d7b7" /> : <div>
    
    <h2 className='text-3xl font-semibold text-gray-800 text-center mb-4'>Order Sucessful!</h2>
    <p className='text-xl text-gray-700'>Your order has been sucessfully placed</p>
  </div>
}

    

    </div>
  )
}

export default Sucess