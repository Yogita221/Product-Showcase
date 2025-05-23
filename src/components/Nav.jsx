
import React, { useContext } from 'react';
import { ProductContext } from '../Utils/Context';
import { Link } from 'react-router-dom';


const Nav = () => {
    const [products] = useContext(ProductContext);


    let distinct_category = Array.isArray(products)
  ? products.reduce((acc, cv) => [...acc, cv.category], [])
  : [];

distinct_category = [...new Set(distinct_category)];


    const color = () => {
      return `rgba(${(Math.random() * 225).toFixed()},
                  ${(Math.random() * 225).toFixed()},
                  ${(Math.random() * 225).toFixed()}, 0.4)`;
    };
   


  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>

    <a
     className='py-3 px-6 border rounded border-blue-200 text-blue-400' href="/create">
      Add New Product
    </a>

    <hr className=' my-3 w-[80%]'/>

    <h1 className='text-2xl font-bold mb-3 w-[80%]'>Category Filter</h1>

    <div className=' w-[80%] '>

      
      {distinct_category.map((c,i) =>(
          <Link 
          key={i}
          to={`/?category=${c}`} 
          className='flex items-center mb-3'
          >

          <span style={{backgroundColor: color()}}
          className='rounded-full mr-2 w-[15px] h-[15px] bg-blue-100 '></span>
           {c}
          </Link>
    

      ))}

    
    </div>
  </nav>
  )
}

export default Nav
