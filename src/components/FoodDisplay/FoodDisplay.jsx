import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext.jsx'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)

    const filteredList =
        category === "ALL"
            ? food_list
            : food_list.filter((item) => item.category === category)
  return (
    <div className='food-display' id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {filteredList.map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      
    </div>
  )
}

export default FoodDisplay
