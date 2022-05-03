import React, { Component } from 'react';
import './ItemsListConteiner.css'

function ItemsListConteiner({ greeting}) {
    return (
      <div className='list-item-conteiner'>
        <p>{greeting} </p>
      </div>
    )
}

export default ItemsListConteiner;
