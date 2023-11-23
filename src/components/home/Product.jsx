import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`products/${product?.id}`)} className='w-[440px] p-5 mb-5 border rounded-md relative cursor-pointer mx-2'>
        <div className='absolute top-0 right-0 p-2 m-1 text-3xl font-bold text-white bg-black roundedplace-items-end'>{ product?.price} <span className='text-sm'>TL</span></div>
        <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
        <div className='px-3 mt-3 text-xl font-bold text-center '>{product?.title} </div>

    </div>
  )
}

export default Product