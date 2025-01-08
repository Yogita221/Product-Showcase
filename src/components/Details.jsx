import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[70%] h-full m-auto p-[10%] flex justify-between items-center'>

        <img className='object-contain h-[80%] w-[40%]'
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
        alt=""
         />
        <div className='content  w-[50%] '>

          <h1 className='text-3xl'>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <h3 className='text-zinc-400 my-5'>
          Mens Clothings
          </h3>
          <h2 className='text-red-400 mb-3'>
          $ 109.95  
          </h2>
          <p className='mb-8'>
          Your perfect pack for everyday use and walks in the forest.
          Stash your laptop (up to 15 inches) in the padded sleeve,
          your everyday
          </p>
          <Link  
          className='mr-5 py-3 px-6 border rounded border-blue-200 text-blue-400'>
          Edit
          </Link>

          <Link  
          className='py-3 px-6 border rounded border-red-200 text-red-400'>
          Delete
          </Link>


        </div>
      
    </div>
  )
}

export default Details
