import React, { useState } from 'react';
import Home from './Home'
import SearchButton from './SearchButton'
import SearchForm from './SearchForm'
import "./App.css"

function App() {

  const [searchFormVal, setSearchFormVal] = useState('');

  return (
    <>
      <div className="App">
        <div className='form'>
          <SearchForm setSearchFormVal={setSearchFormVal} searchFormVal={searchFormVal}/>
          <SearchButton searchFormVal={searchFormVal}/>
        </div>
      </div>
      <Home/>
    </>
  );
}

export default App;