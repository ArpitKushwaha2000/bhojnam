import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = (items) => {
    return (
        <Card className='d-flex items-center justify-between p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' 
                src='https://cdn.pixabay.com/photo/2022/01/27/07/34/masala-dosa-6971359_1280.jpg' alt='' />
              <div>
                <p>Dosa</p>
                <p className='text-gray-400'>₹299</p>
               
              </div>
            </div>
              <div>
                <Button variant='contained'>Track</Button></div>
         </Card>
    )
}

export default OrderCard