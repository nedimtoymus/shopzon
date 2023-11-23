import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='flex items-center justify-end p-5 my-5 bg-gray-100'>
        <select onChange={e => setSort(e.target.value)} className='px-5 py-3 bg-white' name="" id="">
            <option disabled value="">SEÇİNİZ</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting