import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {

const dispatch = useDispatch();

  return (
   <nav className='flex flex-col lg:flex-row justify-between  bg-purple-300 py-2 px-2 mb-8'>
    <div>
<h3 className='text-sm font-semibold  text-grey-600' >{new Date().toUTCString().slice(0, 16)}</h3>
<h1 className='text-3xl font-bold text-purple-800 '>Nas<span className='text-4xl text-yellow-600 font-bold'>t</span>a</h1>
    </div>
    <div className='flex justify-center items-center'>
<input type='search'  name='search' id='' placeholder='Search here' autoComplete='off' 
onChange={(e)=>dispatch(setSearch(e.target.value))}
    className='p-2 border text-grey-500 border-grey-500 text-sm rounded-lg w-full lg:w-[25vw]'
/>
    </div>
   </nav>
  )
}

export default Navbar