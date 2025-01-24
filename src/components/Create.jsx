import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context';
import { nanoid } from 'nanoid';

function Create() {

   const [products, setproducts] = useContext(ProductContext);
   const [title, settitle] = useState("");
   const [image, setimage] = useState("");
   const [category, setcategory] = useState("");
   const [price, setprice] = useState("");
   const [description, setdescription] = useState("");

   const addProductHandler = (e) => {
      e.preventDefault();

      if(
         title.trim().length < 5 || 
         image.trim().length < 5 || 
         price.trim().length < 1 || 
         description.trim().length < 5
      ) 
         {
         alert("Each and every input must have atleast 4 characters");
         return;

      }

      const product = {
         id : nanoid(),
         title, 
         image, 
         category, 
         price, 
         description
      };
      setproducts([...products, product]);
      
      
   }

return (
    <form 
    onSubmit={addProductHandler}
    className='flex flex-col items-center  p-[5%] w-screen h-screen'
    >
      <h1 className='w-1/2 text-3xl font-semibold mb-5'>Add New Product</h1>

      <input 
      type="url"
      placeholder="image-link"
      className='text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
      onChange={(e) => setimage(e.target.value)} 
      value={image}
      />

   <input 
      type="text"
      placeholder='title'
      className='text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
      onChange={(e) => settitle(e.target.value)} 
      value={title}
      />

      
   <div className='w-1/2 flex justify-between'>  
      <input 
      type="text"
      placeholder="category"
      className='text-xl bg-zinc-100 rounded p-3 w-[45%] mb-3'
      onChange={(e) => setcategory(e.target.value)} 
      value={category}
      />

   <input 
      type="number"
      placeholder='price'
      className='text-xl bg-zinc-100 rounded p-3 w-[45%] mb-3'
      onChange={(e) => setprice(e.target.value)} 
      value={price}
      />

      </div>
      <textarea
      onChange={(e) => setdescription(e.target.value)}
      placeholder='enter product description here...'
      value={description}
       className='text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
       rows='8'>

      </textarea>
      <div className='w-1/2'>
      <button className='py-2 px-5 border rounded border-blue-200 text-blue-300'>
         Add New Product
      </button>
      </div>


       
    

    </form>
  )
}

export default Create;
