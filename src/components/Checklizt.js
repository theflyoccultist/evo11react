import React from 'react';
import './Checklizt.css';

const Checklizt = () => {
    return (
        <div className='checklizt-container'>
            <div className='checklizt-item'>
                <input type='checkbox' id='check1'/>
                <label htmlFor='checklizt1'>Buy a dress</label>
            </div>
            <div className='checklizt-item'>
                <input type='checkbox' id='check2'/>
                <label htmlFor='checklizt2'>Find a job</label>
            </div>
            <div className='checklizt-item'>
                <input type='checkbox' id='check3'/>
                <label htmlFor='checklizt3'>Coming out</label>
            </div>
        </div>
    );
};

export default Checklizt;