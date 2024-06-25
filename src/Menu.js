import React from 'react';
import List from './List'

const Menu = ({products}) => {
    return (
        <ul>
            { 
                products.map((item,index)=><List item={item} key={index} />)
            }
        </ul>
    );
};

export default Menu;