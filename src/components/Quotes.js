import React, { useEffect, useState } from 'react';
import quotesData from './quotes.json';
import './Quotes.css';

const Quotes = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const getRandomQuote = () => {
            const randomIndex = Math.floor(Math.random() * quotesData.length);
            return quotesData[randomIndex];
        };
        setQuote(getRandomQuote());
    }, []);

    return(
        <div className='grid-wrapper'>
            <h2 className='title'>Quote of the day</h2>
            <div className='quote-container'>
                {quote ? (
                    <blockquote>
                    "{quote.text}"
                    </blockquote>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
 };

 export default Quotes;