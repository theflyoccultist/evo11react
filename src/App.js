import React from 'react';
import Quotes from './components/Quotes';
import Grid from './components/Grid';
import Header from './components/Header';
import Photos from './components/Photos';
import Checklizt from './components/Checklizt';
import './App.css';

function App () {
    return (
      <div className='App'>
        <Header />
        <Quotes />
        <Grid />
        <Photos />
        <Checklizt />
      </div>
    );
}

export default App;