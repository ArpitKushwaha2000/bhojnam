import React from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Divider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Orders from './Orders'
import UsersAddress from './UsersAddress'
import UsersPayments from './UsersPayments'
import Favorites from './Favorites';

const Profile = () => {
    return (
        <div className='lg:flex'>
            <div className='lg:w-[20%]'>
                <ProfileNavigation />

            </div>
            <Divider orientation='vertical' flexItem />
            <div className='lf:w-[80%] '>
                <Routes>
                    <Route path="/" element={<UserProfile />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/address" element={<UsersAddress />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/payments" element={<UsersPayments />} />

                </Routes>
            </div>

        </div>
    )
}

export default Profile