import React, { useState } from 'react';
import Home from './Home'
import SearchButton from './SearchButton'
import SearchForm from './SearchForm'

function App() {

  const [searchFormVal, setSearchFormVal] = useState('');

  return (
    <>
      <div className="App">
        <SearchForm setSearchFormVal={setSearchFormVal} searchFormVal={searchFormVal}/>
        <SearchButton searchFormVal={searchFormVal}/>
      </div>
      <Home/>
    </>
  );
}

export default App;