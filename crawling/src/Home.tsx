import React, { useState } from 'react';
import SearchButton from './SearchButton'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'
import {SearchResultType} from 'SearchTypes'



const Home:React.FC = ()=> {

    const [searchFormVal, setSearchFormVal] = useState('');
    const [doNotSearchFormVal, setDoNotSearchFormVal] = useState('');
    const [searchResult, setSearchResult] = useState<Array<SearchResultType>|null>([]);
    
    const [doNotSearchToggleFlag, setDoNotSearchToggleFlag] = useState(false);

    return <div className="App">
    <div className='form'>
      
      {/*검색 문구 */}
      검색어: <SearchForm 
        setSearchFormFunc={setSearchFormVal} searchValue={searchFormVal}
        />
      
      <SearchButton setSearchResult={setSearchResult} searchFormVal={searchFormVal} doNotSearchFormVal={doNotSearchFormVal}/>

      <p onClick={()=>setDoNotSearchToggleFlag(!doNotSearchToggleFlag)}>{doNotSearchToggleFlag ? '▲' : '▼'}</p>

      {/*검색 제외 문구 */}
      { doNotSearchToggleFlag && 
        (
          <>
          제외 할 단어: <SearchForm 
            setSearchFormFunc={setDoNotSearchFormVal} searchValue={doNotSearchFormVal}
            />
          </>
          
        )
      }

      <SearchResult searchResult={searchResult}/>
    </div>
  </div>
}

export default Home;