import React from 'react';

const List = ({item}) => {
    return (
        <li><img src={item.src} alt={item.name} /><span>{item.name}</span></li>
    );
};

export default List;