import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProducts } from '../redux/productSlice';
import DetailComp from '../components/datail/DetailComp';
import Loading from '../components/Loading';

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getDetailProducts(id))
    }, [dispatch, id])

    console.log(productDetail, 'productDetail');
  return (
    <div>
      {
        productDetailStatus ==='LOADING' ? <Loading/> : <DetailComp productDetail={productDetail} />
      }
        
    </div>
  )
}

export default Detail