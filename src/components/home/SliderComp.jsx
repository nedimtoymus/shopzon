import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
          <Slider {...settings}>
            <div className='!flex items-center bg-gray-100 px-6'>
              <div className=''>
              <div className='text-6xl font-bold'>En kaliteli ayakkabılar burada</div>
              <div className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores assumenda beatae rem deserunt itaque officiis optio saepe, fuga quae inventore! A quidem sequi ab, minima eum repudiandae voluptate! </div>
              <div className='text-2xl border rounded-full cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
              </div>
                <img src="https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/23-05/25/101388367_f4.jpg?w=600" alt="" />
            </div>
            <div className='!flex items-center bg-gray-100 px-6'> 
            <div >
              <div className='text-6xl font-bold'>En kaliteli ayakkabılar burada</div>
              <div className='my-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolores assumenda beatae rem deserunt itaque officiis optio saepe, fuga quae inventore! A quidem sequi ab, minima eum repudiandae voluptate! </div>
              <div className='text-2xl border rounded-full cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
              </div>
                <img src="https://floimages.mncdn.com/mnresize/600/-/media/catalog/product/23-06/02/101395392_f4-1685712477.jpg?w=600" alt="" />
            </div>
          </Slider>
    </div>
  
    )
}
export default SliderComp