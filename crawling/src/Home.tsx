import React, { useState } from 'react';
import SearchButton from './SearchButton'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import {SearchResultType} from 'SearchTypes'



const Home:React.FC = ()=> {

    const [searchFormVal, setSearchFormVal] = useState('');
    const [searchResult, setSearchResult] = useState<Array<SearchResultType>|null>([]);

    return <div className="App">
    <div className='form'>
      <SearchForm setSearchFormVal={setSearchFormVal} searchFormVal={searchFormVal}/>
      <SearchButton setSearchResult={setSearchResult} searchFormVal={searchFormVal}/>

      <SearchResult searchResult={searchResult}/>
    </div>
  </div>
}

export default Home;