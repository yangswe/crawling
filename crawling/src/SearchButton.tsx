import React, {FC} from "react";
import axios from "axios";
import {SearchResultType} from 'SearchTypes'
interface Props {
    searchFormVal: string
    doNotSearchFormVal:string
    setSearchResult: React.Dispatch<React.SetStateAction<Array<SearchResultType>|null>>
}

//버튼&이벤트 컴포넌트
const SearchButton:FC<Props> = (props:Props)=> {

    function getResultObj(result:SearchResultType) {
        return {
            title: result.title,
            locationName: result.locationName,
            price: result.price,
            link: result.link,
            imageSrc: result.imageSrc
        }
    }
    return <>
        <button type="button" className="search-btn" onClick={() => {
            
            props.setSearchResult(null)

            axios({
                method: 'post',
                url: 'http://localhost/api/data',
                data: {
                    searchValue:props.searchFormVal
                }
            }).then((response) => {
                let result = props.doNotSearchFormVal != '' ?
                    response.data?.filter((result:SearchResultType)=>{
                        
                        const isExist = props.doNotSearchFormVal.split(',').some((v) => result.title.indexOf(v) != -1)
                        
                        if (!isExist) return getResultObj(result) //필터링
                        
                        
                    })
                    :
                    response.data?.map((result:SearchResultType)=>getResultObj(result))
                console.log(result)
                props.setSearchResult(result)
            });
        }}>get data</button>
    </>
}

export default SearchButton;