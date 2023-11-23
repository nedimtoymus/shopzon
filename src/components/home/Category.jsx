import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)
    
    console.log(categories, 'categories');



    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
  return (
    <div className='w-1/6 max-h-screen p-4 bg-gray-100'>
        <div className='px-2 pb-1 text-xl font-bold border-b'>KATEGORİ</div>
        {
            categories?.map((category,i) => (
                <div onClick={()=> setCategory(category)}  className='p-2 text-lg cursor-pointer hover:bg-gray-200' key={i}>{category.title}</div>
            ))
        }   
    </div>
  )
}

export default Category;