import React, { useState } from 'react'

function Create() {

   const [title, settitle] = useState("");
   const [image, setimage] = useState("");
   const [category, setcategory] = useState("");
   const [price, setprice] = useState("");
   const [description, setdescription] = useState("");

return (
    <form 
    className='flex flex-col items-center  p-[5%] w-screen h-screen'
    >
      <h1 className='w-1/2 text-3xl font-semibold mb-5'>Add New Product</h1>

      <input 
      type="url"
      placeholder="image-link"
      className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
      onChange={(e) => setimage(e.target.value)} 
      value={image}
      />

   <input 
      type="text"
      placeholder='title'
      className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
      onChange={(e) => settitle(e.target.value)} 
      value={title}
      />
      <div>
        
      </div>
       
    

    </form>
  )
}

export default Create;
