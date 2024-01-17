import { AccountCircleOutlined, Restaurant } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react';
import RestaurantCard from '../Homepage/RestaurantCard ';
import Restaurants from '../../pages/Restaurant/Restaurants';


// const favorite=[1,1,1,1,1,1];

const UserProfile = () => {
    const handleLogout = () => {
        console.log("handle logout")
    }
    return (
        <div className=" min-h-[80vh] flex flex-col justify-center items-center text-center"> 
            <div className='flex flex-col items-center justify-center'>
                <AccountCircleOutlined sx={{ fontSize: "9rem" }} />
                <h1 className='py-5 text-2xl font-semibold'>Arpit</h1>
                <p>Email:{"ak20000304@gmail.com"}</p>
                <Button
                    onClick={handleLogout}
                    variant='contained' sx={{ margin: "2rem 0rem"}}>Logout</Button>
                    {Restaurants.map((items)=><RestaurantCard items={items}/>)}
            </div>

        </div>
    );
};

export default UserProfile