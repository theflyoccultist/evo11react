import React from 'react';
import './Grid.css';

const Grid = () => {
    return (

        <div className='grid-container'>
            <div className='grid-item'>
                <input type='checkbox' id='item1'/>
                <label htmlFor='item1'>Exfoliate Face</label>
            </div>
            <div className='grid-item'>
                <input type='checkbox' id='item2'/>
                <label htmlFor='item2'>Hydrate Face</label>
            </div>
            <div className='grid-item'>
                <input type='checkbox' id='item3'/>
                <label htmlFor='item3'>Voice Training</label>
            </div>
            <div className='grid-item'>
                <input type='checkbox' id='item4'/>
                <label htmlFor='item4'>Makeup</label>
            </div>
            <div className='grid-item'>
                <input type='checkbox' id='item5'/>
                <label htmlFor='item5'>Solar Cream</label>
            </div>
            <div className='grid-item'>
                <input type='checkbox' id='item6'/>
                <label htmlFor='item6'>Perfume</label>
            </div>
        </div>
    );
};

export default Grid;