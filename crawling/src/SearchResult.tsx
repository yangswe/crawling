import React from "react";


import {SearchResultType} from 'SearchTypes'
import {getImgUrl} from './utils/common'

interface Props {
    searchResult: Array<SearchResultType>|null
}

//버튼&이벤트 컴포넌트
const SearchResult = (props:Props)=> {
    return <>
        <div>
            { props.searchResult ? props.searchResult?.map((item) => {
                return <div className="itemLi">
                    <div className="itemImgDiv"><img src={item.imageSrc}/></div>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.locationName}</p>
                </div>
            }) : <img src={`${getImgUrl('/public_assets/Loading.gif')}`}/> }
        </div>
    </>
}

export default SearchResult;