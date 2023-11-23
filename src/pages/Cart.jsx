import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const { carts , totalAmount, itemCount} = useSelector(state => state.carts);
    const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(carts, totalAmount, itemCount, 'carts');

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div>
        {
            carts?.length > 0 ? <div>
                {
                    carts?.map((cart, i) => (
                        <CartComp key={i} cart={cart}/>
                    ))
                
                }
                <div className='flex items-center justify-end text-2xl '>Toplam Tutar: <span className='ml-2 text-2xl font-bold'>{totalAmount} TL</span></div>
            </div> :
            
            <div>
                Kartınız Boş...
            </div>
        }
    </div>
  )
}

export default Cart