import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>A food menu is a curated list of dishes and beverages offered by a restaurant, café, or food service establishment. It serves as a guide for customers, categorizing items based on courses like appetizers, main dishes, desserts, and drinks. A well-designed menu balances variety, pricing, and dietary options, 
        ensuring it caters to different tastes and preferences.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>

                    </div>
                )

            })}
        </div>
        <hr/>





    </div>
  )
}

export default ExploreMenu