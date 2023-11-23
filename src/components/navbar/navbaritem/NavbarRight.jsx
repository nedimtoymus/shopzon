import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector(state => state.carts);
  const navigate = useNavigate();

 

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className='flex items-center gap-8 '>
        <div className='flex items-center p-3 bg-gray-200 border rounded-full'>
            <input className='bg-gray-200 outline-none' type="text" placeholder='Arama Yapınız...' />
            <CiSearch size={28} />
        </div>
        <FaRegHeart size={28}/>
        <div onClick={()=> navigate("cart")} className='relative'>
            <div className='absolute flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full -top-3 -right-3'>{itemCount}</div>
            <SlBasket size={28} />
        </div>
    </div>
  )
}

export default NavbarRight;