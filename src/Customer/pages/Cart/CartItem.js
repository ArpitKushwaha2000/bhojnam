import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
  return (
    <div className='px-5'>
      <div className='lg:flex items-center lg:space-x-5'>
        <div>
          <img className='w-[5rem] h-[5rem] object-cover'
            src='https://cdn.pixabay.com/photo/2022/01/27/07/34/masala-dosa-6971359_1280.jpg' alt='' />
        </div>
        <div className='flex items-center justify-between lg:w-[70%]'>
          <div className='space-y-1 lg:space-y-3 w-full'>
               <p>Dosa</p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-1'>
                <IconButton color='primary'>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className='w-5 h-5 text-xs'>
                  5
                </div>
                <IconButton color='primary'>
                  <AddCircleIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹299</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem