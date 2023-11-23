import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux';

const CartComp = ({cart}) => {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center justify-between my-10'>
      <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
    <div>
      <div className='text-xl'>{cart?.title}</div>
      <div>{cart?.description}</div>
    </div>
    <div className='text-xl font-bold'>{cart?.price} TL ({cart?.quantity} )</div>
    <div onClick={()=> dispatch (removeFromCart(cart?.id))} className='text-white bg-red-500 w-[150px] h-16 flex items-center justify-center text-2xl cursor-pointer rounded-md'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp