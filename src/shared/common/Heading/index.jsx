import React from 'react'
import { Link } from 'react-router-dom'

const Heading = () => {
  return (
    <div className="py-5 mb-6 border-t border-b border-[#e6e6e6] my-4 dark:text-dark dark:bg-dark">
          <div className="px-[100px] flex justify-between items-center">
           <div className="text-xl font-semibold text-gray-600 dark:text-dark">Best seller</div>
              <Link to="/all-products" className='text-md hover:text-main'>see more</Link> 
          </div>
        </div>
  )
}

export default Heading