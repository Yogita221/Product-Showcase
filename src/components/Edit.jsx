import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
   const [products, setproducts] = useContext(ProductContext);
   const navigate = useNavigate();
   const{ id } = useParams();
   const [product, setproduct] = useState({
      title: "",
      description: "",
      image: "",
      price: "",

      category: "",
   });

   const changeHandler = (e) => {
      console.log(e.target.name, e.target.value);
      setproduct({...product, [e.target.name]: e.target.value});
   }
   



    useEffect(() => {
     setproduct(products.filter((p) => p.id == id)[0])
    }, [id]);

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
      localStorage.setItem("products", JSON.stringify(...products, product))
      navigate("/")
      
   }
  return (
    <form 
    onSubmit={addProductHandler}
    className='flex flex-col items-center  p-[5%] w-screen h-screen'
    >
      <h1 className='w-1/2 text-3xl font-semibold mb-5'>Edit Product</h1>

      <input 
      type="url"
      placeholder="image-link"
      className='text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
      name='image'
      onChange={changeHandler} 
      value={product && product.image}
      />

   <input 
      type="text"
      placeholder='title'
      className='text-xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
      name='title'
      onChange={changeHandler} 
      value={product && product.title}
      />

      
   <div className='w-1/2 flex justify-between'>  
      <input 
      type="text"
      placeholder="category"
      className='text-xl bg-zinc-100 rounded p-3 w-[45%] mb-3'
      name='category'
      onChange={changeHandler} 
      value={product && product.category}
      />

   <input 
      type="number"
      placeholder='price'
      className='text-xl bg-zinc-100 rounded p-3 w-[45%] mb-3'
      name='price'
      onChange={changeHandler} 
      value={product && product.price}
      />

      </div>
      <textarea
      name='description'
      onChange={changeHandler}
      placeholder='enter product description here...'
      value={product && product.description}
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

export default Edit
