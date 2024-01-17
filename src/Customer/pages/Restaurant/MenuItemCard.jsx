import { Button, Card } from '@mui/material'
import React from 'react'

const MenuItemCard = ({item}) => {
  const handleAddItemToCart=()=>{
    console.log("handle add item to cart")
  }
  return (
    <Card className='p-5 lg:flex item-center justify-between box'>

        <div className='lg:flex items-center lg:space-x-5'>
              <img className='w-[7rem] h-[7rem] object-cover' 
              src='https://cdn.pixabay.com/photo/2022/01/27/07/34/masala-dosa-6971359_1280.jpg' alt=''/>
              <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
               <p className='font-semibold text-xl'>{`Dosa`}</p>
               <p >₹{299}</p>
               <p className='text-gray-400'>{`Rice,Sambhar,Papad`}</p>
              </div>
        </div>
       <Button onClick={handleAddItemToCart}>Add TO CART</Button>
    </Card>
  )
}

export default MenuItemCard