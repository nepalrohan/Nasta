import React,{useEffect, useState} from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector} from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const Menu = () => {
const [categories, setCategories] = useState([]);
const listUniqueCategories =()=>{
  const uniqueCategories = [...new Set(FoodData.map((food)=>food.category)),
  ];


setCategories(uniqueCategories);
console.log(uniqueCategories);
};
useEffect(()=>{
listUniqueCategories();
},[]);


const dispatch = useDispatch();
const selectedCategory = useSelector((state)=>state.category.category);

  return (
    <div className='mx-6'>
        <h3 className='text-grey-500 font-semibold'>Find the best food!</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth  lg:overflow-hidden'>
        <button onClick ={()=> dispatch(setCategory("All"))} 
                 className={`  ${selectedCategory==="All" && "bg-purple-600 text-white"}  px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-purple-600 hover:text-white `}>All</button>
           {
            categories.map((category, index)=>{
              return(
                
                <button onClick ={()=> dispatch(setCategory(category))} 
                key ={index} className={` ${selectedCategory===category && "bg-purple-500 text-white"} px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-purple-600 hover:text-white `}>{category}</button>
              )
            })
           }
        </div>
    </div>
  )
}

export default Menu
