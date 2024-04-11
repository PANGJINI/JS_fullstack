import React from 'react';
import FoodComponent from './FoodComponent';

const FoodContainer = () => {

    const style = {
        listStyle: "none"
    }

    const foods = [
        {
            id: 1,
            name: '샐러드',
        },
        {
            id: 2,
            name: '마라탕',
        },
        {
            id: 3,
            name: '치킨',
        },
        {
            id: 4,
            name: '타코',
        },
    ]

    const foodList = foods.map((food, i, foods) => {
            return <FoodComponent key={i} style={style} food={food} />
        })
    // console.log(foodList);

    return (
        <div>
            {foodList}
        </div>
    );
};

export default FoodContainer;