import React from 'react';
import './Photos.css';

const Photos = () => {
    return(
        <div className='grid-wrapper'>        
            <h2 className='title'>Your Photos</h2>
            <div className='photo-container'>
                <div className='photo-item'>
                    <label htmlFor='photo1'>Photo1</label>
                </div>
                <div className='photo-item'>
                    <label htmlFor='photo2'>Photo2</label>
                </div>
                <div className='photo-item'>
                    <label htmlFor='photo3'>Photo3</label>
                </div>
            </div>
        </div>

    )
}

export default Photos;