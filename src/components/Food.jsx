import React from 'react'
import Card from './Card'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Food = () => {
const category = useSelector((state)=>state.category.category);

const search = useSelector((state)=>state.search.search);

const handletoast =(name)=>{toast.success(`Added ${name}`)}


  return (
    <>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    
    <div className='flex flex-wrap mx-6 gap-10 justify-center lg:justify-start my-10'>
   {
FoodData.filter((food)=>{
  if(category==="All"){
    return food.name.toLowerCase().includes(search.toLowerCase());
  }
  else{
     return  category === food.category && food.name.toLowerCase().includes(search.toLowerCase());

  }
}).map((food)=>(<Card key={food.id} 
id={food.id} 
name={food.name}
price={food.price}
desc={food.desc}
rating={food.rating}
img={food.img}
handletoast={handletoast}
 />))
   }

  
        
    </div>
    </>
  )
}

export default Food