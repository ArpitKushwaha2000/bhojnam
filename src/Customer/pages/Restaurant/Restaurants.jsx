import { Card, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuItemCard from './MenuItemCard';




const categories=[
  "Thali",
  "Starters",
  "Indian Mian Course",
  "Rice and Biryani",
  "Bread",
  "Accompaniments",
  "Dessert",

];
const foodType=["Vegetarian Only","NOn-Vegetarian Only","Both"];
const menu=[1,1,1,1,1,1,1,1]
const Restaurants = () => {
  const [selectedCategory,setSelectedCategory]=useState();
  const [selectedFoodType,setSelectedFoodType ]=useState();
  
  const handleFoodTypeChange=()=>{
    console.log("selected Food type - ", selectedFoodType);
  }
  const handleCategoryChange=()=>{
     console.log("selected category -",selectedCategory)
  }
  return(
  <div className='px-5 lg:px-20'>
    <section>
      <h3 className='text-gray-500 py-2 mt-10'>
        {` Home/India/Rudra Restaurants/2/Order Online`}
      </h3>
      <div >
        <img className='w-full h-[40vh] object-cover' 
        src='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt=''/>
      </div>
      <div>
        <h1 className='text-4xl py-1 font-semibold'>{`Rudra Restaurant`}</h1>
        <p className='text-gray-500'>Crispy Chicken Parmesan:Golden-fried chicken cutlates,smoothered sauce
           ,topped with mozzarella chesse and garnished with fresh basil </p>
           <p className='py-3 text-orange-300'>Open now 10:30am-12 midnight(Today)</p>
      </div>
    </section>
    <Divider/>
    <section className='pt-[2rem] lg:flex relative'>
      <div className='space-y-10 lg:w-[20%]'>
        <Card className='p-5 space-y-5 lg:sticky top-28'>
          <div>
            <Typography sx ={{paddingBottom:"1rem"}} variant='h5'>
              Category
            </Typography>
            <FormControl component={"fieldset"}>
                <RadioGroup name='catagory' value={selectedCategory} onChange={handleCategoryChange}>
                  {categories.map((item,index)=><FormControlLabel key={index} value={item}
                                          control={<Radio/>} label={item} sx={{color:"gray"}}/>)}
                </RadioGroup>
            </FormControl>
          </div>
            <Divider/>
            <div> 
            <Typography sx ={{paddingBottom:"1rem"}} variant='h5'>
            Food Type
            </Typography>
            <FormControl component={"fieldset"}>
                <RadioGroup name='foodType' 
                value={selectedFoodType}
                onChange={handleFoodTypeChange}>
                  {foodType.map((item,index)=>
                  <FormControlLabel key={index} 
                                    value={item}
                                    control={<Radio/>}
                                     label={item} 
                                     sx={{color:"gray"}}/>)}
                </RadioGroup>
            </FormControl>
          </div>
        </Card>
      </div>
      <div className='lg:w-[80%] space-y-5 lg:pl-10 '>
        {menu.map((item)=><MenuItemCard item={item}/>)}</div>
    </section>
  </div>
)}
export default Restaurants