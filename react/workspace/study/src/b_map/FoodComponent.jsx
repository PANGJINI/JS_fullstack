import React from 'react';

const FoodComponent = ({food}) => {
    // console.log(props);
    const {id, name} = food;
    
    return (
        // <li key={props.food.i} style={props.style}>{props.food.name}, {props.food.id}</li>
        <div>
            {id}, {name}
        </div>
    );
};

export default FoodComponent;