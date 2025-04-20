import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from '../Utils/Context';

const Details = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  console.log(id);
 
  
  // const getsingleproduct = async () => {
  //   try {
  //     const {data} = await axios.get(`/products/${id}`)
  //     // console.log(data);
  //     setproduct(data);

  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if(!product){
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // getsingleproduct();

  }, [])
  
  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter((p) => p.id !== id);
    setproducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    navigate("/")

  };



  return ( product ?
    <div className='w-[70%] h-full m-auto p-[10%] flex justify-between items-center'>

        <img className='object-contain h-[80%] w-[40%]'
        src={`${product.image}`}
        alt=""
         />
        <div className='content  w-[50%] '>

          <h1 className='text-3xl'>
             {product.title}
          </h1>

          <h3 className='text-zinc-400 my-5'>
            {product.category}
          </h3>

          <h2 className='text-red-400 mb-3'>
            {product.price} 
          </h2>

          <p className='mb-8'>
            {product.description}
          </p>
          <Link  
          to={`/edit/${product.id}`}
          className='mr-5 py-3 px-6 border rounded border-blue-200 text-blue-400'>
          Edit
          </Link>

          <button
          onClick={() => ProductDeleteHandler(product.id)} 
          className='py-3 px-6 border rounded border-red-200 text-red-400'>
          Delete
          </button>


        </div>
      
    </div> : <Loading />
  );
};

export default Details
