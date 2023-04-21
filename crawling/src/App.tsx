import React, { useState } from 'react';
import Home from './Home'
import SearchButton from './SearchButton'
import SearchForm from './SearchForm'
import "./App.css"
import { Link } from "react-router-dom"
import SearchResult from './SearchResult'
import {SearchResultType} from 'SearchTypes'

function App() {

  const [searchFormVal, setSearchFormVal] = useState('');
  const [searchResult, setSearchResult] = useState<Array<SearchResultType>|null>(null);

  return (
    <>
      <Link to="/">
        <div className="App">
          <div className='form'>
            <SearchForm setSearchFormVal={setSearchFormVal} searchFormVal={searchFormVal}/>
            <SearchButton setSearchResult={setSearchResult} searchFormVal={searchFormVal}/>

            <SearchResult searchResult={searchResult}/>
          </div>
        </div>
      </Link>

      <Link to="/sayHi">
        <div>
          <h3>Hi</h3>
        </div>
      </Link>
      <Home/>
    </>
  );
}

export default App;