import React, { useEffect, useState } from 'react';
import quotesData from './quotes.json';
import './Quotes.css';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        setQuotes(quotesData);
    }, []);

    return(
        <div className='grid-wrapper'>
            <h2 className='title'>Daily Quotes</h2>
            <div className='quote-container'>
                {quotes.map((quote) => (
                    <blockquote>
                    "{quote.text}"
                    </blockquote>
                ))}
            </div>
        </div>
    );
 };

 export default Quotes;