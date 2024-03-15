import React from 'react'
import { Link } from 'react-router-dom'
import emptyImg from "../../../assets/emptycart.png"
const EmptyComponent = ({name}) => {
  return (
    <div className='w-full flex items-center justify-center flex-col p-10'>
    <img  className='w-[600px] my-5' src={emptyImg} alt="empty img" />
       <div className='text-center mt-5'>Your {name} is empty</div>
       <Link to="/" className='bg-main px-5 py-3 mt-5  text-white'> Continue to shopping</Link>
    </div>
  )
}

export default EmptyComponent