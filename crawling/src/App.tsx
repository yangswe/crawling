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
        <div className="App">
          <div className='form'>
            App.tsx
          </div>
        </div>
      <Home/>
    </>
  );
}

export default App;