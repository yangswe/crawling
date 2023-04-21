import React from "react";

import {SearchResultType} from 'SearchTypes'

interface Props {
    searchResult: Array<SearchResultType>|null
}

//버튼&이벤트 컴포넌트
const SearchResult = (props:Props)=> {
    return <>
        <div>
            <ul>
            { props.searchResult?.map((item) => {
                return <li className="itemLi">
                    <div className="itemImgDiv"><img src={item.imageSrc}/></div>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.locationName}</p>
                </li>
            })}
            </ul>
        </div>
    </>
}

export default SearchResult;